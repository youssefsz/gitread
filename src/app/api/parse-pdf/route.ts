import { NextRequest, NextResponse } from 'next/server';
import { PDFParser } from '@/lib/pdf-parser';
import { FileStorage } from '@/lib/file-storage';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import path from 'path';

// Set up PDF.js worker with absolute file path
pdfjsLib.GlobalWorkerOptions.workerSrc = path.join(process.cwd(), 'node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs');

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }
    
    if (!PDFParser.validatePDF(file)) {
      return NextResponse.json(
        { error: 'Invalid PDF file or file too large' },
        { status: 400 }
      );
    }
    
    // Handle text files
    if (file.type === 'text/plain') {
      const text = await file.text();
      return NextResponse.json({ text });
    }
    
    // Save the file to the uploads directory
    try {
      await FileStorage.saveFile(file);
    } catch (saveError) {
      console.error('Error saving file:', saveError);
      // Continue with processing even if saving fails
    }
    
    // Handle PDF files with PDF.js
    const arrayBuffer = await file.arrayBuffer();
    const uint8Array = new Uint8Array(arrayBuffer);
    
    try {
      const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;
      let fullText = '';
      
      // Extract text from each page
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        const page = await pdf.getPage(pageNum);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item: any) => item.str)
          .join(' ');
        fullText += pageText + '\n';
      }
      
      if (!fullText.trim()) {
        return NextResponse.json(
          { error: 'No text content found in PDF. Please ensure your PDF contains selectable text.' },
          { status: 400 }
        );
      }
      
      return NextResponse.json({ text: fullText.trim() });
    } catch (pdfError) {
      console.error('PDF parsing error:', pdfError);
      return NextResponse.json(
        { error: 'Failed to parse PDF. The file may be corrupted or password-protected.' },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('File processing error:', error);
    return NextResponse.json(
      { error: 'Failed to process file.' },
      { status: 500 }
    );
  }
}
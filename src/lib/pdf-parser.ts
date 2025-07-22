export class PDFParser {
  static async extractText(file: File): Promise<string> {
    // Handle text files directly
    if (file.type === 'text/plain') {
      return await file.text();
    }
    
    // Handle PDF files using PDF.js in the browser
    if (file.type === 'application/pdf') {
      try {
        // Dynamically import PDF.js to avoid SSR issues
        const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
        
        // Set up PDF.js worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';
        
        const arrayBuffer = await file.arrayBuffer();
        const uint8Array = new Uint8Array(arrayBuffer);
        
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
          throw new Error('No text content found in PDF. Please ensure your PDF contains selectable text.');
        }
        
        return fullText.trim();
      } catch (error) {
        console.error('PDF parsing error:', error);
        throw new Error('Failed to parse PDF. The file may be corrupted or password-protected.');
      }
    }
    
    throw new Error('Unsupported file type. Please upload a PDF or text file.');
  }

  static validatePDF(file: File): boolean {
    return file.type === 'application/pdf' && file.size <= 10 * 1024 * 1024; // 10MB limit
  }
}
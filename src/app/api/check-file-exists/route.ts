import { NextRequest, NextResponse } from 'next/server';
import { FileStorage } from '@/lib/file-storage';
import path from 'path';

export async function POST(request: NextRequest) {
  try {
    const { filename } = await request.json();
    
    if (!filename) {
      return NextResponse.json(
        { error: 'Filename is required' },
        { status: 400 }
      );
    }
    
    // Check if file exists in public/uploads directory
    const filePath = path.join(process.cwd(), 'public', 'uploads', filename);
    const exists = await FileStorage.fileExists(filePath);
    
    return NextResponse.json({ exists });
  } catch (error) {
    console.error('File check error:', error);
    return NextResponse.json(
      { error: 'Failed to check if file exists' },
      { status: 500 }
    );
  }
}
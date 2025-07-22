import { NextRequest, NextResponse } from 'next/server';
import { AIService } from '@/lib/ai-service';

export async function POST(request: NextRequest) {
  try {
    const { cvText } = await request.json();
    
    if (!cvText || typeof cvText !== 'string') {
      return NextResponse.json(
        { error: 'CV text is required' },
        { status: 400 }
      );
    }
    
    const readmeContent = await AIService.generateReadme(cvText);
    
    return NextResponse.json({ content: readmeContent });
  } catch (error) {
    console.error('README generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate README content' },
      { status: 500 }
    );
  }
}
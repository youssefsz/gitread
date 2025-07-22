export class PDFParser {
  static async extractText(file: File): Promise<string> {
    // For now, we'll handle text extraction on the server side
    // This is a placeholder that will be used with the API route
    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('/api/parse-pdf', {
        method: 'POST',
        body: formData,
      });
      
      if (!response.ok) {
        throw new Error('Failed to parse PDF');
      }
      
      const data = await response.json();
      return data.text;
    } catch (error) {
      console.error('PDF parsing error:', error);
      throw new Error('Failed to parse PDF file');
    }
  }

  static validatePDF(file: File): boolean {
    return file.type === 'application/pdf' && file.size <= 10 * 1024 * 1024; // 10MB limit
  }
}
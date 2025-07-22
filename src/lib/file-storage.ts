import fs from 'fs';
import path from 'path';
import { promises as fsPromises } from 'fs';

export class FileStorage {
  /**
   * Saves a file to the public/uploads directory
   * If a file with the same name exists, it will be overwritten
   * @param file The file to save
   * @returns The path where the file was saved
   */
  static async saveFile(file: File): Promise<string> {
    // Create public/uploads directory if it doesn't exist
    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    await this.ensureDirectoryExists(uploadsDir);
    
    // Get file buffer
    const buffer = await file.arrayBuffer();
    
    // Create file path
    const filePath = path.join(uploadsDir, file.name);
    
    // Write file to disk
    await fsPromises.writeFile(filePath, Buffer.from(buffer));
    
    return filePath;
  }
  
  /**
   * Ensures that a directory exists, creating it if necessary
   * @param dirPath The directory path to ensure exists
   */
  private static async ensureDirectoryExists(dirPath: string): Promise<void> {
    try {
      await fsPromises.access(dirPath);
    } catch (error) {
      // Directory doesn't exist, create it
      await fsPromises.mkdir(dirPath, { recursive: true });
    }
  }
  
  /**
   * Checks if a file exists
   * @param filePath The path to check
   * @returns True if the file exists, false otherwise
   */
  static async fileExists(filePath: string): Promise<boolean> {
    try {
      await fsPromises.access(filePath);
      return true;
    } catch {
      return false;
    }
  }
}
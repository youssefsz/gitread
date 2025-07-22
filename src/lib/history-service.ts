export interface HistoryItem {
  id: string;
  fileName: string;
  originalFileName: string;
  readmeContent: string;
  createdAt: string;
  fileSize: number;
  fileType: string;
}

export class HistoryService {
  private static readonly STORAGE_KEY = 'gitread_history';
  private static readonly MAX_HISTORY_ITEMS = 50;

  /**
   * Saves a new history item
   */
  static saveHistoryItem(item: Omit<HistoryItem, 'id' | 'createdAt'>): HistoryItem {
    const historyItem: HistoryItem = {
      ...item,
      id: this.generateId(),
      createdAt: new Date().toISOString()
    };

    const history = this.getHistory();
    history.unshift(historyItem); // Add to beginning

    // Keep only the latest MAX_HISTORY_ITEMS
    if (history.length > this.MAX_HISTORY_ITEMS) {
      history.splice(this.MAX_HISTORY_ITEMS);
    }

    this.saveHistory(history);
    return historyItem;
  }

  /**
   * Gets all history items
   */
  static getHistory(): HistoryItem[] {
    try {
      const stored = localStorage.getItem(this.STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading history:', error);
      return [];
    }
  }

  /**
   * Gets a specific history item by ID
   */
  static getHistoryItem(id: string): HistoryItem | null {
    const history = this.getHistory();
    return history.find(item => item.id === id) || null;
  }

  /**
   * Updates an existing history item
   */
  static updateHistoryItem(id: string, updates: Partial<Pick<HistoryItem, 'readmeContent'>>): boolean {
    const history = this.getHistory();
    const index = history.findIndex(item => item.id === id);
    
    if (index === -1) return false;

    history[index] = { ...history[index], ...updates };
    this.saveHistory(history);
    return true;
  }

  /**
   * Deletes a history item
   */
  static deleteHistoryItem(id: string): boolean {
    const history = this.getHistory();
    const filteredHistory = history.filter(item => item.id !== id);
    
    if (filteredHistory.length === history.length) return false;
    
    this.saveHistory(filteredHistory);
    return true;
  }

  /**
   * Clears all history
   */
  static clearHistory(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }

  /**
   * Downloads a README file from history
   */
  static downloadHistoryItem(item: HistoryItem): void {
    const blob = new Blob([item.readmeContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `README-${item.originalFileName.replace(/\.[^/.]+$/, '')}.md`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  /**
   * Formats file size for display
   */
  static formatFileSize(bytes: number): string {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  /**
   * Formats date for display
   */
  static formatDate(dateString: string): string {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      const diffInMinutes = Math.floor(diffInHours * 60);
      return diffInMinutes <= 1 ? 'Just now' : `${diffInMinutes} minutes ago`;
    } else if (diffInHours < 24) {
      const hours = Math.floor(diffInHours);
      return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else if (diffInHours < 24 * 7) {
      const days = Math.floor(diffInHours / 24);
      return `${days} day${days > 1 ? 's' : ''} ago`;
    } else {
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    }
  }

  /**
   * Generates a unique ID
   */
  private static generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  }

  /**
   * Saves history to localStorage
   */
  private static saveHistory(history: HistoryItem[]): void {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(history));
    } catch (error) {
      console.error('Error saving history:', error);
    }
  }
}
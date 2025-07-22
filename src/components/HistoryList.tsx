'use client';

import { useState, useEffect } from 'react';
import { FileText, Download, Edit, Trash2, Eye, Calendar, HardDrive, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HistoryService, HistoryItem } from '@/lib/history-service';

interface HistoryListProps {
  onLoadHistoryItem: (item: HistoryItem) => void;
}

export default function HistoryList({ onLoadHistoryItem }: HistoryListProps) {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = () => {
    const history = HistoryService.getHistory();
    setHistoryItems(history);
  };

  const filteredItems = historyItems.filter(item =>
    item.originalFileName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.readmeContent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 5);

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this item from history?')) {
      HistoryService.deleteHistoryItem(id);
      loadHistory();
    }
  };

  const handleDownloadItem = (item: HistoryItem) => {
    HistoryService.downloadHistoryItem(item);
  };

  const handleLoadItem = (item: HistoryItem) => {
    onLoadHistoryItem(item);
  };

  if (historyItems.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-blue-600" />
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Files</h3>
          <span className="text-sm text-gray-500 dark:text-gray-400">({historyItems.length})</span>
        </div>
        {historyItems.length > 5 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            {showAll ? 'Show Less' : `Show All (${historyItems.length})`}
          </button>
        )}
      </div>

      {/* Search */}
      {historyItems.length > 3 && (
        <div className="mb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white text-sm"
            />
          </div>
        </div>
      )}

      {/* History Items */}
      <div className="space-y-3">
        <AnimatePresence>
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <FileText className="w-6 h-6 text-blue-600 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-gray-900 dark:text-white truncate text-sm">
                      {item.originalFileName}
                    </h4>
                    <div className="flex items-center space-x-3 text-xs text-gray-500 dark:text-gray-400 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{HistoryService.formatDate(item.createdAt)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <HardDrive className="w-3 h-3" />
                        <span>{HistoryService.formatFileSize(item.fileSize)}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-2 flex-shrink-0">
                  {/* Download Button */}
                  <button
                    onClick={() => handleDownloadItem(item)}
                    className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    title="Download README"
                  >
                    <Download className="w-4 h-4" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Download
                    </div>
                  </button>
                  
                  {/* Load Button */}
                  <button
                    onClick={() => handleLoadItem(item)}
                    className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    <Edit className="w-3 h-3 mr-1.5" />
                    Edit
                  </button>
                  
                  {/* Delete Button */}
                  <button
                    onClick={() => handleDeleteItem(item.id)}
                    className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                    title="Delete from history"
                  >
                    <Trash2 className="w-4 h-4" />
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                      Delete
                    </div>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredItems.length === 0 && searchTerm && (
        <div className="text-center py-8">
          <Search className="w-12 h-12 text-gray-300 dark:text-gray-600 mx-auto mb-3" />
          <p className="text-gray-500 dark:text-gray-400 text-sm">No files found matching "{searchTerm}"</p>
        </div>
      )}
    </div>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { History as HistoryIcon, FileText, Download, Edit, Trash2, Eye, Calendar, HardDrive, Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { HistoryService, HistoryItem } from '@/lib/history-service';
import MarkdownEditor from './MarkdownEditor';

interface HistoryProps {
  onLoadHistoryItem: (item: HistoryItem) => void;
  onClose: () => void;
}

export default function History({ onLoadHistoryItem, onClose }: HistoryProps) {
  const [historyItems, setHistoryItems] = useState<HistoryItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItem, setSelectedItem] = useState<HistoryItem | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

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

  const handleDeleteItem = (id: string) => {
    if (confirm('Are you sure you want to delete this item from history?')) {
      HistoryService.deleteHistoryItem(id);
      loadHistory();
      if (selectedItem?.id === id) {
        setSelectedItem(null);
        setIsEditing(false);
      }
    }
  };

  const handleClearHistory = () => {
    if (confirm('Are you sure you want to clear all history? This action cannot be undone.')) {
      HistoryService.clearHistory();
      loadHistory();
      setSelectedItem(null);
      setIsEditing(false);
    }
  };

  const handleViewItem = (item: HistoryItem) => {
    setSelectedItem(item);
    setEditedContent(item.readmeContent);
    setIsEditing(false);
  };

  const handleEditItem = (item: HistoryItem) => {
    setSelectedItem(item);
    setEditedContent(item.readmeContent);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    if (selectedItem) {
      HistoryService.updateHistoryItem(selectedItem.id, { readmeContent: editedContent });
      setSelectedItem({ ...selectedItem, readmeContent: editedContent });
      loadHistory();
      setIsEditing(false);
    }
  };

  const handleDownloadItem = (item: HistoryItem) => {
    HistoryService.downloadHistoryItem(item);
  };

  const handleLoadItem = (item: HistoryItem) => {
    onLoadHistoryItem(item);
    onClose();
  };

  if (selectedItem) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-6xl h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <FileText className="w-6 h-6 text-blue-600" />
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {selectedItem.originalFileName}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {HistoryService.formatDate(selectedItem.createdAt)} • {HistoryService.formatFileSize(selectedItem.fileSize)}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              {isEditing ? (
                <>
                  <button
                    onClick={handleSaveEdit}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setIsEditing(false)}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setIsEditing(true)}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md space-x-2 cursor-pointer"
                  >
                    <Edit className="w-4 h-4" />
                    <span>Edit</span>
                  </button>
                  <button
                    onClick={() => handleDownloadItem(selectedItem)}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md space-x-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button
                    onClick={() => handleLoadItem(selectedItem)}
                    className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md cursor-pointer"
                  >
                    Load in Editor
                  </button>
                </>
              )}
              <button
                onClick={() => {
                  setSelectedItem(null);
                  setIsEditing(false);
                }}
                className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <X className="w-5 h-5" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  Close
                </div>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-hidden">
            {isEditing ? (
              <div className="h-full p-6">
                <textarea
                  value={editedContent}
                  onChange={(e) => setEditedContent(e.target.value)}
                  className="w-full h-full p-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg font-mono text-sm leading-relaxed"
                  placeholder="Edit your README content..."
                />
              </div>
            ) : (
              <div className="h-full overflow-auto">
                <MarkdownEditor
                  content={selectedItem.readmeContent}
                  onChange={() => {}} // Read-only in view mode
                  onDownload={() => handleDownloadItem(selectedItem)}
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl w-full max-w-4xl h-[80vh] flex flex-col"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <HistoryIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Processing History</h2>
          </div>
          <div className="flex items-center space-x-2">
            {historyItems.length > 0 && (
              <button
                  onClick={handleClearHistory}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-sm font-medium rounded-md transition-all duration-200 hover:scale-105 active:scale-95 shadow-sm hover:shadow-md space-x-2 cursor-pointer"
                >
                <Trash2 className="w-4 h-4" />
                <span>Clear All</span>
              </button>
            )}
            <button
              onClick={onClose}
              className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <X className="w-5 h-5" />
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                Close
              </div>
            </button>
          </div>
        </div>

        {/* Search */}
        {historyItems.length > 0 && (
          <div className="p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search by filename or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-900 dark:text-white"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <HistoryIcon className="w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {historyItems.length === 0 ? 'No History Yet' : 'No Results Found'}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {historyItems.length === 0
                  ? 'Process some files to see them appear here'
                  : 'Try adjusting your search terms'}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1 min-w-0">
                        <FileText className="w-8 h-8 text-blue-600 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-gray-900 dark:text-white truncate">
                            {item.originalFileName}
                          </h3>
                          <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mt-1">
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
                        {/* View Button */}
                        <button
                          onClick={() => handleViewItem(item)}
                          className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                          title="View README"
                        >
                          <Eye className="w-4 h-4" />
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                            View
                          </div>
                        </button>
                        
                        {/* Edit Button */}
                        <button
                          onClick={() => handleEditItem(item)}
                          className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
                          title="Edit README"
                        >
                          <Edit className="w-4 h-4" />
                          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                            Edit
                          </div>
                        </button>
                        
                        {/* Download Button */}
                        <button
                          onClick={() => handleDownloadItem(item)}
                          className="group relative inline-flex items-center justify-center w-8 h-8 text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-50 dark:hover:bg-purple-900/20 rounded-md transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
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
                          Load
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
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
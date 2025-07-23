'use client';

import { useCallback, useState, useEffect } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileText, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedDots from './AnimatedDots';

interface FileUploadProps {
  onFileSelect: (file: File) => void;
  onFileRemove: () => void;
  selectedFile: File | null;
  isLoading?: boolean;
}

export default function FileUpload({ onFileSelect, onFileRemove, selectedFile, isLoading }: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadComplete, setUploadComplete] = useState(false);

  // Store the last dropped file for handling
  const [lastDroppedFile, setLastDroppedFile] = useState<File | null>(null);

  const handleUpload = (file: File) => {
    setUploadProgress(0);
    setUploadComplete(false);
    
    // Simulate upload progress
    const simulateUpload = () => {
      setUploadProgress(prev => {
        if (prev < 100) {
          const increment = Math.random() * 10;
          const newProgress = Math.min(prev + increment, 99);
          return newProgress;
        }
        return prev;
      });
    };
    
    const uploadInterval = setInterval(simulateUpload, 150);
    
    // After a delay, complete the upload and call the onFileSelect
    setTimeout(() => {
      clearInterval(uploadInterval);
      setUploadProgress(100);
      setUploadComplete(true);
      
      // Ensure the complete animation is visible for a moment before proceeding
      setTimeout(() => {
        onFileSelect(file);
      }, 1000); // Increased delay to ensure animation completes
    }, 2500); // Longer upload simulation time to ensure progress animation is visible
  };

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setLastDroppedFile(file);
      
      // Always upload the file, overriding if it exists
      handleUpload(file);
    }
    setDragActive(false);
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf']
    },
    maxFiles: 1,
    onDragEnter: () => setDragActive(true),
    onDragLeave: () => setDragActive(false)
  });

  // Effect to reset progress when file is removed
  useEffect(() => {
    if (!selectedFile) {
      setUploadProgress(0);
      setUploadComplete(false);
      setLastDroppedFile(null);
    }
  }, [selectedFile]);

  if (selectedFile) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="bg-white dark:bg-gray-800 rounded-2xl border-2 border-gray-200 dark:border-gray-700 p-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
              <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <p className="font-medium text-gray-900 dark:text-white">{selectedFile.name}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          {!isLoading && (
            <button
              onClick={onFileRemove}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors cursor-pointer"
            >
              <X className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </button>
          )}
          {isLoading && (
            <div className="text-sm text-blue-600 dark:text-blue-400 font-medium">
              Processing<AnimatedDots />
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                This may take 1-2 minutes
              </p>
            </div>
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <div
      {...getRootProps()}
      className={`
        relative border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-200
        ${isDragActive || dragActive
          ? 'border-blue-500 bg-blue-50 dark:bg-blue-950/20'
          : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }
        ${uploadProgress > 0 && uploadProgress < 100 ? 'pointer-events-none' : ''}
        ${isLoading ? 'pointer-events-none opacity-50' : ''}
      `}
    >
      <input {...getInputProps()} />
      
      <AnimatePresence>
        {uploadProgress > 0 && uploadProgress < 100 ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-6"
          >
            {/* Circular progress indicator with icon */}
            <div className="relative w-24 h-24 mx-auto mb-4">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
              
              {/* Animated progress circle */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                <motion.circle
                  cx="50"
                  cy="50"
                  r="46"
                  fill="none"
                  strokeWidth="8"
                  stroke="#3b82f6" // blue-500
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: uploadProgress / 100 }}
                  transition={{ type: "spring", damping: 12 }}
                  style={{
                    rotate: -90,
                    transformOrigin: 'center',
                  }}
                />
              </svg>
              
              {/* Upload icon in the middle with spinning animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Upload className="w-8 h-8 text-blue-500 dark:text-blue-400" />
                </motion.div>
              </div>
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Uploading file...
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {Math.round(uploadProgress)}% complete
              </p>
            </div>
          </motion.div>
        ) : uploadComplete ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="space-y-6"
          >
            <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 8, stiffness: 100 }}
              >
                <CheckCircle className="w-8 h-8 text-green-500 dark:text-green-400" />
              </motion.div>
            </div>
            
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Upload Complete!
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Processing your file...
              </p>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-4"
          >
            <div className="mx-auto w-16 h-16 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
              <Upload className="w-8 h-8 text-gray-400 dark:text-gray-500" />
            </div>
            <div>
              <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                {isDragActive ? 'Drop your CV here' : 'Upload your CV'}
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Drag and drop your PDF file here, or click to browse
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-2">
                Maximum file size: 10MB
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
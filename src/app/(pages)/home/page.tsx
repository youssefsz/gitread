'use client';

import { useState, useEffect } from 'react';
import { Github, Sparkles, ArrowRight, History as HistoryIcon } from 'lucide-react';
import FileUpload from '@/components/FileUpload';
import MarkdownEditor from '@/components/MarkdownEditor';
import LoadingSpinner from '@/components/LoadingSpinner';
import History from '@/components/History';
import HistoryList from '@/components/HistoryList';
import { PDFParser } from '@/lib/pdf-parser';
import { AIService } from '@/lib/ai-service';
import { HistoryService, HistoryItem } from '@/lib/history-service';

type Step = 'upload' | 'processing' | 'editing';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processingPercentage, setProcessingPercentage] = useState(0);
  const [showHistory, setShowHistory] = useState(false);
  const [currentHistoryId, setCurrentHistoryId] = useState<string | null>(null);

  // Load saved content from localStorage on component mount
  useEffect(() => {
    const savedContent = localStorage.getItem('readmeContent');
    const savedStep = localStorage.getItem('currentStep');
    
    if (savedContent) {
      setReadmeContent(savedContent);
    }
    
    if (savedStep === 'editing' && savedContent) {
      setCurrentStep('editing');
    }
  }, []);

  const handleFileSelect = async (file: File) => {
    setSelectedFile(file);
    setError(null);
    setIsLoading(true);
    setCurrentStep('processing');
    setProcessingPercentage(0);

    // Start the percentage simulation immediately
    const simulateExtraction = () => {
      // Simulate PDF extraction progress (0-40%)
      const extractionInterval = setInterval(() => {
        setProcessingPercentage(prev => {
          if (prev < 40) {
            return prev + Math.random() * 2;
          }
          clearInterval(extractionInterval);
          return 40;
        });
      }, 150);
    };

    simulateExtraction();

    try {
      // Extract text from PDF
      const cvText = await PDFParser.extractText(file);
      
      // Update percentage to show extraction is complete
      setProcessingPercentage(40);
      
      // Simulate AI processing (40-95%)
      const simulateAIProcessing = () => {
        const aiInterval = setInterval(() => {
          setProcessingPercentage(prev => {
            if (prev < 95) {
              // Slow down as we get closer to completion for realism
              const increment = (95 - prev) / 10;
              return prev + Math.max(0.5, increment);
            }
            clearInterval(aiInterval);
            return 95;
          });
        }, 300);
      };

      simulateAIProcessing();
      
      // Generate README using AI
      const readmeContent = await AIService.generateReadme(cvText);
      
      // Set to 100% when complete
      setProcessingPercentage(100);
      
      // Longer delay to show the success animation before moving to next step
      setTimeout(() => {
        setReadmeContent(readmeContent);
        
        // Save to localStorage
        localStorage.setItem('readmeContent', readmeContent);
        localStorage.setItem('currentStep', 'editing');
        
        // Save to history
        const historyItem = HistoryService.saveHistoryItem({
          fileName: file.name,
          originalFileName: file.name,
          readmeContent: readmeContent,
          fileSize: file.size,
          fileType: file.type
        });
        setCurrentHistoryId(historyItem.id);
        
        setCurrentStep('editing');
        setIsLoading(false);
      }, 2000); // Increased from 800ms to 2000ms to allow the success animation to complete
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setCurrentStep('upload');
      setSelectedFile(null);
      setIsLoading(false);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setReadmeContent('');
    setCurrentStep('upload');
    setError(null);
    setProcessingPercentage(0);
    
    // Clear localStorage
    localStorage.removeItem('readmeContent');
    localStorage.removeItem('currentStep');
  };

  const handleDownload = () => {
    // Analytics or additional actions can be added here
    console.log('README downloaded');
  };

  const handleStartOver = () => {
    setSelectedFile(null);
    setReadmeContent('');
    setCurrentStep('upload');
    setError(null);
    setProcessingPercentage(0);
    setCurrentHistoryId(null);
    
    // Clear localStorage
    localStorage.removeItem('readmeContent');
    localStorage.removeItem('currentStep');
  };

  const handleLoadHistoryItem = (item: HistoryItem) => {
    setReadmeContent(item.readmeContent);
    setCurrentStep('editing');
    setCurrentHistoryId(item.id);
    
    // Save to localStorage
    localStorage.setItem('readmeContent', item.readmeContent);
    localStorage.setItem('currentStep', 'editing');
  };

  const handleContentChange = (content: string) => {
    setReadmeContent(content);
    
    // Update history if we're editing an existing item
    if (currentHistoryId) {
      HistoryService.updateHistoryItem(currentHistoryId, { readmeContent: content });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        {currentStep === 'upload' && (
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Transform Your CV into a
              <span className="text-blue-600 dark:text-blue-400"> Beautiful README</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Upload your CV and let AI create a comprehensive, professional GitHub README file 
              that showcases your skills and experience perfectly.
            </p>
            
            {/* Steps */}
            <div className="flex items-center justify-center space-x-8 mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                  1
                </div>
                <span className="text-gray-700 dark:text-gray-300">Upload CV</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
                  2
                </div>
                <span className="text-gray-500 dark:text-gray-400">AI Processing</span>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300 rounded-full flex items-center justify-center text-sm font-medium">
                  3
                </div>
                <span className="text-gray-500 dark:text-gray-400">Edit & Download</span>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
            <p className="text-red-700 dark:text-red-400">{error}</p>
          </div>
        )}

        {/* File Upload */}
        {currentStep === 'upload' && (
          <div className="max-w-4xl mx-auto">
            <div className="max-w-2xl mx-auto mb-8">
              <FileUpload
                onFileSelect={handleFileSelect}
                onFileRemove={handleFileRemove}
                selectedFile={selectedFile}
                isLoading={isLoading}
              />
            </div>
            
            {/* History List */}
            <HistoryList onLoadHistoryItem={handleLoadHistoryItem} />
          </div>
        )}

        {/* Processing */}
        {currentStep === 'processing' && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
              Creating Your README
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              {processingPercentage < 40 ? 
                "Extracting content from your CV..." : 
                processingPercentage < 95 ? 
                  "Our AI is analyzing your CV and generating a beautiful README file..." : 
                  "Finalizing your README file..."}
            </p>
            <div className="flex flex-col items-center justify-center">
              <LoadingSpinner 
                size="lg" 
                text={`Processing your CV${processingPercentage < 100 ? '...' : ' - Complete!'}`}
                percentage={Math.round(processingPercentage)} 
                showPercentage={true} 
              />
            </div>
          </div>
        )}

        {/* Editing */}
        {currentStep === 'editing' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Your README is Ready!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Review, edit, and download your personalized README file.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setShowHistory(true)}
                  className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800 rounded-lg font-medium transition-colors cursor-pointer flex items-center space-x-2 border border-blue-300 dark:border-blue-600"
                >
                  <HistoryIcon className="w-4 h-4" />
                  <span>History</span>
                </button>
                <button
                  onClick={handleStartOver}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors cursor-pointer flex items-center space-x-2 border border-gray-300 dark:border-gray-600"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Start Over</span>
                </button>
              </div>
            </div>
            
            <MarkdownEditor
              content={readmeContent}
              onChange={handleContentChange}
              onDownload={handleDownload}
            />
          </div>
        )}

        {/* History Modal */}
        {showHistory && (
          <History
            onLoadHistoryItem={handleLoadHistoryItem}
            onClose={() => setShowHistory(false)}
          />
        )}
      </div>
    </div>
  );
}
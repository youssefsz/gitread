'use client';

import { useState, useEffect } from 'react';
import { Github, Sparkles, ArrowRight } from 'lucide-react';
import FileUpload from '@/components/FileUpload';
import MarkdownEditor from '@/components/MarkdownEditor';
import LoadingSpinner from '@/components/LoadingSpinner';
import { PDFParser } from '@/lib/pdf-parser';

type Step = 'upload' | 'processing' | 'editing';

export default function Home() {
  const [currentStep, setCurrentStep] = useState<Step>('upload');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [readmeContent, setReadmeContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

    try {
      // Extract text from PDF
      const cvText = await PDFParser.extractText(file);
      
      // Generate README using AI
      const response = await fetch('/api/generate-readme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cvText }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate README');
      }

      const data = await response.json();
      setReadmeContent(data.content);
      
      // Save to localStorage
      localStorage.setItem('readmeContent', data.content);
      localStorage.setItem('currentStep', 'editing');
      
      setCurrentStep('editing');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      setCurrentStep('upload');
      setSelectedFile(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    setReadmeContent('');
    setCurrentStep('upload');
    setError(null);
    
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
    
    // Clear localStorage
    localStorage.removeItem('readmeContent');
    localStorage.removeItem('currentStep');
  };

  return (
    <div className="relative min-h-screen pb-[160px] bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <img src="/gitread-logo.svg" alt="GitRead Logo" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">GitRead</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">CV to README Generator</p>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
              <Sparkles className="w-4 h-4" />
              <span>Powered by AI</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <div className="max-w-2xl mx-auto">
            <FileUpload
              onFileSelect={handleFileSelect}
              onFileRemove={handleFileRemove}
              selectedFile={selectedFile}
              isLoading={isLoading}
            />
          </div>
        )}

        {/* Processing */}
        {currentStep === 'processing' && (
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="mb-8">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Creating Your README
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our AI is analyzing your CV and generating a beautiful README file...
              </p>
            </div>
            <LoadingSpinner size="lg" text="Processing your CV..." />
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
            
            <MarkdownEditor
              content={readmeContent}
              onChange={setReadmeContent}
              onDownload={handleDownload}
            />
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p className="mb-2">Built with ❤️ using Next.js, Tailwind CSS, and AI</p>
            <p className="text-sm">Transform your professional story into code</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

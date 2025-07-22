'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto px-4 transition-all duration-300 ${
        isScrolled ? 'scale-95' : 'scale-100'
      }`}>
        <div className={`backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/60 dark:bg-gray-900/60' 
            : 'bg-white/90 dark:bg-gray-900/90'
        }`}>
          <div className="px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10">
                <img src="/gitread-logo.svg" alt="GitRead Logo" className="w-full h-full" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900 dark:text-white">GitRead</h1>
                <p className="text-xs text-gray-500 dark:text-gray-400">CV to README Generator</p>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/upload" className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
              <span className="relative z-10">Upload</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link href="/about" className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
              <span className="relative z-10">About</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
             <Link href="/guide" className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
              <span className="relative z-10">Guide</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link href="/privacy" className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
              <span className="relative z-10">Privacy</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
            <Link href="/terms" className="relative text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-200 px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 group">
              <span className="relative z-10">Terms</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            </Link>
           
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
            </div>
          </div>
        </div>

        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-xl shadow-lg py-4 px-4">
              <nav className="flex flex-col space-y-3">
                <Link 
                  href="/upload" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Upload
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/privacy" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Privacy
                </Link>
                <Link 
                  href="/terms" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Terms
                </Link>
                <Link 
                  href="/guide" 
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium px-3 py-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Guide
                </Link>
              </nav>
            </div>
          </div>
        )}
      </header>
     </>
   );
}
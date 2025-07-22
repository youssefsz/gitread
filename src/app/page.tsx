'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Github, FileText, Zap, Shield, Download, Star, Users, Clock } from 'lucide-react';

export default function LandingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 overflow-hidden pt-24">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-400/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            left: '10%',
            top: '20%'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-purple-400/10 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
            right: '10%',
            bottom: '20%'
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered CV Transformation
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Transform Your
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                CV into Magic
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Upload your CV and watch AI create a stunning GitHub README that showcases your skills, 
              experience, and personality in seconds.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link 
                 href="/upload"
                 className="group inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg"
               >
                 Get Started Free
                 <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                 </Link>
              <Link 
                href="/guide"
                className="inline-flex items-center px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl transition-all duration-300 hover:bg-white dark:hover:bg-gray-800 hover:shadow-lg"
              >
                <Github className="mr-2 w-5 h-5" />
                View Guide
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">10K+</div>
                <div className="text-gray-600 dark:text-gray-400">CVs Transformed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">30s</div>
                <div className="text-gray-600 dark:text-gray-400">Average Processing</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.9★</div>
                <div className="text-gray-600 dark:text-gray-400">User Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Bento Grid */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Why Choose GitRead?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experience the future of professional documentation with our cutting-edge AI technology.
            </p>
          </div>
          
          {/* Bento Grid Layout */}
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Large Feature Card */}
            <div className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                    Lightning Fast AI Processing
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                    Our advanced AI analyzes your CV in seconds, extracting key information and generating 
                    a professional README that highlights your strengths and achievements.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Smaller Feature Card */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Privacy First
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Your data stays secure. We process everything locally and never store your personal information.
              </p>
            </div>
            
            {/* Medium Feature Card */}
            <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-2xl w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                Professional Templates
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose from beautifully designed templates that make your GitHub profile stand out.
              </p>
            </div>
            
            {/* Wide Feature Card */}
            <div className="lg:col-span-2 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  <Download className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Instant Download & Edit
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Get your README instantly and customize it further with our built-in editor. 
                Perfect for developers, designers, and professionals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
        <section className="relative px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/20 rounded-full text-blue-600 dark:text-blue-400 text-sm font-semibold mb-6 border border-blue-200 dark:border-blue-800">
              How It Works
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-8 leading-tight tracking-tight">
              Simple. Fast.
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Professional.
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              Transform your CV into a stunning GitHub README in three simple steps.
              No technical skills required.
            </p>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Step 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl flex items-center justify-center mx-auto group-hover:shadow-2xl group-hover:shadow-blue-500/25 transition-all duration-500 shadow-xl">
                  <FileText className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-300 rounded-full opacity-50"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Upload Your CV</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                  Simply drag and drop your PDF CV or click to browse and upload. Supports all standard formats.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-purple-700 rounded-3xl flex items-center justify-center mx-auto group-hover:shadow-2xl group-hover:shadow-purple-500/25 transition-all duration-500 shadow-xl">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-300 rounded-full opacity-50"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">AI Magic</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                  Our advanced AI analyzes your CV and creates a stunning, personalized README in seconds.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-500">
              <div className="relative mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-3xl flex items-center justify-center mx-auto group-hover:shadow-2xl group-hover:shadow-green-500/25 transition-all duration-500 shadow-xl">
                  <Download className="w-12 h-12 text-white" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-r from-green-400 to-green-500 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-300 rounded-full opacity-50"></div>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Download & Shine</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-sm mx-auto">
                  Edit, customize, and download your professional README file. Ready for GitHub!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Transform Your CV?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Join thousands of professionals who have already created stunning GitHub profiles.
            </p>
            
            <Link 
               href="/upload"
               className="group inline-flex items-center px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg rounded-3xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-xl"
             >
               Start Creating Now
               <ArrowRight className="ml-3 w-6 h-6 transition-transform group-hover:translate-x-2" />
             </Link>
            
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
              No signup required • Free forever • Privacy guaranteed
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

import { FileText, Shield, AlertCircle, Mail, Book, Code, Server } from 'lucide-react';
import Link from 'next/link';

export default function Terms() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen py-16 pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Terms of Service</h1>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these Terms of Service carefully before using GitRead.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
        
        {/* Introduction Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <Book className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            These Terms of Service ("Terms") constitute a legally binding agreement between you and GitRead 
            regarding your use of our website and services. By accessing or using GitRead, you acknowledge 
            that you have read, understood, and agree to be bound by these Terms.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
          {/* Table of Contents */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a href="#acceptance" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">1</span>
                Acceptance of Terms
              </a>
              <a href="#description" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">2</span>
                Description of Service
              </a>
              <a href="#responsibilities" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">3</span>
                User Responsibilities
              </a>
              <a href="#intellectual" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">4</span>
                Intellectual Property Rights
              </a>
              <a href="#user-content" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">5</span>
                User Content
              </a>
              <a href="#liability" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">6</span>
                Limitation of Liability
              </a>
              <a href="#third-party" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">7</span>
                Third-Party Links
              </a>
              <a href="#termination" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">8</span>
                Termination
              </a>
              <a href="#changes" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">9</span>
                Changes to Terms
              </a>
              <a href="#governing" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">10</span>
                Governing Law
              </a>
              <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">11</span>
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Terms Content */}
          <div className="p-8 prose dark:prose-invert max-w-none">
            {/* 1. Acceptance of Terms */}
            <section id="acceptance" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Shield className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">1. Acceptance of Terms</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By accessing or using GitRead, you agree to be bound by these Terms. If you do not agree to all the terms and conditions, then you may not access or use our services. These Terms apply to all visitors, users, and others who access or use GitRead.
                </p>
                <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-500">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">By continuing to use GitRead, you acknowledge that you have read and understood these Terms and agree to be bound by them.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* 2. Description of Service */}
            <section id="description" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">2. Description of Service</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  GitRead is an AI-powered service that generates GitHub README files based on your CV. The service allows you to upload your CV, processes it using artificial intelligence, and generates a README file that you can edit and download for your GitHub profile.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                    <div className="flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2">Upload CV</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center text-sm">Upload your CV in PDF format</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                    <div className="flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2">AI Processing</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center text-sm">Our AI analyzes your CV content</p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                    <div className="flex items-center justify-center mb-3">
                      <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white text-center mb-2">Generate README</h3>
                    <p className="text-gray-700 dark:text-gray-300 text-center text-sm">Edit and download your GitHub README</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* 3. User Responsibilities */}
            <section id="responsibilities" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">3. User Responsibilities</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  As a user of GitRead, you are responsible for:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Accurate Information:</strong> Providing accurate and up-to-date information in your CV</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Content Rights:</strong> Ensuring you have the right to share the information in your CV</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Legal Compliance:</strong> Using the generated content in compliance with applicable laws</span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                    <span className="text-gray-700 dark:text-gray-300"><strong>Account Security:</strong> Maintaining the confidentiality of any accounts or credentials</span>
                  </li>
                </ul>
              </div>
            </section>
            
            {/* 4. Intellectual Property Rights */}
            <section id="intellectual" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">4. Intellectual Property Rights</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  The content generated by GitRead based on your CV is owned by you. You are free to use, modify, and distribute it as you see fit. GitRead retains ownership of its service, including its software, design, and any content not derived from your CV.
                </p>
                <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-600 dark:border-blue-400">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Ownership Clarification</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">You Own:</h4>
                      <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Generated README content</li>
                        <li>Your CV content</li>
                        <li>Modifications to generated content</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-2">GitRead Owns:</h4>
                      <ul className="space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                        <li>Service software and algorithms</li>
                        <li>Website design and interface</li>
                        <li>GitRead branding and trademarks</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            {/* 5. User Content */}
            <section id="user-content" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">5. User Content</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  By uploading your CV to GitRead, you grant us a limited license to process your content solely for the purpose of generating your README file. We do not claim ownership of your CV content and will not use it for purposes other than providing our service to you.
                </p>
                <div className="mt-4 bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300"><strong>Important:</strong> Your CV data is not permanently stored on our servers. It is processed to generate the README and is not retained after the session ends.</p>
                </div>
              </div>
            </section>
            
            {/* 6. Limitation of Liability */}
            <section id="liability" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <AlertCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">6. Limitation of Liability</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  GitRead provides its service on an "as is" and "as available" basis. We do not guarantee that the service will be uninterrupted, secure, or error-free. To the maximum extent permitted by law, we disclaim all warranties and shall not be liable for any damages arising out of or in connection with your use of our service.
                </p>
                <div className="mt-4 bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <p className="text-gray-700 dark:text-gray-300">This includes, but is not limited to:</p>
                  <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                    <li>Indirect or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>Damages resulting from service interruptions</li>
                    <li>Damages from unauthorized access to our servers</li>
                  </ul>
                </div>
              </div>
            </section>
            
            {/* 7. Third-Party Links */}
            <section id="third-party" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">7. Third-Party Links</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our service may contain links to third-party websites or services that are not owned or controlled by GitRead. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
                </p>
                <div className="mt-4 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-xl border-l-4 border-yellow-500">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mr-2 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 dark:text-gray-300">We strongly advise you to read the terms and privacy policies of any third-party websites or services that you visit or use.</p>
                  </div>
                </div>
              </div>
            </section>
            
            {/* 8. Termination */}
            <section id="termination" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">8. Termination</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We may terminate or suspend your access to our service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Upon termination, your right to use the service will immediately cease. If you wish to terminate your use of GitRead, you may simply discontinue using the service.
                </p>
              </div>
            </section>
            
            {/* 9. Changes to Terms */}
            <section id="changes" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">9. Changes to Terms</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  What constitutes a material change will be determined at our sole discretion. By continuing to access or use our service after those revisions become effective, you agree to be bound by the revised terms.
                </p>
              </div>
            </section>
            
            {/* 10. Governing Law */}
            <section id="governing" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">10. Governing Law</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of Tunisia, without regard to its conflict of law provisions.
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </section>
            
            {/* 11. Contact Us */}
            <section id="contact" className="mb-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">11. Contact Us</h2>
              </div>
              <div className="pl-16">
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
                  <a href="mailto:contact@youssef.tn" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium inline-flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    contact@youssef.tn
                  </a>
                  <p className="mt-4 text-gray-700 dark:text-gray-300">
                    For more information about how we handle your data, please visit our <Link href="/privacy" className="text-blue-600 dark:text-blue-400 hover:underline">Privacy Policy</Link>.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Shield, Lock, Server, FileText, AlertCircle, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Privacy() {
  const lastUpdated = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">Privacy Policy</h1>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            At GitRead, we value your privacy and are committed to protecting your personal information.
          </p>
          <p className="mt-4 text-gray-500 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>
        
        {/* Introduction Card */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 text-center max-w-3xl mx-auto leading-relaxed">
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our service. 
            We are committed to ensuring the privacy and security of your personal data while providing you with 
            a seamless experience for generating GitHub README files from your CV.
          </p>
        </div>
        
        {/* Main Content */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-12 transition-all duration-300 hover:shadow-2xl">
          {/* Table of Contents */}
          <div className="bg-gray-50 dark:bg-gray-900/50 p-6 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Table of Contents</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <a href="#information-collected" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">1</span>
                Information We Collect
              </a>
              <a href="#information-use" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">2</span>
                How We Use Your Information
              </a>
              <a href="#data-security" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">3</span>
                Data Security
              </a>
              <a href="#ai-processing" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">4</span>
                AI Processing
              </a>
              <a href="#cookies" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">5</span>
                Cookies
              </a>
              <a href="#third-party" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">6</span>
                Third-Party Services
              </a>
              <a href="#your-rights" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">7</span>
                Your Rights
              </a>
              <a href="#contact" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center">
                <span className="w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-2 text-sm font-medium text-blue-800 dark:text-blue-300">8</span>
                Contact Us
              </a>
            </div>
          </div>
          
          {/* Policy Content */}
          <div className="p-8 prose dark:prose-invert max-w-none">
            {/* Information We Collect */}
            <section id="information-collected" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Information We Collect</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may collect the following types of information to provide and improve our services:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Address</h3>
                  <p className="text-gray-700 dark:text-gray-300">When you contact us or sign up for updates</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Usage Data</h3>
                  <p className="text-gray-700 dark:text-gray-300">How you interact with our service</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">CV Content</h3>
                  <p className="text-gray-700 dark:text-gray-300">When you upload your CV for README generation</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Generated Content</h3>
                  <p className="text-gray-700 dark:text-gray-300">The README files we create for you</p>
                </div>
              </div>
            </section>
            
            {/* How We Use Your Information */}
            <section id="information-use" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Server className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">How We Use Your Information</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use the collected information for various purposes:
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Service Provision:</strong> To provide and maintain our service</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>README Generation:</strong> To generate GitHub README files based on your CV</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Service Improvement:</strong> To enhance and optimize our service</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Customer Support:</strong> To assist you with any issues or questions</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3 text-green-800 dark:text-green-300">✓</span>
                  <span className="text-gray-700 dark:text-gray-300"><strong>Issue Detection:</strong> To identify and address technical issues</span>
                </li>
              </ul>
            </section>
            
            {/* Data Security */}
            <section id="data-security" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Lock className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Data Security</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                The security of your data is important to us. We strive to use commercially acceptable means to protect your personal information. 
                However, no method of transmission over the Internet or method of electronic storage is 100% secure.
              </p>
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border-l-4 border-blue-600 dark:border-blue-400">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Important Security Information</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">We do not permanently store your CV data on our servers. Your CV content is processed to generate the README and is not retained after the session ends.</span>
                  </li>
                  <li className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">The generated README content is stored locally in your browser using local storage to allow you to edit and download it. This data remains on your device and is not transmitted back to our servers.</span>
                  </li>
                </ul>
              </div>
            </section>
            
            {/* AI Processing */}
            <section id="ai-processing" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">AI Processing</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                GitRead uses artificial intelligence to process your CV and generate GitHub README content. This processing is done securely, and we do not use your data to train our AI models.
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Secure Processing</h3>
                  <p className="text-gray-700 dark:text-gray-300">Your CV data is processed in a secure environment</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">No Model Training</h3>
                  <p className="text-gray-700 dark:text-gray-300">We don't use your data to train our AI models</p>
                </div>
              </div>
            </section>
            
            {/* Cookies */}
            <section id="cookies" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Cookies</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We use cookies to enhance your experience on our website. These are small files stored on your device that help us provide certain features and analyze how you interact with our service.
              </p>
              <div className="mt-6 bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                <p className="text-gray-700 dark:text-gray-300">Our cookies are primarily used for:</p>
                <ul className="mt-2 space-y-1 list-disc list-inside text-gray-700 dark:text-gray-300">
                  <li>Remembering your preferences</li>
                  <li>Understanding how you use our service</li>
                  <li>Improving site functionality</li>
                </ul>
              </div>
            </section>
            
            {/* Third-Party Services */}
            <section id="third-party" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Third-Party Services</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, or assist us in analyzing how our service is used. These third parties have access to your personal data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
              </p>
            </section>
            
            {/* Your Rights */}
            <section id="your-rights" className="mb-12">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Your Rights</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Under data protection laws, you have rights related to your personal data. You have the right to:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Access</h3>
                  <p className="text-gray-700 dark:text-gray-300">Request access to your personal data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Correction</h3>
                  <p className="text-gray-700 dark:text-gray-300">Request correction of inaccurate data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Deletion</h3>
                  <p className="text-gray-700 dark:text-gray-300">Request deletion of your personal data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Objection</h3>
                  <p className="text-gray-700 dark:text-gray-300">Object to processing of your data</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Restriction</h3>
                  <p className="text-gray-700 dark:text-gray-300">Request restrictions on processing</p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-900/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Portability</h3>
                  <p className="text-gray-700 dark:text-gray-300">Request transfer of your data</p>
                </div>
              </div>
            </section>
            
            {/* Contact Us */}
            <section id="contact" className="mb-6">
              <div className="flex items-start mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">Contact Us</h2>
              </div>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-6 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl text-center">
                <a href="mailto:contact@youssef.tn" className="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium inline-flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  contact@youssef.tn
                </a>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  For more information, please visit our <Link href="/terms" className="text-blue-600 dark:text-blue-400 hover:underline">Terms of Service</Link>.
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
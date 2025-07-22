import Link from 'next/link';
import { Github, Globe, Mail, Code, Users, Star } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 min-h-screen py-16 pt-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">About GitRead</h1>
          <div className="w-24 h-1.5 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Transforming CVs into beautiful GitHub profiles with the power of AI
          </p>
        </div>
        
        {/* Creator Profile */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden mb-16 transition-all duration-300 hover:shadow-2xl">
          <div className="md:flex">
            <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/20 p-10 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg ring-4 ring-blue-100 dark:ring-blue-900/30">
                <img 
                  src="https://youssef.tn/ysf.jpg" 
                  alt="Youssef Dhibi" 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 p-10">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Youssef Dhibi</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Youssef is a passionate developer and creator who built GitRead to help developers create beautiful GitHub profiles easily. With a background in web development and AI, he combines technical expertise with a keen eye for design to deliver tools that enhance developer productivity and online presence.  
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                    <Globe className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Portfolio</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <Link href="https://youssef.tn" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                        youssef.tn
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Contact</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <Link href="mailto:contact@youssef.tn" className="text-blue-600 dark:text-blue-400 hover:underline">
                        contact@youssef.tn
                      </Link>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-50 dark:bg-blue-900/20 rounded-full flex items-center justify-center mr-4 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/30 transition-colors duration-300">
                    <Github className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">GitHub</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      <Link href="https://github.com/youssefsz" target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline">
                        @youssefsz
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* About GitRead Section */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden p-10 mb-16 transition-all duration-300 hover:shadow-2xl">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">The GitRead Story</h2>
          
          <div className="space-y-8">
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              GitRead was created to solve a common problem for developers: creating professional GitHub profile READMEs. By leveraging AI, GitRead transforms your CV into a beautiful, customizable README that showcases your skills and experience in the best possible way.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">AI-Powered</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Our advanced AI analyzes your CV to extract the most relevant information and formats it beautifully for GitHub.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">User-Friendly</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Simple, intuitive interface that makes creating professional READMEs accessible to developers of all skill levels.
                </p>
              </div>
              
              <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800/30 rounded-full flex items-center justify-center mb-4">
                  <Star className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Customizable</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Edit and customize your generated README to perfectly match your personal brand and style preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Link href="/" className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors duration-300 text-lg shadow-lg hover:shadow-xl">
            Try GitRead Now
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
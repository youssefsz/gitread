'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, FileText, Sparkles, Download, Github, Code, GitBranch, GitFork } from 'lucide-react';

export default function GuidePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 pt-24">
      {/* Hero Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 pt-8 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium mb-8 backdrop-blur-sm border border-blue-200 dark:border-blue-800">
              <FileText className="w-4 h-4 mr-2" />
              Complete Step-by-Step Guide
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              How to Transform Your CV into a
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent block">
                Professional GitHub README
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Follow this comprehensive guide to create, customize, and publish your GitHub README profile
              using GitRead's AI-powered tools.
            </p>
          </div>
        </div>
      </section>

      {/* Step-by-Step Guide */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl mx-auto">
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            
            {/* Step 1: Upload Your CV */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  1
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Upload Your CV
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Start by uploading your CV to our secure platform. We support PDF formats for optimal results.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How to Upload:</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Navigate to the <Link href="/upload" className="text-blue-600 dark:text-blue-400 hover:underline">Upload Page</Link></li>
                        <li>Click on the upload area or drag and drop your CV file</li>
                        <li>Ensure your file is in PDF format for best results</li>
                        <li>Wait for the upload confirmation before proceeding</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tips for Best Results:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Use a well-formatted, professional CV</li>
                        <li>Ensure text is selectable (not a scanned image)</li>
                        <li>Include detailed skills and experience sections</li>
                        <li>Keep file size under 10MB for faster processing</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      href="/upload"
                      className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      Go to Upload Page
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2: AI Processing */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  2
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  AI Processing
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Once your CV is uploaded, our advanced AI will analyze it and generate a professional README file.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">What Happens During Processing:</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Text extraction from your PDF document</li>
                        <li>Analysis of your skills, experience, and qualifications</li>
                        <li>Generation of a structured, professional README</li>
                        <li>Formatting with appropriate Markdown syntax</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Processing Time:</h3>
                      <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p>The average processing time is approximately <span className="font-semibold">30 seconds</span>, depending on:</p>
                        <ul className="list-disc list-inside space-y-2">
                          <li>File size and complexity</li>
                          <li>Current server load</li>
                          <li>Network connection speed</li>
                        </ul>
                        <p>You'll see a progress indicator during processing.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-start">
                      <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-blue-800 dark:text-blue-300">
                        <span className="font-semibold">Pro Tip:</span> During processing, our AI analyzes not just your skills and experience, but also identifies your unique strengths and accomplishments to highlight them in your README.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 3: Edit and Preview */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  3
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Edit and Preview
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    After processing, you'll be taken to our editor where you can customize and preview your README.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Editor Features:</h3>
                      <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Split-screen view with live preview</li>
                        <li>Markdown syntax highlighting</li>
                        <li>Easy formatting tools (bold, italic, headers, etc.)</li>
                        <li>Add/edit sections as needed</li>
                        <li>Customize layout and appearance</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Recommended Edits:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Personalize the introduction</li>
                        <li>Add or remove sections based on your preferences</li>
                        <li>Include links to your portfolio or projects</li>
                        <li>Add custom badges or graphics</li>
                        <li>Check for any information you'd prefer to keep private</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-lg">
                    <div className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-amber-600 dark:text-amber-400 mt-1 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-amber-800 dark:text-amber-300">
                        <span className="font-semibold">Note:</span> All changes are automatically saved to your browser's local storage. You can safely refresh the page without losing your edits.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4: Download */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  4
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Download Your README
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Once you're satisfied with your README, you can download it to your device.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">How to Download:</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Click the "Download README" button in the editor</li>
                        <li>Choose a location on your device to save the file</li>
                        <li>The file will be saved as <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">README.md</code></li>
                        <li>You can now use this file for your GitHub profile</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">File Information:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Format: Markdown (.md)</li>
                        <li>Compatible with all GitHub repositories</li>
                        <li>Includes all formatting, links, and images</li>
                        <li>Can be further edited with any text editor</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 5: GitHub Upload */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-800 dark:bg-gray-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  5
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Create Your GitHub Repository
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    To display your README on your GitHub profile, you need to create a special repository.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Creating Your Repository:</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Log in to your GitHub account</li>
                        <li>Click the "+" icon in the top-right corner and select "New repository"</li>
                        <li><strong>Important:</strong> Name the repository exactly the same as your GitHub username</li>
                        <li>Make the repository public</li>
                        <li>Initialize with a README (or you'll upload yours in the next step)</li>
                        <li>Click "Create repository"</li>
                      </ol>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Example:</h3>
                      <div className="space-y-4 text-gray-700 dark:text-gray-300">
                        <p>If your GitHub username is <code className="bg-gray-200 dark:bg-gray-600 px-2 py-1 rounded">johndoe</code>, your repository should be named:</p>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg border border-gray-300 dark:border-gray-500 font-mono">
                          johndoe/johndoe
                        </div>
                        <p>This special repository name tells GitHub to display its README on your profile page.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                    <div className="flex items-start">
                      <Github className="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-blue-800 dark:text-blue-300">
                        <span className="font-semibold">GitHub Tip:</span> This special repository is sometimes called a "profile README" and is a feature GitHub introduced to allow users to customize their profile page.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 6: Upload to GitHub */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  6
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Upload Your README to GitHub
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Now it's time to upload your custom README to your GitHub repository.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Method 1: Web Interface</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Navigate to your newly created repository</li>
                        <li>Click on the README.md file</li>
                        <li>Click the pencil icon (Edit this file)</li>
                        <li>Delete the existing content</li>
                        <li>Paste your downloaded README content</li>
                        <li>Scroll down and click "Commit changes"</li>
                      </ol>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Method 2: Git Command Line</h3>
                      <ol className="list-decimal list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Clone your repository: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">git clone https://github.com/username/username.git</code></li>
                        <li>Navigate to the repository: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">cd username</code></li>
                        <li>Replace the README with your file</li>
                        <li>Add the changes: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">git add README.md</code></li>
                        <li>Commit the changes: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">git commit -m "Update profile README"</code></li>
                        <li>Push to GitHub: <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">git push</code></li>
                      </ol>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                    <div className="flex items-start">
                      <GitBranch className="w-6 h-6 text-green-600 dark:text-green-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-green-800 dark:text-green-300">
                        <span className="font-semibold">Success:</span> After uploading, visit your GitHub profile page to see your new README displayed prominently. Changes may take a few moments to appear.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 7: Maintenance */}
            <div className="mb-20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                  7
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Maintain and Update
                </h2>
              </div>
              
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-lg">
                <div className="space-y-6">
                  <p className="text-lg text-gray-700 dark:text-gray-300">
                    Keep your GitHub profile README up-to-date to reflect your latest skills and achievements.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Regular Updates:</h3>
                      <ul className="list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300">
                        <li>Update your README whenever you gain new skills</li>
                        <li>Add new projects or accomplishments</li>
                        <li>Refresh your profile at least every 3-6 months</li>
                        <li>Consider adding dynamic content (GitHub stats, recent posts, etc.)</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-100 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Advanced Features:</h3>
                      <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                        <li>Add GitHub statistics with <a href="https://github.com/anuraghazra/github-readme-stats" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub README Stats</a></li>
                        <li>Include skill badges from <a href="https://shields.io" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">Shields.io</a></li>
                        <li>Add a visitor counter</li>
                        <li>Showcase your latest blog posts or tweets</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                    <div className="flex items-start">
                      <GitFork className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-purple-800 dark:text-purple-300">
                        <span className="font-semibold">Pro Tip:</span> You can always return to GitRead to generate a new README when you update your CV, or use our editor to make changes to your existing README.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-1100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to Create Your GitHub Profile?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              Transform your CV into a professional GitHub README in minutes.
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
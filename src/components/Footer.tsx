import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8">
                <img src="/gitread-logo.svg" alt="GitRead Logo" className="w-full h-full" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white">GitRead</h3>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Transform your CV into a stunning GitHub README with AI in seconds. Upload your PDF resume and get a professional, customizable markdown README file instantly.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/upload" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                  Upload CV
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="/guide" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                  Guide
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-400">
            <p className="mb-2 md:mb-0 text-sm">
              Built with ❤️ using Next.js, Tailwind CSS, and AI
            </p>
            <div className="flex items-center space-x-4 text-sm">
              <p>© {new Date().getFullYear()} GitRead. All rights reserved.</p>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs text-green-600 dark:text-green-400">Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
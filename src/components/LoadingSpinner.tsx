import { CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  percentage?: number;
  showPercentage?: boolean;
}

export default function LoadingSpinner({ size = 'md', text, percentage = 0, showPercentage = false }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  // Calculate the circumference of the circle
  const radius = size === 'sm' ? 30 : size === 'md' ? 45 : 60;
  const circumference = 2 * Math.PI * radius;
  
  // Calculate the stroke-dashoffset based on percentage
  const offset = circumference - (percentage / 100) * circumference;

  const isComplete = percentage >= 100;

  return (
    <div className="flex flex-col items-center justify-center space-y-3">
      <div className="relative flex items-center justify-center">
        <AnimatePresence mode="wait">
          {isComplete ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", damping: 8, stiffness: 100 }}
              className={`${sizeClasses[size]} bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center`}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", damping: 8, stiffness: 100, delay: 0.2 }}
              >
                <CheckCircle className={`
                  ${size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-12 h-12'} 
                  text-green-500 dark:text-green-400
                `} />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div key="loading" className="relative">
              {/* Circular progress indicator */}
              <svg className={`${sizeClasses[size]} transform -rotate-90`}>
                {/* Background circle */}
                <circle
                  className="text-gray-200 dark:text-gray-700"
                  strokeWidth="4"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="50%"
                  cy="50%"
                />
                {/* Progress circle */}
                <circle
                  className="text-blue-600 dark:text-blue-400 transition-all duration-300 ease-out"
                  strokeWidth="4"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r={radius}
                  cx="50%"
                  cy="50%"
                />
              </svg>
              
              {/* Percentage text in the middle of the circle */}
              {showPercentage && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-gray-800 dark:text-white font-bold">
                    {Math.round(percentage)}%
                  </span>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Text below the circle */}
      {text && (
        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium text-center">
          {text}
        </span>
      )}
      
      {/* Status text */}
      {showPercentage && (
        <motion.span 
          key={isComplete ? "complete" : "processing"}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-xs font-medium ${isComplete ? 'text-green-500 dark:text-green-400' : 'text-gray-500 dark:text-gray-400'}`}
        >
          {isComplete ? 'Complete!' : ''}
        </motion.span>
      )}
    </div>
  );
}
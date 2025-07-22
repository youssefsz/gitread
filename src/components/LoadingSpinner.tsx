interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
}

export default function LoadingSpinner({ size = 'md', text }: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  return (
    <div className="flex items-center justify-center space-x-2">
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="w-full h-full border-2 border-gray-300 dark:border-gray-600 border-t-blue-600 dark:border-t-blue-400 rounded-full"></div>
      </div>
      {text && (
        <span className="text-gray-600 dark:text-gray-400 text-sm font-medium">
          {text}
        </span>
      )}
    </div>
  );
}
import { Star } from 'lucide-react';

interface HostlyRatingProps {
  rating: number;
  maxRating?: number;
  showNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function HostlyRating({ 
  rating, 
  maxRating = 5, 
  showNumber = true,
  size = 'md',
  className = '' 
}: HostlyRatingProps) {
  const sizeClasses = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };
  
  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="flex items-center gap-0.5">
        {Array.from({ length: maxRating }, (_, i) => {
          const fillPercentage = Math.min(Math.max(rating - i, 0), 1);
          
          return (
            <div key={i} className="relative">
              {/* Background star */}
              <Star className={`${sizeClasses[size]} text-[#E2E8F0]`} fill="#E2E8F0" />
              
              {/* Filled star with clip path */}
              {fillPercentage > 0 && (
                <div 
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: `${fillPercentage * 100}%` }}
                >
                  <Star className={`${sizeClasses[size]} text-[#FCD34D]`} fill="#FCD34D" />
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {showNumber && (
        <span className={`${textSizes[size]} font-medium text-[#0F172A]`}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

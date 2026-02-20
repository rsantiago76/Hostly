import { CheckCircle, Star, Sparkles } from 'lucide-react';
import { HTMLAttributes } from 'react';

interface HostlyBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: 'verified' | 'superhost' | 'new';
}

export function HostlyBadge({ variant, className = '', children, ...props }: HostlyBadgeProps) {
  const variants = {
    verified: {
      bg: 'bg-[#DBEAFE]',
      text: 'text-[#1E40AF]',
      icon: CheckCircle,
    },
    superhost: {
      bg: 'bg-[#FEF3C7]',
      text: 'text-[#92400E]',
      icon: Star,
    },
    new: {
      bg: 'bg-[#EADBC8]',
      text: 'text-[#0F172A]',
      icon: Sparkles,
    },
  };

  const config = variants[variant];
  const Icon = config.icon;

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${config.bg} ${config.text} ${className}`}
      {...props}
    >
      <Icon className="w-3.5 h-3.5" />
      {children || (variant === 'verified' ? 'Verified' : variant === 'superhost' ? 'Superhost' : 'New')}
    </span>
  );
}

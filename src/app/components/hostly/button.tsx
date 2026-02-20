import { ButtonHTMLAttributes } from 'react';

interface HostlyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function HostlyButton({ 
  variant = 'primary', 
  size = 'md',
  className = '',
  children,
  ...props 
}: HostlyButtonProps) {
  const baseStyles = "inline-flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium";
  
  const variantStyles = {
    primary: "bg-[#0F172A] text-[#F8FAFC] hover:bg-[#1e293b] active:scale-[0.98]",
    secondary: "bg-[#EADBC8] text-[#0F172A] hover:bg-[#dcc9b0] active:scale-[0.98]",
    ghost: "bg-transparent text-[#0F172A] hover:bg-[#F1F5F9] active:scale-[0.98]"
  };
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-lg"
  };
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

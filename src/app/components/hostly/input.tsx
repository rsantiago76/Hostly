import { InputHTMLAttributes, forwardRef } from 'react';

interface HostlyInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const HostlyInput = forwardRef<HTMLInputElement, HostlyInputProps>(
  ({ label, error, className = '', ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label className="block mb-2 text-sm font-medium text-[#0F172A]">
            {label}
          </label>
        )}
        <input
          ref={ref}
          className={`w-full px-4 py-3 bg-white border-2 border-[#E2E8F0] rounded-lg 
            text-[#0F172A] placeholder:text-[#64748B]
            focus:outline-none focus:border-[#3B82F6] focus:ring-4 focus:ring-[#3B82F6]/10
            transition-all duration-200
            disabled:bg-[#F1F5F9] disabled:cursor-not-allowed
            ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
            ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1 text-sm text-red-500">{error}</p>
        )}
      </div>
    );
  }
);

HostlyInput.displayName = 'HostlyInput';

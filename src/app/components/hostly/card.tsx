import { HTMLAttributes } from 'react';

interface HostlyCardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export function HostlyCard({ hover = false, className = '', children, ...props }: HostlyCardProps) {
  return (
    <div
      className={`bg-white rounded-xl border border-[#E2E8F0] overflow-hidden
        ${hover ? 'transition-all duration-300 hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 cursor-pointer' : ''}
        ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function HostlyCardImage({ src, alt, className = '' }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`aspect-[4/3] overflow-hidden ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
}

export function HostlyCardContent({ className = '', children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
}

export function HostlyCardTitle({ className = '', children }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className={`text-lg font-semibold text-[#0F172A] mb-2 ${className}`}>
      {children}
    </h3>
  );
}

export function HostlyCardDescription({ className = '', children }: HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={`text-sm text-[#64748B] ${className}`}>
      {children}
    </p>
  );
}

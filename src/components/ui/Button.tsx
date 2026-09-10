import Link from 'next/link';
import React from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'surface' | 'link';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  external?: boolean;
};

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  external = false,
}: ButtonProps) {
  
  const baseClasses = "inline-flex items-center justify-center gap-2 rounded-lg uppercase transition-all duration-200";
  
  const sizeClasses = {
    sm: "px-6 py-2.5 font-label-sm text-label-sm tracking-wider",
    md: "px-8 py-3.5 font-label-md text-label-md tracking-wider shadow-sm hover:shadow-md",
    lg: "px-10 py-4 font-label-lg text-label-lg tracking-widest shadow-md hover:shadow-lg",
  };

  const variantClasses = {
    primary: "bg-primary-container hover:bg-primary text-on-primary",
    secondary: "bg-surface-variant hover:bg-surface-dim text-on-surface",
    outline: "border border-on-surface/20 hover:border-on-surface text-on-surface hover:bg-surface-variant",
    surface: "bg-surface-container hover:bg-surface-variant text-on-surface",
    link: "text-primary hover:underline decoration-primary underline-offset-8 shadow-none hover:shadow-none p-0",
  };

  const combinedClasses = variant === 'link' 
    ? twMerge("inline-flex items-center gap-2 text-primary font-label-md text-label-md hover:underline decoration-primary underline-offset-8 transition-all", className)
    : twMerge(baseClasses, sizeClasses[size], variantClasses[variant], className);

  if (href) {
    if (external) {
      return (
        <a href={href} className={combinedClasses} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} onClick={onClick}>
      {children}
    </button>
  );
}

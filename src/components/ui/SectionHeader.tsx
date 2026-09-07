import React from 'react';

type SectionHeaderProps = {
  overline?: string;
  headline: string;
  subheadline?: string;
  align?: "left" | "center";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
};

export default function SectionHeader({
  overline,
  headline,
  subheadline,
  align = "left",
  size = "lg",
  className = "",
}: SectionHeaderProps) {
  
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  
  const sizeClasses = {
    sm: "font-headline-sm text-headline-sm",
    md: "font-headline-md text-headline-md",
    lg: "font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg mt-2",
    xl: "font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl tracking-tight mb-8 mt-2",
  };

  return (
    <div className={`max-w-2xl ${alignClass} ${className}`}>
      {overline && (
        <span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest block mb-2">
          {overline}
        </span>
      )}
      <h2 className={`${sizeClasses[size]} text-on-surface`}>
        {headline}
      </h2>
      {subheadline && (
        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          {subheadline}
        </p>
      )}
    </div>
  );
}

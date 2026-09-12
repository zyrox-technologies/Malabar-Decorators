"use client";

import { useState, useEffect } from "react";

export interface ResponsivePageSizeOptions {
  mobile?: number;
  tablet?: number;
  laptop?: number;
}

/**
 * Responsive page size hook according to device:
 * - Mobile (< 768px): default 10 items
 * - Tablet (768px - 1023px): default 15 items
 * - Laptop / Desktop (>= 1024px): default 18 items (6 full rows of 3)
 */
export function useResponsivePageSize(options?: ResponsivePageSizeOptions): number {
  const mobileSize = options?.mobile ?? 10;
  const tabletSize = options?.tablet ?? 15;
  const laptopSize = options?.laptop ?? 18;

  const [pageSize, setPageSize] = useState<number>(laptopSize);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageSize(mobileSize);
      } else if (width < 1024) {
        setPageSize(tabletSize);
      } else {
        setPageSize(laptopSize);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileSize, tabletSize, laptopSize]);

  return pageSize;
}

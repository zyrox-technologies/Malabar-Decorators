"use client";

import { useState, useEffect } from "react";

/**
 * Responsive page size hook according to device:
 * - Mobile (< 768px): 10 items
 * - Tablet (768px - 1023px): 15 items
 * - Laptop / Desktop (>= 1024px): 20 items
 */
export function useResponsivePageSize(): number {
  const [pageSize, setPageSize] = useState<number>(20);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setPageSize(10);
      } else if (width < 1024) {
        setPageSize(15);
      } else {
        setPageSize(19);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return pageSize;
}

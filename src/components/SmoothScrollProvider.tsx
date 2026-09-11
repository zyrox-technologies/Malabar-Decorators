"use client";

import Lenis from "lenis";
import { useEffect } from "react";

/**
 * Initialises Lenis smooth-scroll once on mount.
 * Runs the RAF loop internally and tears down on unmount.
 * Framer Motion's useScroll works naturally because Lenis
 * still fires native scroll events on window.
 */
export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,          // smoothing factor (lower = smoother)
      smoothWheel: true,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

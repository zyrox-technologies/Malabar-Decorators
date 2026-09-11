"use client";

import { motion } from "motion/react";
import { useReveal } from "@/hooks/useScrollAnimation";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Delay in seconds before the animation starts */
  delay?: number;
  /** Animation direction: "up" (default), "left", "right", "fade" */
  from?: "up" | "left" | "right" | "fade";
}

const directionMap = {
  up: { y: 28, x: 0 },
  left: { y: 0, x: -28 },
  right: { y: 0, x: 28 },
  fade: { y: 0, x: 0 },
};

/**
 * Wraps children in a motion div that fades + slides in when scrolled into view.
 * Usage: <Reveal delay={0.1}><p>...</p></Reveal>
 */
export default function Reveal({
  children,
  className,
  delay = 0,
  from = "up",
}: RevealProps) {
  const { ref, isInView } = useReveal();
  const { x, y } = directionMap[from];

  return (
    <motion.div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

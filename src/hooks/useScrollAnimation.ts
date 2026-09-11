"use client";

import { useRef } from "react";
import { useInView, useScroll, useTransform, MotionValue } from "motion/react";

/** Returns a ref + boolean: true once the element enters the viewport (fires once). */
export function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  return { ref, isInView };
}

/** Returns scroll-driven parallax transform values for an element. */
export function useParallax(
  speed = 0.15
): { ref: React.RefObject<HTMLElement | null>; y: MotionValue<string> } {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // speed=0.15 → element moves 15% of its scroll range in the opposite direction
  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);
  return { ref, y };
}

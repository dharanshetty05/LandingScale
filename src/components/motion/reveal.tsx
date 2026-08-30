"use client";

import * as React from "react";
import { motion, useReducedMotion } from "motion/react";
import { fadeInUp, VIEWPORT } from "@/lib/motion";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  /** Additional delay in seconds, useful for staggering a handful of items by hand. */
  delay?: number;
  /** "entrance" animates immediately on mount. "scroll" animates once in view. */
  mode?: "entrance" | "scroll";
}

/**
 * Shared fade + small vertical-movement reveal used for page entrance and
 * section reveals across the landing page. Respects prefers-reduced-motion
 * by rendering a plain, unanimated element.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  mode = "scroll",
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const viewportProps =
    mode === "scroll" ? { whileInView: "visible", viewport: VIEWPORT } : { animate: "visible" };

  return (
    <motion.div
      className={className}
      initial="hidden"
      variants={fadeInUp}
      transition={{ delay }}
      {...viewportProps}
    >
      {children}
    </motion.div>
  );
}

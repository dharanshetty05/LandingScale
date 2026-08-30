import type { Variants } from "motion/react";

/**
 * ScaleWithLakshya animation language.
 *
 * Principle: animation clarifies hierarchy and interaction, it does not
 * demonstrate technical ability. Every value below is deliberately small.
 */

/** Matches --ease-standard in globals.css, expressed as a Motion easing array. */
export const EASE_STANDARD = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.15, // hover/press feedback
  base: 0.25, // small UI transitions (accordion, tabs)
  slow: 0.4, // entrances, section reveals
} as const;

/** Distance content travels during entrance/reveal animations, in pixels. */
export const MOVEMENT = {
  sm: 8, // buttons, small inline elements
  md: 16, // page entrance content
  lg: 20, // section reveal blocks
} as const;

/** Default viewport trigger for scroll-based reveals. */
export const VIEWPORT = { once: true, amount: 0.3 } as const;

/** Page entrance: subtle fade + small vertical movement. */
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: MOVEMENT.md },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_STANDARD },
  },
};

/** Section reveal: same language, slightly larger travel for bigger blocks. */
export const revealUp: Variants = {
  hidden: { opacity: 0, y: MOVEMENT.lg },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: DURATION.slow, ease: EASE_STANDARD },
  },
};

/** Staggers children using fadeInUp — use on a parent motion element. */
export function staggerContainer(staggerDelay = 0.08): Variants {
  return {
    hidden: {},
    visible: {
      transition: { staggerChildren: staggerDelay },
    },
  };
}

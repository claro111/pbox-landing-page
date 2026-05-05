/**
 * Motion configuration utilities for Framer Motion
 * Respects user's reduced motion preferences
 */

/**
 * Check if user prefers reduced motion
 */
export const prefersReducedMotion = (): boolean => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Get animation duration based on user preferences
 * Returns 0 if user prefers reduced motion, otherwise returns the specified duration
 */
export const getAnimationDuration = (duration: number): number => {
  return prefersReducedMotion() ? 0 : duration
}

/**
 * Default animation variants that respect reduced motion
 */
export const fadeInUpVariants = {
  hidden: {
    opacity: 0,
    y: prefersReducedMotion() ? 0 : 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: getAnimationDuration(0.6),
      ease: 'easeOut',
    },
  },
}

export const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: getAnimationDuration(0.6),
      ease: 'easeOut',
    },
  },
}

export const scaleInVariants = {
  hidden: {
    opacity: 0,
    scale: prefersReducedMotion() ? 1 : 0.95,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: getAnimationDuration(0.5),
      ease: 'easeOut',
    },
  },
}


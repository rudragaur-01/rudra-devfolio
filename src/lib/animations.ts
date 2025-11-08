import type { Variants } from 'framer-motion';

// Container for staggering animations
export const staggerContainer = (delay = 0): Variants => ({
  hidden: {},
  visible: {
    transition: {
      delayChildren: delay,
      staggerChildren: 0.25, // slightly faster for better flow
      ease: 'easeInOut',
    },
  },
});

// Generic fade-up motion (great for text and cards)
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
};

// Optional subtle scale for hero titles or section headers
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

import React from 'react';
import { motion } from 'framer-motion';

/**
 * ScrollReveal
 * Production-ready Framer Motion scroll-triggered animations.
 * Triggers smoothly when scrolled into view without jarring jumps.
 */
export default function ScrollReveal({
  children,
  className = '',
  variant = 'fade-up',
  delay = 0,
  duration = 0.7,
  yOffset = 32,
  xOffset = 32,
}) {
  const getVariants = () => {
    switch (variant) {
      case 'fade-up':
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] }
          }
        };
      case 'fade-down':
        return {
          hidden: { opacity: 0, y: -yOffset },
          visible: {
            opacity: 1,
            y: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] }
          }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: -xOffset },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] }
          }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: xOffset },
          visible: {
            opacity: 1,
            x: 0,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] }
          }
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.92 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] }
          }
        };
      case 'fade-in':
      default:
        return {
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration, delay, ease: [0.16, 1, 0.3, 1] }
          }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollStagger
 * Container that sequentially staggers its direct children as they scroll into view.
 */
export function ScrollStagger({
  children,
  className = '',
  staggerDelay = 0.1,
  delay = 0,
}) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: staggerDelay,
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * StaggerItem
 * Child item to be placed inside ScrollStagger.
 */
export function StaggerItem({
  children,
  className = '',
  yOffset = 24,
}) {
  const itemVariants = {
    hidden: { opacity: 0, y: yOffset },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}

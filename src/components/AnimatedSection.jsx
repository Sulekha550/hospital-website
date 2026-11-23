import React from 'react';
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', delay = 0, direction = 'up' }) {
  const hiddenMap = {
    up:    { opacity: 0, y: 40 },
    down:  { opacity: 0, y: -40 },
    left:  { opacity: 0, x: -40 },
    right: { opacity: 0, x: 40 },
    fade:  { opacity: 0 },
    scale: { opacity: 0, scale: 0.92 },
  };
  const visibleMap = {
    up:    { opacity: 1, y: 0 },
    down:  { opacity: 1, y: 0 },
    left:  { opacity: 1, x: 0 },
    right: { opacity: 1, x: 0 },
    fade:  { opacity: 1 },
    scale: { opacity: 1, scale: 1 },
  };
  return (
    <motion.div
      className={className}
      initial={hiddenMap[direction] ?? hiddenMap.up}
      whileInView={visibleMap[direction] ?? visibleMap.up}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

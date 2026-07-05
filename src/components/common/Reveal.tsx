import React from 'react';
import { motion } from 'framer-motion';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'li' | 'span';
}

/**
 * Lightweight scroll-in wrapper built on framer-motion. Content fades and
 * slides up once when it enters the viewport. Respecting reduced-motion is
 * handled globally via CSS transition overrides plus framer-motion's own
 * reduced-motion awareness.
 */
const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 24, className, as = 'div' }) => {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;

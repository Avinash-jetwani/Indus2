import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center' | 'right';
  gradient?: boolean;
  tone?: 'light' | 'dark';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  description,
  align = 'center',
  gradient = true,
  tone = 'light'
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right'
  };

  const subtitleColor = tone === 'dark' ? '#f97316' : '#df4a25';
  const headingClass = gradient
    ? tone === 'dark'
      ? 'text-gradient-strong'
      : 'text-gradient'
    : tone === 'dark'
      ? 'text-white'
      : 'text-gray-900';
  const descriptionColor = tone === 'dark' ? 'rgba(226, 232, 240, 0.85)' : '#4b5563';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`max-w-3xl ${align === 'center' ? 'mx-auto' : ''} mb-12 ${alignmentClasses[align]}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          style={{
            color: subtitleColor,
            fontWeight: 600,
            fontSize: '0.75rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            marginBottom: '0.75rem'
          }}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${headingClass}`}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-lg leading-relaxed"
          style={{ color: descriptionColor }}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

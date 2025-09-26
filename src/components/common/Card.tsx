import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  gradient?: boolean;
  dark?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  dark = false,
  padding = 'md',
  style
}) => {
  const paddingStyles = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8'
  };
  
  const baseStyles = 'rounded-xl transition-all duration-300';
  const hoverStyles = hover ? 'hover:shadow-2xl hover:scale-[1.02]' : '';
  const bgStyles = gradient 
    ? 'bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900' 
    : dark 
      ? 'bg-gray-800 text-white' 
      : 'bg-white';
  const shadowStyles = dark ? 'shadow-xl shadow-gray-900/20' : 'shadow-xl shadow-gray-200/50';
  
  return (
    <div
      className={`
        ${baseStyles}
        ${bgStyles}
        ${shadowStyles}
        ${hoverStyles}
        ${paddingStyles[padding]}
        ${className}
      `}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;

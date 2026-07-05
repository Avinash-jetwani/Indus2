import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

/** Token-based surface card with an animated gradient hairline on hover. */
const Card: React.FC<CardProps> = ({ children, className = '', style, onClick }) => (
  <div className={`card ${className}`.trim()} style={style} onClick={onClick}>
    {children}
  </div>
);

export default Card;

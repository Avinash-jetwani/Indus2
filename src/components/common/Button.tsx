import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const classes = [
    'btn',
    variant === 'primary' ? 'btn--primary' : 'btn--ghost',
    size === 'sm' ? 'btn--sm' : size === 'lg' ? 'btn--lg' : '',
    fullWidth ? 'btn--block' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {Icon && iconPosition === 'left' && <Icon />}
      {children}
      {Icon && iconPosition === 'right' && <Icon />}
    </button>
  );
};

export default Button;

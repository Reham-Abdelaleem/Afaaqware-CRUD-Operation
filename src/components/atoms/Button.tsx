import React from 'react';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'text-[11px] px-3 py-1.5',
  md: 'text-[13px] px-5 py-2.5',
  lg: 'text-base px-8 py-3.5',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseClass = 'btn font-semibold tracking-wide';

  const variantClass = `btn-${variant}`;
  const sizeClass = sizeStyles[size];
  const widthClass = fullWidth ? 'w-full' : '';

  const classes = [
    baseClass,
    variantClass,
    sizeClass,
    widthClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
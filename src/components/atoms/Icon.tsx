import React from 'react';

interface IconProps {
  name: string;
  variant?: 'filled' | 'outlined';
  className?: string;
}

const variantClasses: Record<NonNullable<IconProps['variant']>, string> = {
  filled: 'material-icons',
  outlined: 'material-icons-outlined',
};

export const Icon: React.FC<IconProps> = ({
  name,
  variant = 'filled',
  className = '',
}) => {
  const classes = [
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return <span className={classes}>{name}</span>;
};
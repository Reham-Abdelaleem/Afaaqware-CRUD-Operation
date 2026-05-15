import React, { JSX } from 'react';

interface HeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
  className?: string;
  icon?: React.ReactNode;
}

const levelStyles: Record<NonNullable<HeadingProps['level']>, string> = {
  1: 'text-3xl',
  2: 'text-xl',
  3: 'text-lg',
  4: 'text-base',
};

export const Heading: React.FC<HeadingProps> = ({
  children,
  level = 1,
  className = '',
  icon,
}) => {
  const Tag = (`h${level}` as keyof JSX.IntrinsicElements);

  const classes = [
    'font-bold text-main flex items-center gap-2',
    levelStyles[level],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Tag className={classes}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </Tag>
  );
};
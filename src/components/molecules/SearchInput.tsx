import React from 'react';
import { Icon } from '../atoms/Icon';

interface SearchInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const SearchInput: React.FC<SearchInputProps> = ({
  className = '',
  ...props
}) => {
  const containerClasses = ['relative w-80', className]
    .filter(Boolean)
    .join(' ');

  const inputClasses = [
    'input',
    'pl-5 pr-12',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        {...props}
      />

      <Icon
        name="search"
        variant="outlined"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-lg"
      />
    </div>
  );
};
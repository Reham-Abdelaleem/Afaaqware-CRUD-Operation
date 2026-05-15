import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  const inputClasses = [
    'input',
    error ? 'border-danger focus:ring-danger' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && (
        <label className="text-sm font-semibold text-secondary ml-0.5">
          {label}
        </label>
      )}

      <input className={inputClasses} {...props} />

      {error && (
        <span className="text-xs text-danger mt-1 font-medium">
          {error}
        </span>
      )}
    </div>
  );
};
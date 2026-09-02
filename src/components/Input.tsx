import type { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  invalid?: boolean;
}

export function Input({ invalid = false, className = '', ...props }: InputProps) {
  return (
    <input
      className={`core-control core-input ${className}`.trim()}
      aria-invalid={invalid || undefined}
      {...props}
    />
  );
}

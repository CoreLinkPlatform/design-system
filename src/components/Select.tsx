import type { SelectHTMLAttributes } from 'react';

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  invalid?: boolean;
}

export function Select({ invalid = false, className = '', children, ...props }: SelectProps) {
  return (
    <select
      className={`core-control core-select ${className}`.trim()}
      aria-invalid={invalid || undefined}
      {...props}
    >
      {children}
    </select>
  );
}

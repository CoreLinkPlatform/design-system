import type { HTMLAttributes, ReactNode } from 'react';

export type StatusTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';

export interface StatusBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: StatusTone;
  dot?: boolean;
  icon?: ReactNode;
}

export function StatusBadge({
  tone = 'neutral',
  dot = false,
  icon,
  className = '',
  children,
  ...props
}: StatusBadgeProps) {
  return (
    <span className={`core-status-badge core-status-badge--${tone} ${className}`.trim()} {...props}>
      {dot && <span className="core-status-badge__dot" aria-hidden="true" />}
      {icon && <span className="core-status-badge__icon" aria-hidden="true">{icon}</span>}
      {children}
    </span>
  );
}

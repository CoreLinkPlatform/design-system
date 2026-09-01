import type { HTMLAttributes } from 'react';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ variant = 'neutral', children, ...props }: BadgeProps) {
  return <span className={`core-badge core-badge-${variant}`} {...props}>{children}</span>;
}

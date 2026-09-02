import type { ComponentProps } from 'react';
import { StatusBadge } from './StatusBadge';

export type BadgeVariant = 'success' | 'warning' | 'danger' | 'neutral';
export interface BadgeProps extends Omit<ComponentProps<typeof StatusBadge>, 'tone'> {
  variant?: BadgeVariant;
}

/** @deprecated Prefer StatusBadge. Badge remains for backward compatibility. */
export function Badge({ variant = 'neutral', ...props }: BadgeProps) {
  return <StatusBadge tone={variant} {...props} />;
}

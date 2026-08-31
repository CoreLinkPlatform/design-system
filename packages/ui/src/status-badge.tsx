import type { ReactNode } from 'react';

export type StatusBadgeStatus = 'online' | 'warning' | 'offline';

export interface StatusBadgeProps {
  status: StatusBadgeStatus;
  children?: ReactNode;
}

const labels: Record<StatusBadgeStatus, string> = {
  online: 'Online',
  warning: 'Warning',
  offline: 'Offline',
};

export function StatusBadge({ status, children }: StatusBadgeProps) {
  return (
    <span data-status={status}>
      {children ?? labels[status]}
    </span>
  );
}

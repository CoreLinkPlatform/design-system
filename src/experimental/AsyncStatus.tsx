import type { HTMLAttributes, ReactNode } from 'react';
import { StatusIndicator, type FeedbackStatus } from './StatusIndicator';
export interface AsyncStatusProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> { status: FeedbackStatus; label: ReactNode; detail?: ReactNode; action?: ReactNode; icon?: ReactNode; announce?: 'off' | 'polite' | 'assertive'; }
export function AsyncStatus({ status, label, detail, action, icon, announce = status === 'error' || status === 'blocked' ? 'assertive' : 'polite', className = '', ...props }: AsyncStatusProps) {
  const active = status === 'queued' || status === 'running';
  return <div className={`core-async-status ${className}`.trim()} data-status={status} aria-live={announce} aria-atomic="true" aria-busy={active || undefined} {...props}>
    <StatusIndicator status={status} label={label} icon={icon} />
    {detail && <div className="core-async-status__detail">{detail}</div>}{action && <div className="core-async-status__action">{action}</div>}
  </div>;
}

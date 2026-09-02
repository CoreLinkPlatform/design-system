import type { HTMLAttributes, ReactNode } from 'react';
export type FeedbackStatus = 'idle' | 'queued' | 'running' | 'partial' | 'success' | 'blocked' | 'error';
export type FeedbackTone = 'neutral' | 'info' | 'success' | 'warning' | 'danger';
const toneByStatus: Record<FeedbackStatus, FeedbackTone> = { idle: 'neutral', queued: 'neutral', running: 'info', partial: 'warning', success: 'success', blocked: 'warning', error: 'danger' };
export interface StatusIndicatorProps extends HTMLAttributes<HTMLSpanElement> { status: FeedbackStatus; label: ReactNode; icon?: ReactNode; showDot?: boolean; }
export function StatusIndicator({ status, label, icon, showDot = true, className = '', ...props }: StatusIndicatorProps) {
  const tone = toneByStatus[status];
  return <span className={`core-status-indicator core-status-indicator--${tone} ${className}`.trim()} data-status={status} {...props}>
    {icon ? <span aria-hidden="true">{icon}</span> : showDot ? <span className="core-status-indicator__dot" aria-hidden="true" /> : null}<span>{label}</span>
  </span>;
}

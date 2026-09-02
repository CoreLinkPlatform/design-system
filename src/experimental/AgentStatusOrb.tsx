import type { HTMLAttributes } from 'react';
import type { FeedbackStatus } from './StatusIndicator';
export interface AgentStatusOrbProps extends HTMLAttributes<HTMLSpanElement> { status: FeedbackStatus; label: string; size?: 'sm' | 'md'; }
export function AgentStatusOrb({ status, label, size = 'md', className = '', ...props }: AgentStatusOrbProps) {
  return <span className={`core-agent-orb core-agent-orb--${size} ${className}`.trim()} data-status={status} role="img" aria-label={label} {...props}><span className="core-agent-orb__core" aria-hidden="true" /></span>;
}

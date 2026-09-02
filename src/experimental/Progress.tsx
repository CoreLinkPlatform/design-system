import type { HTMLAttributes, ReactNode } from 'react';
export function normalizeProgress(value: number, min = 0, max = 100) { if (!isFinite(value) || max <= min) return min; return Math.min(max, Math.max(min, value)); }
export interface ProgressProps extends Omit<HTMLAttributes<HTMLDivElement>, 'children'> { label: ReactNode; value?: number; min?: number; max?: number; valueLabel?: ReactNode; }
export function Progress({ label, value, min = 0, max = 100, valueLabel, className = '', ...props }: ProgressProps) {
  const determinate = typeof value === 'number'; const normalized = determinate ? normalizeProgress(value, min, max) : undefined;
  const percent = determinate && max > min ? ((normalized! - min) / (max - min)) * 100 : 0; const labelId = props.id ? `${props.id}-label` : undefined;
  return <div className={`core-progress ${className}`.trim()} {...props}><div className="core-progress__header"><span id={labelId}>{label}</span>{valueLabel && <span>{valueLabel}</span>}</div>
    <div className="core-progress__track" role="progressbar" aria-labelledby={labelId} aria-label={labelId ? undefined : typeof label === 'string' ? label : undefined} aria-valuemin={min} aria-valuemax={max} aria-valuenow={normalized} aria-valuetext={typeof valueLabel === 'string' ? valueLabel : undefined} data-indeterminate={!determinate || undefined}>
      <span className="core-progress__bar" style={determinate ? { inlineSize: `${percent}%` } : undefined} />
    </div></div>;
}

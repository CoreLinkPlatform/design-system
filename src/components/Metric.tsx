import type { HTMLAttributes, ReactNode } from 'react';

export interface MetricProps extends HTMLAttributes<HTMLDivElement> {
  label: ReactNode;
  value: ReactNode;
  supportingText?: ReactNode;
  trend?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export function Metric({
  label,
  value,
  supportingText,
  trend,
  size = 'md',
  className = '',
  ...props
}: MetricProps) {
  return (
    <div className={`core-metric core-metric--${size} ${className}`.trim()} {...props}>
      <div className="core-metric__label">{label}</div>
      <div className="core-metric__row">
        <strong className="core-metric__value">{value}</strong>
        {trend && <span className="core-metric__trend">{trend}</span>}
      </div>
      {supportingText && <div className="core-metric__supporting">{supportingText}</div>}
    </div>
  );
}

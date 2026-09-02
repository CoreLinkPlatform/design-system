import type { HTMLAttributes, ReactNode } from 'react';

export interface EmptyStateProps extends HTMLAttributes<HTMLDivElement> {
  title: ReactNode;
  description?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  secondaryAction?: ReactNode;
  size?: 'sm' | 'md';
}

export function EmptyState({
  title,
  description,
  icon,
  action,
  secondaryAction,
  size = 'md',
  className = '',
  ...props
}: EmptyStateProps) {
  return (
    <div className={`core-empty-state core-empty-state--${size} ${className}`.trim()} {...props}>
      {icon && <div className="core-empty-state__icon" aria-hidden="true">{icon}</div>}
      <h2 className="core-empty-state__title">{title}</h2>
      {description && <p className="core-empty-state__description">{description}</p>}
      {(action || secondaryAction) && (
        <div className="core-empty-state__actions">
          {action}
          {secondaryAction}
        </div>
      )}
    </div>
  );
}

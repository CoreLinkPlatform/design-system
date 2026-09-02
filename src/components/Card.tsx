import type { HTMLAttributes, ReactNode } from 'react';
import { Surface, type SurfaceVariant } from './Surface';

export interface CardProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title?: ReactNode;
  description?: ReactNode;
  footer?: ReactNode;
  variant?: SurfaceVariant;
}

export function Card({
  title,
  description,
  footer,
  children,
  variant = 'outlined',
  className = '',
  ...props
}: CardProps) {
  return (
    <Surface as="section" variant={variant} className={`core-card ${className}`.trim()} {...props}>
      {(title || description) && (
        <header className="core-card__header">
          {title && <h3 className="core-card__title">{title}</h3>}
          {description && <p className="core-card__description">{description}</p>}
        </header>
      )}
      <div className="core-card__content">{children}</div>
      {footer && <footer className="core-card__footer">{footer}</footer>}
    </Surface>
  );
}

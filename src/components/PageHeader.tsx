import type { HTMLAttributes, ReactNode } from 'react';

export interface PageHeaderProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className = '',
  ...props
}: PageHeaderProps) {
  return (
    <header className={`core-page-header ${className}`.trim()} {...props}>
      <div className="core-page-header__copy">
        {eyebrow && <div className="core-page-header__eyebrow">{eyebrow}</div>}
        <h1 className="core-page-header__title">{title}</h1>
        {description && <p className="core-page-header__description">{description}</p>}
      </div>
      {actions && <div className="core-page-header__actions">{actions}</div>}
    </header>
  );
}

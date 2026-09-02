import type { ElementType, HTMLAttributes, ReactNode } from 'react';

export type SurfaceVariant = 'default' | 'subtle' | 'raised' | 'outlined';
export type SurfaceElement = 'div' | 'section' | 'article' | 'aside';

export interface SurfaceProps extends HTMLAttributes<HTMLElement> {
  as?: SurfaceElement;
  variant?: SurfaceVariant;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  children?: ReactNode;
}

export function Surface({
  as = 'div',
  variant = 'default',
  padding = 'md',
  className = '',
  children,
  ...props
}: SurfaceProps) {
  const Component = as as ElementType;
  return (
    <Component
      className={`core-surface core-surface--${variant} core-surface--padding-${padding} ${className}`.trim()}
      {...props}
    >
      {children}
    </Component>
  );
}

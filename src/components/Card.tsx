import type { HTMLAttributes } from 'react';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export function Card({ title, children, className = '', ...props }: CardProps) {
  return <section className={`core-card ${className}`} {...props}>{title && <h3>{title}</h3>}{children}</section>;
}

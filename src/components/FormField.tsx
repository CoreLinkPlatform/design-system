import type { ReactNode } from 'react';

export interface FormFieldProps {
  controlId: string;
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  required?: boolean;
  children: ReactNode;
  className?: string;
}

export function FormField({
  controlId,
  label,
  description,
  error,
  required = false,
  children,
  className = '',
}: FormFieldProps) {
  const descriptionId = description ? `${controlId}-description` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;

  return (
    <div
      className={`core-field ${className}`.trim()}
      data-description-id={descriptionId}
      data-error-id={errorId}
    >
      <label className="core-field__label" htmlFor={controlId}>
        {label}
        {required && <span className="core-field__required" aria-hidden="true">*</span>}
      </label>
      {description && <div className="core-field__description" id={descriptionId}>{description}</div>}
      {children}
      {error && <div className="core-field__error" id={errorId} role="alert">{error}</div>}
    </div>
  );
}

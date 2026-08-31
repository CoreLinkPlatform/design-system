export interface MetricCardProps {
  label: string;
  value: string | number;
  description?: string;
}

export function MetricCard({ label, value, description }: MetricCardProps) {
  return (
    <article className="core-metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      {description && <small>{description}</small>}
    </article>
  );
}

interface CardProps {
  title: string
  value: string
  subtitle: string
}

export default function DashboardCard({ title, value, subtitle }: CardProps) {
  return (
    <div className="card shadow-sm p-3">
      <small className="text-muted">{title}</small>
      <h4>{value}</h4>
      <span className="text-success">{subtitle}</span>
    </div>
  )
}


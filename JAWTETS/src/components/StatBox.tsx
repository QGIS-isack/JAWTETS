import './StatBox.css'

interface StatBoxProps {
  number: string
  label: string
  icon: string
}

export default function StatBox({ number, label, icon }: StatBoxProps) {
  return (
    <div className="stat-box">
      <span className="stat-icon">{icon}</span>
      <h3 className="stat-number">{number}</h3>
      <p className="stat-label">{label}</p>
    </div>
  )
}

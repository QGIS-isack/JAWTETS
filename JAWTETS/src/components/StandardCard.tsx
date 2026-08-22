import './StandardCard.css'

interface StandardCardProps {
  icon: string
  title: string
  description: string
}

export default function StandardCard({ icon, title, description }: StandardCardProps) {
  return (
    <div className="standard-card">
      <div className="standard-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

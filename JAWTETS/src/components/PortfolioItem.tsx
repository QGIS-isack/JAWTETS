import './PortfolioItem.css'

interface PortfolioItemProps {
  title: string
  category: string
  description: string
  image?: string
}

export default function PortfolioItem({ title, category, description, image }: PortfolioItemProps) {
  return (
    <div className="portfolio-item">
      {image && <div className="portfolio-image" style={{ backgroundImage: `url(${image})` }} />}
      <div className="portfolio-content">
        <span className="portfolio-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

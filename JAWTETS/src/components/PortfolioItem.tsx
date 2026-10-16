import { useEffect, useState } from 'react'
import './PortfolioItem.css'

interface PortfolioItemProps {
  title: string
  category: string
  description: string
  coverImage: string
  images?: string[]
  reversed?: boolean
}

export default function PortfolioItem({ title, category, description, coverImage, images, reversed = false }: PortfolioItemProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const hasGallery = Boolean(images?.length)

  useEffect(() => {
    if (!images || images.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const intervalId = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % images.length)
    }, 4000)

    return () => window.clearInterval(intervalId)
  }, [images])

  return (
    <article className={`portfolio-item${reversed ? ' portfolio-item-reversed' : ''}${hasGallery ? ' portfolio-item-has-gallery' : ''}`}>
      <div className="portfolio-content">
        <span className="portfolio-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>

      <div className="portfolio-visual">
        <img
          key={hasGallery ? images?.[activeImageIndex] : coverImage}
          className="portfolio-cover"
          src={hasGallery ? images?.[activeImageIndex] : coverImage}
          alt={`${title} project${hasGallery ? ` image ${activeImageIndex + 1}` : ''}`}
        />
        {!hasGallery && <span className="portfolio-project-number">PROJECT</span>}
      </div>
    </article>
  )
}

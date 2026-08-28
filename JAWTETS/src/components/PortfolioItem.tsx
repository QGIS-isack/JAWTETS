import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import './PortfolioItem.css'

interface PortfolioItemProps {
  title: string
  category: string
  description: string
  images?: string[]
}

export default function PortfolioItem({ title, category, description, images }: PortfolioItemProps) {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const hasGallery = Boolean(images?.length)

  useEffect(() => {
    if (!isGalleryOpen) {
      return
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsGalleryOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isGalleryOpen])

  const openGallery = () => {
    if (hasGallery) {
      setActiveImageIndex(0)
      setIsGalleryOpen(true)
    }
  }

  const showPreviousImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex - 1 + images!.length) % images!.length)
  }

  const showNextImage = () => {
    setActiveImageIndex((currentIndex) => (currentIndex + 1) % images!.length)
  }

  return (
    <div
      className={`portfolio-item${hasGallery ? ' portfolio-item-clickable' : ''}`}
      onClick={openGallery}
      onKeyDown={(event) => {
        if (hasGallery && (event.key === 'Enter' || event.key === ' ')) {
          event.preventDefault()
          openGallery()
        }
      }}
      role={hasGallery ? 'button' : undefined}
      tabIndex={hasGallery ? 0 : undefined}
    >
      <div className="portfolio-content">
        <span className="portfolio-category">{category}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        {hasGallery && (
          <button
            className="portfolio-learn-more"
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              openGallery()
            }}
          >
            Learn more <span aria-hidden="true">-&gt;</span>
          </button>
        )}
      </div>

      {isGalleryOpen && images && createPortal(
        <div className="portfolio-gallery-backdrop" onClick={() => setIsGalleryOpen(false)}>
          <div
            className="portfolio-gallery"
            role="dialog"
            aria-modal="true"
            aria-label={`${title} project gallery`}
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="portfolio-gallery-close"
              type="button"
              aria-label="Close project gallery"
              onClick={() => setIsGalleryOpen(false)}
            >
              &times;
            </button>
            <img src={images[activeImageIndex]} alt={`${title} project image ${activeImageIndex + 1}`} />
            <button className="portfolio-gallery-previous" type="button" onClick={showPreviousImage} aria-label="Previous project image">
              &#8249;
            </button>
            <button className="portfolio-gallery-next" type="button" onClick={showNextImage} aria-label="Next project image">
              &#8250;
            </button>
            <div className="portfolio-gallery-thumbnails">
              {images.map((projectImage, imageIndex) => (
                <button
                  className={imageIndex === activeImageIndex ? 'is-active' : ''}
                  type="button"
                  key={projectImage}
                  onClick={() => setActiveImageIndex(imageIndex)}
                  aria-label={`View project image ${imageIndex + 1}`}
                  aria-current={imageIndex === activeImageIndex ? 'true' : undefined}
                >
                  <img src={projectImage} alt="" />
                </button>
              ))}
            </div>
            <p>{activeImageIndex + 1} / {images.length}</p>
          </div>
        </div>,
        document.body
      )}
    </div>
  )
}

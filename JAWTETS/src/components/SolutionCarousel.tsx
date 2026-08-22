import './SolutionCarousel.css'
import boreholesImage from '../assets/boreholes.jpg'
import chemicalImage from '../assets/chemical.jpg'
import solarImage from '../assets/solar.jpg'
import technicalImage from '../assets/technical.jpg'
import waterTreatmentImage from '../assets/water-treatment.avif'

interface Solution {
  id: number
  icon?: string
  iconImage?: string
  title: string
  description: string
}

interface SolutionCarouselProps {
  solutions: Solution[]
}

const solutionImages: Record<string, string> = {
  'Solar Energy': solarImage,
  'Solar Energy Solutions': solarImage,
  'Borehole Drilling': boreholesImage,
  'Borehole Drilling Services': boreholesImage,
  'Chemicals Supply': chemicalImage,
  'Technical & Engineering Services': technicalImage,
}

export default function SolutionCarousel({ solutions }: SolutionCarouselProps) {
  return (
    <div className="solution-carousel">
      <div className="carousel-container">
        {solutions.map(solution => (
          <div key={solution.id} className="carousel-item">
            <div className="solution-details">
              <div className="carousel-icon">
                {solution.iconImage ? (
                  <img src={solution.iconImage} alt="" />
                ) : (
                  solution.icon
                )}
              </div>
              <div>
                <h3>{solution.title}</h3>
                <p>{solution.description}</p>
              </div>
            </div>
            <img
              className="solution-item-image"
              src={solutionImages[solution.title] ?? waterTreatmentImage}
              alt={`${solution.title} service`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

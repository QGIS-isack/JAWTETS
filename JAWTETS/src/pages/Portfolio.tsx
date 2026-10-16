import PortfolioItem from '../components/PortfolioItem'
import './Portfolio.css'
import boreholeImageOne from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.12 PM.jpeg'
import boreholeImageTwo from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.19 PM.jpeg'
import boreholeImageThree from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.20 PM.jpeg'
import boreholeImageFour from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.22 PM.jpeg'
import boreholeImageFive from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.23 PM.jpeg'
import boreholeImageSix from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.24 PM.jpeg'
import boreholeImageSeven from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.25 PM.jpeg'
import waterImage from '../assets/water.jpg'
import solarImage from '../assets/solar.jpg'
import boreholeCoverImage from '../assets/boreholes.jpg'
import chemicalImage from '../assets/chemical.jpg'

interface Project {
  id: number
  title: string
  category: string
  description: string
  coverImage: string
  images?: string[]
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Water Treatment',
      category: 'Water Treatment',
      description: 'Industrial treatment plant and advanced purification systems for commercial and hospital facilities, including filtration, monitoring, and high water-quality standards.',
      coverImage: waterImage
    },
    {
      id: 2,
      title: 'Commercial Solar Array',
      category: 'Solar Solutions',
      description: 'Large-scale solar panel installation for a commercial complex, providing 40% of annual energy requirements.',
      coverImage: solarImage
    },
    {
      id: 3,
      title: 'Borehole Drilling & Water Systems',
      category: 'Borehole Drilling',
      description: 'Deep borehole drilling, well development, and pump installation for community water supply and agricultural irrigation projects.',
      coverImage: boreholeCoverImage,
      images: [
        boreholeImageOne,
        boreholeImageTwo,
        boreholeImageThree,
        boreholeImageFour,
        boreholeImageFive,
        boreholeImageSix,
        boreholeImageSeven
      ]
    },
    {
      id: 4,
      title: 'Residential Solar Installation',
      category: 'Solar Solutions',
      description: 'Off-grid solar system installation for residential property with battery storage solutions.',
      coverImage: solarImage
    },
    {
      id: 5,
      title: 'Chemical Supply Distribution',
      category: 'Chemical Supply',
      description: 'Ongoing supply of water treatment chemicals to multiple municipalities and industrial clients.',
      coverImage: chemicalImage
    }
  ]

  return (
    <div className="portfolio-page">
      <section className="page-header">
        <h1>Our Portfolio</h1>
        <p>Showcase of our successful projects and client solutions</p>
      </section>

      <div className="container">
        <div className="portfolio-grid">
          {projects.map((project, index) => (
            <PortfolioItem
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              coverImage={project.coverImage}
              images={project.images}
              reversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

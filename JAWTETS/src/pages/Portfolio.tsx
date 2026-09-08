import PortfolioItem from '../components/PortfolioItem'
import './Portfolio.css'
import boreholeImageOne from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.12 PM.jpeg'
import boreholeImageTwo from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.19 PM.jpeg'
import boreholeImageThree from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.20 PM.jpeg'
import boreholeImageFour from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.22 PM.jpeg'
import boreholeImageFive from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.23 PM.jpeg'
import boreholeImageSix from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.24 PM.jpeg'
import boreholeImageSeven from '../assets/Portfolio/WhatsApp Image 2026-08-22 at 8.41.25 PM.jpeg'

interface Project {
  id: number
  title: string
  category: string
  description: string
  images?: string[]
}

export default function Portfolio() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Industrial Water Treatment Plant',
      category: 'Water Treatment',
      description: 'Complete water treatment system installation for a major industrial facility, including filtration, purification, and monitoring systems.'
    },
    {
      id: 2,
      title: 'Commercial Solar Array',
      category: 'Solar Solutions',
      description: 'Large-scale solar panel installation for a commercial complex, providing 40% of annual energy requirements.'
    },
    {
      id: 3,
      title: 'Deep Borehole Project',
      category: 'Borehole Drilling',
      description: 'Successful drilling and development of a deep water well serving a community of residents.',
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
      title: 'Water Purification System',
      category: 'Water Treatment',
      description: 'Advanced purification system for a hospital facility, meeting strict medical water quality standards.'
    },
    {
      id: 5,
      title: 'Residential Solar Installation',
      category: 'Solar Solutions',
      description: 'Off-grid solar system installation for residential property with battery storage solutions.'
    },
    {
      id: 6,
      title: 'Chemical Supply Distribution',
      category: 'Chemical Supply',
      description: 'Ongoing supply of water treatment chemicals to multiple municipalities and industrial clients.'
    },
    {
      id: 7,
      title: 'Agricultural Borehole System',
      category: 'Borehole Drilling',
      description: 'Multiple borehole drilling and pump installation for agricultural irrigation projects.'
    },
    {
      id: 8,
      title: 'Eco-Friendly Treatment Solution',
      category: 'Water Treatment',
      description: 'Environmentally sustainable water treatment system using advanced filtration technology.'
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
          {projects.map(project => (
            <PortfolioItem
              key={project.id}
              title={project.title}
              category={project.category}
              description={project.description}
              images={project.images}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

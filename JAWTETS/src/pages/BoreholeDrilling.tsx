import { useEffect, useState } from 'react'
import './BoreholeDrilling.css'
import boreholesImage from '../assets/boreholes.jpg'
import boreholeSolutionImageTwo from '../assets/borehole_solution/2.jpg'
import boreholeSolutionImageThree from '../assets/borehole_solution/3.jpg'
import boreholeSolutionImageFour from '../assets/borehole_solution/4.jpg'

const boreholeSolutionImages = [
  boreholeSolutionImageTwo,
  boreholeSolutionImageThree,
  boreholeSolutionImageFour,
]
const boreholeSolutionSlideDuration = 9000

export default function BoreholeDrilling() {
  const [activeImageIndex, setActiveImageIndex] = useState(0)

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setActiveImageIndex((currentIndex) => (currentIndex + 1) % boreholeSolutionImages.length)
    }, boreholeSolutionSlideDuration)

    return () => window.clearInterval(imageTimer)
  }, [])

  const services = [
    {
      icon: '🧭',
      title: 'GEOPHYSICAL AND HYDROLOGICAL SURVEY',
      description: 'Site surveys to identify suitable groundwater sources and guide borehole placement'
    },
    {
      icon: '⛏️',
      title: 'BOREHOLE DRILLING',
      description: 'Professional drilling to develop reliable water sources for various applications'
    },
    {
      icon: '🚰',
      title: 'CASING & SCREEN INSTALLATION',
      description: 'Installation of durable casings and screens for long-term well performance'
    },
    {
      icon: '💧',
      title: 'PUMP INSTALLATION',
      description: 'Expert installation of high-quality pumps for efficient water extraction'
    },
    {
      icon: '🧪',
      title: 'WATER QUALITY TESTING',
      description: 'Comprehensive water testing to ensure quality and safety standards'
    },
    {
      icon: '🔧',
      title: 'MAINTENANCE & REHABILITATION',
      description: 'Regular maintenance and rehabilitation services for long-term well reliability'
    }
  ]

  const benefits = [
    { icon: '💧', title: 'RELIABLE WATER SUPPLY', description: 'Secure water access for communities and operations' },
    { icon: '🛡️', title: 'SAFE & SUSTAINABLE', description: 'Environmentally responsible water sourcing' },
    { icon: '🏗️', title: 'INFRASTRUCTURE', description: 'Long-lasting borehole systems built to last' },
    { icon: '⚙️', title: 'OPERATIONAL', description: 'Efficient systems engineered for performance' },
    { icon: '📋', title: 'COMPLIANCE', description: 'Meet regulatory and quality standards' }
  ]

  return (
    <div className="borehole-drilling-page">
      <section className="borehole-solution-slideshow" aria-label="Borehole drilling solutions">
        {boreholeSolutionImages.map((image, index) => (
          <img
            key={image}
            className={`borehole-solution-slide${index === activeImageIndex ? ' is-active' : ''}`}
            src={image}
            alt="JAWTETS borehole drilling solution"
            aria-hidden={index !== activeImageIndex}
          />
        ))}
      </section>

      <section className="page-header">
        <h1>Borehole Drilling Services</h1>
        <p>Professional drilling services for domestic, agricultural, industrial, and commercial applications</p>
      </section>

      <div className="container">
        {/* Borehole Intro */}
        <section className="borehole-intro">
          <p>
            We provide professional and reliable borehole drilling services for domestic, agricultural, industrial, and commercial applications. Our expertise ensures access to sustainable groundwater solutions.
          </p>
        </section>

        {/* Borehole Services */}
        <section
          className="borehole-services"
          style={{ backgroundImage: `url(${boreholesImage})` }}
        >
          <h2>Our Borehole Drilling Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Applications */}
        <section className="borehole-applications">
          <h2>Applications</h2>
          <div className="applications-grid">
            <div className="app-card">
              <h3>Domestic</h3>
              <p>Reliable water supply for homes and residential areas</p>
            </div>
            <div className="app-card">
              <h3>Agricultural</h3>
              <p>Irrigation solutions for farms and agricultural operations</p>
            </div>
            <div className="app-card">
              <h3>Industrial</h3>
              <p>Water supply for manufacturing and industrial processes</p>
            </div>
            <div className="app-card">
              <h3>Commercial</h3>
              <p>Water solutions for businesses and commercial facilities</p>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="borehole-benefits">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-item">
                <span className="benefit-icon">{benefit.icon}</span>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="borehole-why">
          <h2>Why Choose Our Drilling Services?</h2>
          <ul className="why-list">
            <li>Modern, well-maintained drilling equipment</li>
            <li>Professional and experienced drilling teams</li>
            <li>Comprehensive site assessment and analysis</li>
            <li>Quality assurance testing and compliance</li>
            <li>Ongoing maintenance and emergency services</li>
          </ul>
        </section>

        {/* Mission */}
        <section className="borehole-mission">
          <div className="mission-box">
            <p>
              <strong>Our commitment:</strong> We are dedicated to delivering reliable groundwater access through professional drilling services that ensure sustainable water supply and support community and industrial development.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

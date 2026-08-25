import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import boreholeIcon from '../assets/borehole-icon.jpg'
import StatBox from '../components/StatBox'
import SolutionCarousel from '../components/SolutionCarousel'
import chemicalsIcon from '../assets/chemicals-icon.avif'
import solarIcon from '../assets/solar-icon.jpg'
import technicalIcon from '../assets/technical-icon.jpg'
import waterIcon from '../assets/water-icon.jpg'
import waterImage from '../assets/water.jpg'
import jawtetsLogo from '../assets/Logo.png'
import heroImageTwoAdded from '../assets/image/2.jpg'
import heroImageThreeAdded from '../assets/image/3.jpg'
import heroImageFourAdded from '../assets/image/4.jpg'

const heroImages = [
  heroImageTwoAdded,
  heroImageThreeAdded,
  heroImageFourAdded,
]

const solutions = [
  { id: 1, iconImage: waterIcon, title: 'Water Treatment Solutions', description: 'Advanced and customized water treatment systems for clean, safe, and sustainable water.' },
  { id: 2, iconImage: solarIcon, title: 'Solar Energy Solutions', description: 'Reliable solar energy systems that provide clean, renewable, and cost-effective power.' },
  { id: 3, iconImage: boreholeIcon, title: 'Borehole Drilling Services', description: 'Professional borehole drilling services for domestic, agricultural, and industrial use.' },
  { id: 4, iconImage: chemicalsIcon, title: 'Chemicals Supply', description: 'Supply of high-quality chemicals for water treatment, industrial, and other applications.' },
  { id: 5, iconImage: technicalIcon, title: 'Technical & Engineering Services', description: 'Expert technical support, system design, installation, and maintenance for long-term operational efficiency.' },
]

export default function Home() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setHeroImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length)
    }, 5000)

    return () => window.clearInterval(imageTimer)
  }, [])

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img
            key={heroImageIndex}
            className="hero-image"
            src={heroImages[heroImageIndex]}
            alt="JAWTETS water and energy service"
          />
          <div className="hero-overlay" />
          <div className="hero-copy">
            <h1>
              Trusted Water Treatment, Energy &amp; Technical Services
            </h1>
            <p>Reliable solutions for businesses and communities</p>
            <div className="hero-divider" aria-hidden="true">
              <span />
              <strong></strong>
              <span />
            </div>
          </div>
        </div>
      </section>

      <div
      >
        <section
          className="home-about-section"
          style={{ backgroundImage: `url(${waterImage})` }}
        >
        <div className="container">
          <div className="home-about-layout">
            <div className="home-about-brand">
              <img className="home-about-logo" src={jawtetsLogo} alt="JAWTETS logo" />
              <h3>JAWTETS</h3>
            </div>
            <div className="home-about-copy">
              <h2>About JAWTETS</h2>
              <p>
                JAWTETS provides reliable water treatment, renewable energy, and technical
                services for businesses and communities. With over 20 years of experience,
                we deliver practical, sustainable solutions tailored to every client&apos;s needs.
              </p>
              <p>
                Our experienced team combines technical expertise with practical innovation
                to deliver quality solutions that support long-term performance and growth.
              </p>
            </div>
          </div>
        </div>
        </section>

        {/* Solution Showcase */}
        <section className="solution-section">
        <div className="container">
          <h2>SOLUTIONS WE PROVIDE</h2>
          <p className="section-subtitle">We provide reliable water treatment, energy, and technical solutions designed to meet the needs of our clients across different industries.</p>
          <SolutionCarousel solutions={solutions} />
        </div>
        </section>

        {/* Mission, Vision & Values */}
        <section
          className="mvv-section"
          style={{ backgroundImage: `url(${waterImage})` }}
        >
        <div className="container">
          <h2>MISSION, VISION & VALUES</h2>
          <p className="section-subtitle">Our commitment to excellence drives everything we do</p>
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">🎯</div>
              <h3>Mission</h3>
              <p>Deliver reliable water treatment and energy solutions that reduce operational costs while ensuring 99.9% system uptime.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">👁️</div>
              <h3>Vision</h3>
              <p>Lead the region's water treatment industry with innovative, cost-effective and sustainable solutions.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">💎</div>
              <h3>Values</h3>
              <p>Quality, reliability, commitment, Trust and discipline</p>
            </div>
          </div>
        </div>
        </section>

        {/* Impact Section */}
        <section className="impact-section">
        <div className="container">
          <h2>Our Impact in Numbers</h2>
          <p className="section-subtitle">Delivering measurable results across the region</p>
          <div className="impact-grid">
            <StatBox number="50+" label="Projects Completed" icon="✓" />
            <StatBox number="20+" label="Years Experience" icon="📅" />
            <StatBox number="200+" label="Happy Clients" icon="😊" />
            <StatBox number="99.9%" label="Uptime Average" icon="⚙️" />
          </div>
        </div>
        </section>

        {/* Partners Section */}
        <section className="partners-section">
        <div className="container">
          <h2>Strategic Partnerships</h2>
          <p className="section-subtitle">Partnering with industry leaders for superior solutions</p>
          <div className="partners-grid">
            <div className="partner-logo">Dow FilmTec</div>
            <div className="partner-logo">Pentair</div>
            <div className="partner-logo">Danfoss</div>
            <div className="partner-logo">Toray</div>
            <div className="partner-logo">Grundfos</div>
            <div className="partner-logo">SIEMENS</div>
          </div>
        </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta-section">
        <div className="container">
          <h2>Ready to Transform Your Operations?</h2>
          <p>Get personalized recommendations and discover how we can optimize your water and energy solutions</p>
          <div className="final-cta-features">
            <div className="cta-feature">
              <span className="feature-icon">📊</span>
              <h4>Savings Report</h4>
              <p>Detailed cost reduction analysis</p>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">👨‍💼</span>
              <h4>Expert Advice</h4>
              <p>Tailored solutions for your needs</p>
            </div>
            <div className="cta-feature">
              <span className="feature-icon">🎯</span>
              <h4>Strategic Plan</h4>
              <p>Actionable optimization insights</p>
            </div>
          </div>
          <div className="final-cta-actions">
            <Link to="/contact" className="cta-button-large">Schedule Consultation</Link>
            <Link to="/contact" className="cta-button-secondary-large">Call Us Now</Link>
          </div>
          <p className="cta-disclaimer">No commitment required • 24/7 Support Available • Expert Consultation</p>
        </div>
        </section>
      </div>
    </div>
  )
}

import { Link } from 'react-router-dom'
import './Home.css'
import boreholeIcon from '../assets/borehole-icon.jpg'
import StandardCard from '../components/StandardCard'
import StatBox from '../components/StatBox'
import SolutionCarousel from '../components/SolutionCarousel'
import Testimonial from '../components/Testimonial'
import chemicalsIcon from '../assets/chemicals-icon.avif'
import expertImage from '../assets/expert.avif'
import solarIcon from '../assets/solar-icon.jpg'
import technicalIcon from '../assets/technical-icon.jpg'
import waterIcon from '../assets/water-icon.jpg'
import waterImage from '../assets/water.jpg'

const solutions = [
  { id: 1, iconImage: waterIcon, title: 'Water Treatment Solutions', description: 'Advanced and customized water treatment systems for clean, safe, and sustainable water.' },
  { id: 2, iconImage: solarIcon, title: 'Solar Energy Solutions', description: 'Reliable solar energy systems that provide clean, renewable, and cost-effective power.' },
  { id: 3, iconImage: boreholeIcon, title: 'Borehole Drilling Services', description: 'Professional borehole drilling services for domestic, agricultural, and industrial use.' },
  { id: 4, iconImage: chemicalsIcon, title: 'Chemicals Supply', description: 'Supply of high-quality chemicals for water treatment, industrial, and other applications.' },
  { id: 5, iconImage: technicalIcon, title: 'Technical & Engineering Services', description: 'Expert technical support, system design, installation, and maintenance for long-term operational efficiency.' },
]

const standards = [
  { icon: '✓', title: 'Quality', description: 'High standards in every solution we deliver.' },
  { icon: '⚙️', title: 'Reliability', description: 'Systems designed for consistent performance.' },
  { icon: '💡', title: 'Innovation', description: 'Practical technology for changing needs.' },
  { icon: '♻️', title: 'Sustainability', description: 'Solutions that protect resources and reduce waste.' },
  { icon: '🤝', title: 'Partnership', description: 'Long-term support for every client.' },
  { icon: '🛠️', title: 'Expertise', description: 'Experienced technical service from start to finish.' },
]

const testimonials = [
  { name: 'Operations Manager', position: 'Operations Manager', company: 'Industrial Client', quote: 'JAWTETS delivered a dependable solution and responsive support.', metric: '99.9% uptime', category: 'Water Treatment' },
  { name: 'Facilities Lead', position: 'Facilities Lead', company: 'Commercial Client', quote: 'The team understood our requirements and completed the work professionally.', metric: 'Reliable service', category: 'Technical Services' },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <img className="hero-image" src={waterImage} alt="Clean water flowing through a treatment system" />
          <h1>
            <span className="hero-title-water">Pure Water</span>{' '}
            <span className="hero-title-energy">Smart Energy</span>{' '}
            <span className="hero-title-reliable">Reliable Solutions</span>
          </h1>
          <div className="hero-actions">
            <Link to="/contact" className="cta-button">Get Assessment</Link>
            <Link to="/about" className="cta-button-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <div
        /*className="water-treatment-background"
        style={{ backgroundImage: `url(${oneWaterImage})` }}*/
      >
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

        {/* Core Standards */}
        <section
          className="standards-section"
          style={{ backgroundImage: `url(${expertImage})` }}
        >
        <div className="container">
          <h2>Excellence in Every Solution</h2>
          <p className="section-subtitle">Our six core standards guide everything we deliver</p>
          <div className="standards-grid">
            {standards.map((standard, idx) => (
              <StandardCard
                key={idx}
                icon={standard.icon}
                title={standard.title}
                description={standard.description}
              />
            ))}
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

        {/* Services Detail */}
        <section className="services-detail-section">
        <div className="container">
          <h2>Complete Water Treatment & Energy Services</h2>
          <p className="section-subtitle">From reverse osmosis systems to solar solutions - comprehensive coverage</p>
          <div className="services-detail-grid">
            <div className="service-detail-card">
              <div className="service-detail-icon">💧</div>
              <h3>Water Treatment Systems</h3>
              <p>RO, UF, Pretreatment and Effluent Treatment Plants for industrial and residential applications.</p>
              <ul>
                <li>Reverse Osmosis Systems</li>
                <li>Ultrafiltration Plants</li>
                <li>Pretreatment Solutions</li>
              </ul>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">🔧</div>
              <h3>Engineering & Installation</h3>
              <p>Complete system design, installation, commissioning with 20+ years of proven expertise.</p>
              <ul>
                <li>System Design</li>
                <li>Professional Installation</li>
                <li>Commissioning & Testing</li>
              </ul>
            </div>
            <div className="service-detail-card">
              <div className="service-detail-icon">🧪</div>
              <h3>Chemicals & Maintenance</h3>
              <p>Quality chemical supplies, preventive maintenance, optimization and 24/7 technical support.</p>
              <ul>
                <li>Treatment Chemicals</li>
                <li>Preventive Maintenance</li>
                <li>24/7 Support</li>
              </ul>
            </div>
          </div>
        </div>
        </section>

        {/* Testimonials Section */}
        <section className="testimonials-section">
        <div className="container">
          <h2>Trusted by Industry Leaders</h2>
          <p className="section-subtitle">Real results from clients across different sectors</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <Testimonial
                key={idx}
                name={testimonial.name}
                position={testimonial.position}
                company={testimonial.company}
                quote={testimonial.quote}
                metric={testimonial.metric}
                category={testimonial.category}
              />
            ))}
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

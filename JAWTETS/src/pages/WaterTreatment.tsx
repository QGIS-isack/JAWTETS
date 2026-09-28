import './WaterTreatment.css'
import treatmentIcon from '../assets/Treat-icon.avif'
import treatmentVideo from '../assets/Portfolio/client video.mp4'

export default function WaterTreatment() {
  const solutions = [
    {
      icon: '🏠',
      level: 'DOMESTIC SOLUTIONS',
      description: 'For homes and residential use',
      features: [
        'Water filtration systems to remove sediments and impurities',
        'Reverse osmosis (RO) systems for safe drinking water',
        'UV and chlorination systems for disinfection'
      ]
    },
    {
      icon: '🏢',
      level: 'COMMERCIAL SOLUTIONS',
      description: 'For businesses and offices',
      features: [
        'Multi-stage filtration systems for consistent water quality',
        'Medium-scale RO systems for purified water supply',
        'Industrial cooling systems for climate control',
        'Customized solutions to meet specific requirements'
      ]
    },
    {
      icon: '🏭',
      level: 'INDUSTRIAL SOLUTIONS',
      description: 'For factories and production facilities',
      features: [
        'High-capacity RO systems for large-scale production',
        'Process and boiler water treatment solutions',
        'Ultrafiltration and ion exchange technologies',
        'Wastewater treatment and recycling systems',
        'Specialized treatment for specific industrial needs'
      ]
    }
  ]

  const benefits = [
    { icon: '💧', title: 'Improved Water Quality & Safety', description: 'Pure, clean water for all applications' },
    { icon: '✅', title: 'Compliance with Standards & Regulations', description: 'Meet all safety and quality requirements' },
    { icon: '💰', title: 'Cost-Effective & Cost-Efficient Solutions', description: 'Optimize operational expenses' },
    { icon: '🌱', title: 'Sustainable Water Management', description: 'Environment-friendly operations' },
    { icon: '⚙️', title: 'Enhanced Operational Efficiency & Longevity', description: 'Improved system performance and lifespan' }
  ]

  return (
    <div className="water-treatment-page">
      <section className="page-header">
        <h1>Water Treatment Solutions</h1>
        <p>Complete solutions for domestic, commercial, and industrial water treatment</p>
      </section>

      <div className="container">
        {/* Hero Description */}
        <section className="water-intro">
          <p>
            We provide end to end water treatment solutions tailored for domestic, commercial, and industrial application ensuring clean, safe, and sustainable water across all levels.
          </p>
        </section>

        {/* Water Treatment Levels */}
        <section
          className="treatment-levels"
          style={{ backgroundImage: `url(${treatmentIcon})` }}
        >
          <h2>Our Water Treatment Levels</h2>
          <div className="levels-grid">
            {solutions.map((solution, idx) => (
              <div key={idx} className="level-card">
                <div className="level-icon">{solution.icon}</div>
                <h3>{solution.level}</h3>
                <p className="level-description">{solution.description}</p>
                <ul className="level-features">
                  {solution.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="water-benefits">
          <h2>Key Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="benefit-card">
                <span className="benefit-icon">{benefit.icon}</span>
                <h4>{benefit.title}</h4>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Water Treatment Matters */}
        <section className="water-importance">
          <h2>Why Water Treatment Matters</h2>
          <p>
            Access to clean, safe water is fundamental to health, productivity, and sustainability. Our advanced treatment systems ensure you have reliable water quality while reducing operational costs and environmental impact.
          </p>
          <div className="importance-highlights">
            <div className="highlight-box">
              <strong>Health & Safety</strong>
              <p>Remove contaminants and ensure water safety</p>
            </div>
            <div className="highlight-box">
              <strong>Operational Efficiency</strong>
              <p>Maintain equipment performance and longevity</p>
            </div>
            <div className="highlight-box">
              <strong>Cost Savings</strong>
              <p>Reduce energy consumption and maintenance costs</p>
            </div>
            <div className="highlight-box">
              <strong>Environmental Responsibility</strong>
              <p>Sustainable water management practices</p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="water-mission">
          <div className="mission-box">
            <p>
              <strong>Our commitment:</strong> We are dedicated to delivering high quality water treatment solutions that support health, efficiency, and sustainability while building trust with every client we serve.
            </p>
          </div>
        </section>

        {/* Water Treatment Video */}
        <section className="water-video" aria-label="Water treatment video">
          <h2>Testimony from One of Our Customers</h2>
          <video className="water-video-player" controls playsInline preload="metadata">
            <source src={treatmentVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </section>
      </div>
    </div>
  )
}

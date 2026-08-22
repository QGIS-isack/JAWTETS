import './SolarEnergy.css'
import solarImage from '../assets/solar.jpg'

export default function SolarEnergy() {
  const services = [
    {
      icon: '☀️',
      title: 'SOLAR SYSTEM DESIGN',
      description: 'Customized solar system designs tailored to your energy needs and site conditions'
    },
    {
      icon: '🔧',
      title: 'SUPPLY & INSTALLATION',
      description: 'High-quality solar equipment supplied and professionally installed for optimal performance'
    },
    {
      icon: '🔋',
      title: 'ENERGY STORAGE SOLUTIONS',
      description: 'Reliable battery storage systems that ensure uninterrupted power supply'
    },
    {
      icon: '⚙️',
      title: 'OPERATION & MAINTENANCE',
      description: 'Ongoing maintenance and support services to ensure maximum system efficiency'
    },
    {
      icon: '📊',
      title: 'MONITORING & PERFORMANCE',
      description: 'Advanced monitoring solutions to track performance and optimize energy output'
    }
  ]

  const benefits = [
    {
      icon: '⚡',
      title: 'COST SAVINGS',
      description: 'Reduce energy costs and enjoy long-term savings on electricity bills'
    },
    {
      icon: '🌿',
      title: 'CLEAN & RENEWABLE',
      description: 'Generate clean energy and reduce your carbon footprint'
    },
    {
      icon: '🛡️',
      title: 'RELIABLE POWER',
      description: 'Enjoy a consistent and reliable power supply even in remote areas'
    },
    {
      icon: '💚',
      title: 'HIGH RETURN ON INVESTMENT',
      description: 'Benefit from government incentives and a fast return on investments'
    }
  ]

  return (
    <div className="solar-energy-page">
      <section className="page-header">
        <h1>Solar Energy Solutions</h1>
        <p>Clean, renewable, and cost-effective solar power for homes, businesses, and industries</p>
      </section>

      <div className="container">
        {/* Solar Intro */}
        <section className="solar-intro">
          <p>
            We deliver reliable and cost-effective solar energy solutions that harness the power of the sun to provide clean, renewable, and sustainable energy for homes, businesses, and industries.
          </p>
        </section>

        {/* Solar Services */}
        <section
          className="solar-services"
          style={{ backgroundImage: `url(${solarImage})` }}
        >
          <h2>Our Solar Energy Services</h2>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div key={idx} className="service-item">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="solar-benefits">
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

        {/* Solar Technology Info */}
        <section className="solar-technology">
          <h2>Why Choose Solar Energy?</h2>
          <div className="tech-content">
            <p>
              Solar energy is one of the most sustainable and cost-effective renewable energy sources available. Our solar solutions are designed to:
            </p>
            <ul className="tech-list">
              <li>Reduce your dependence on traditional energy sources</li>
              <li>Lower your energy bills significantly over time</li>
              <li>Increase energy independence and resilience</li>
              <li>Support environmental sustainability goals</li>
              <li>Qualify for government incentives and tax benefits</li>
              <li>Provide reliable power in off-grid locations</li>
            </ul>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="solar-mission">
          <div className="mission-box">
            <p>
              <strong>Our mission:</strong> To empower our clients with sustainable and affordable solar energy solutions that drive progress and protect our planet for future generations.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

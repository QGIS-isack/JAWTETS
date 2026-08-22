import { Link } from 'react-router-dom'
import './Services.css'

export default function Services() {
  const services = [
    {
      id: 1,
      icon: '💧',
      title: 'Water Treatment',
      description: 'Comprehensive water treatment solutions',
      route: '/water-treatment',
      features: [
        'Filtration systems',
        'Purification technology',
        'Water testing and analysis',
        'Maintenance and support',
        'Residential and commercial solutions',
        'Environmentally friendly processes'
      ]
    },
    {
      id: 2,
      icon: '☀️',
      title: 'Solar Solutions',
      description: 'Renewable energy systems',
      route: '/solar-energy',
      features: [
        'Solar panel installation',
        'System design and consultation',
        'Energy efficiency analysis',
        'Maintenance services',
        'Grid-tied and off-grid systems',
        'Commercial and residential projects'
      ]
    },
    {
      id: 3,
      icon: '⛏️',
      title: 'Borehole Drilling',
      description: 'Professional drilling services',
      route: '/borehole-drilling',
      features: [
        'Deep well drilling',
        'Site assessment',
        'Modern drilling equipment',
        'Quality assurance testing',
        'Emergency services',
        'Nationwide coverage'
      ]
    },
    {
      id: 4,
      icon: '🧪',
      title: 'Chemical Supply',
      description: 'Industrial and treatment chemicals',
      route: '/chemicals-supply',
      features: [
        'Water treatment chemicals',
        'Industrial supplies',
        'Quality testing',
        'Bulk ordering',
        'Safety documentation',
        'Expert consultation'
      ]
    }
  ]

  return (
    <div className="services-page">
      <section className="page-header">
        <h1>Our Services</h1>
        <p>Complete solutions for water treatment, energy, and technical needs</p>
      </section>

      <div className="container">
        <div className="services-list">
          {services.map(service => (
            <Link key={service.id} to={service.route} className="service-detail-link">
              <div className="service-detail">
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="features-list">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>✓ {feature}</li>
                  ))}
                </ul>
                <div className="learn-more">Learn More →</div>
              </div>
            </Link>
          ))}
        </div>

        <section className="why-choose-us">
          <h2>Why Choose Our Services?</h2>
          <div className="reasons-grid">
            <div className="reason">
              <h3>Expert Team</h3>
              <p>Highly trained professionals with years of experience</p>
            </div>
            <div className="reason">
              <h3>Quality Assurance</h3>
              <p>Strict quality control and testing on all projects</p>
            </div>
            <div className="reason">
              <h3>Modern Equipment</h3>
              <p>Latest technology and equipment for best results</p>
            </div>
            <div className="reason">
              <h3>Competitive Pricing</h3>
              <p>Transparent pricing with no hidden costs</p>
            </div>
            <div className="reason">
              <h3>On-Time Delivery</h3>
              <p>Projects completed on schedule and budget</p>
            </div>
            <div className="reason">
              <h3>Support & Maintenance</h3>
              <p>Ongoing support and maintenance services available</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

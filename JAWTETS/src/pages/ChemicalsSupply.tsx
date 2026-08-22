import './ChemicalsSupply.css'

export default function ChemicalsSupply() {
  const categories = [
    {
      icon: '💧',
      title: 'WATER TREATMENT CHEMICALS',
      description: 'Coagulants, flocculants, disinfectants, pH adjusters, scale inhibitors, and other specialty chemicals for efficient water treatment processes'
    },
    {
      icon: '🏭',
      title: 'INDUSTRIAL CHEMICALS',
      description: 'High-quality chemicals for various industrial applications, ensuring optimal performance and process efficiency'
    },
    {
      icon: '🧹',
      title: 'CLEANING & MAINTENANCE CHEMICALS',
      description: 'Effective cleaning chemicals and solutions to maintain equipment performance and extend operational life'
    },
    {
      icon: '⚗️',
      title: 'SPECIALTY CHEMICALS',
      description: 'Customized chemical solutions tailored to meet specific requirements and industry standards'
    },
    {
      icon: '🚚',
      title: 'RELIABLE SUPPLY & SUPPORT',
      description: 'Consistent supply, proper handling, safe delivery, and technical support for all chemical products'
    }
  ]

  const benefits = [
    { icon: '⭐', title: 'HIGH QUALITY', description: 'Premium quality chemicals that ensure reliable and effective performance' },
    { icon: '⚙️', title: 'WIDE RANGE', description: 'Comprehensive range of chemicals for diverse applications and industries' },
    { icon: '💰', title: 'COST-EFFECTIVE', description: 'Competitive pricing and efficient solutions that help optimize operational costs' },
    { icon: '✅', title: 'SAFE & COMPLIANT', description: 'Products that meet safety standards and regulatory requirements' },
    { icon: '📞', title: 'TECHNICAL SUPPORT', description: 'Expert technical assistance to help you select the right chemical solutions' }
  ]

  return (
    <div className="chemicals-supply-page">
      <section className="page-header">
        <h1>Chemicals Supply</h1>
        <p>Premium quality chemicals for water treatment, industrial, and maintenance applications</p>
      </section>

      <div className="container">
        {/* Chemicals Intro */}
        <section className="chemicals-intro">
          <p>
            We supply a wide range of high-quality chemicals for water treatment, industrial, and other applications. Our products are sourced from trusted manufacturers and meet strict quality and safety standards to ensure reliable performance.
          </p>
        </section>

        {/* Chemical Categories */}
        <section className="chemicals-categories">
          <h2>Our Chemicals Supply</h2>
          <div className="categories-grid">
            {categories.map((category, idx) => (
              <div key={idx} className="category-card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Benefits */}
        <section className="chemicals-benefits">
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

        {/* Quality Assurance */}
        <section className="chemicals-quality">
          <h2>Quality Assurance</h2>
          <div className="quality-content">
            <p>All our chemicals undergo strict quality testing and compliance verification to ensure:</p>
            <ul className="quality-list">
              <li>High purity and consistent performance</li>
              <li>Safety and regulatory compliance</li>
              <li>Proper packaging and safe handling</li>
              <li>Reliable supply chain management</li>
              <li>Expert technical guidance and support</li>
            </ul>
          </div>
        </section>

        {/* Why Choose */}
        <section className="chemicals-why">
          <h2>Why Choose Our Chemicals Supply?</h2>
          <div className="why-grid">
            <div className="why-box">
              <h4>Trusted Partners</h4>
              <p>Partnering with leading chemical manufacturers</p>
            </div>
            <div className="why-box">
              <h4>Expert Knowledge</h4>
              <p>Technical expertise to recommend right solutions</p>
            </div>
            <div className="why-box">
              <h4>Reliable Delivery</h4>
              <p>Consistent supply and timely delivery</p>
            </div>
            <div className="why-box">
              <h4>24/7 Support</h4>
              <p>Always available to answer questions and provide support</p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="chemicals-mission">
          <div className="mission-box">
            <p>
              <strong>Our commitment:</strong> We are dedicated to providing high-quality, safe, and effective chemical solutions that support your operations and drive sustainable results.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

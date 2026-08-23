import './WhyChooseUs.css'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: '📅',
      title: '20+ Years of Experience',
      description: 'Two decades of proven expertise delivering exceptional water, energy, and technical solutions across diverse sectors.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Highly trained engineers, technicians, and specialists with deep industry knowledge and certification.'
    },
    {
      icon: '🏆',
      title: 'Proven Track Record',
      description: '50+ completed projects with 99.9% uptime guarantee and 100% client satisfaction rate.'
    },
    {
      icon: '⚙️',
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment and cutting-edge solutions leveraging the latest innovations.'
    },
    {
      icon: '💰',
      title: 'Cost-Effective Solutions',
      description: 'Optimize operational expenses while delivering superior quality and performance.'
    },
    {
      icon: '📞',
      title: '24/7 Support',
      description: 'Round-the-clock technical support, emergency services, and maintenance available anytime.'
    },
    {
      icon: '✅',
      title: 'Quality Assurance',
      description: 'Rigorous testing and compliance verification at every stage of project delivery.'
    },
    {
      icon: '🌱',
      title: 'Sustainability Focus',
      description: 'Environmentally responsible solutions that support long-term sustainability goals.'
    },
    {
      icon: '🎯',
      title: 'Customized Solutions',
      description: 'Tailored systems designed specifically for your unique needs and requirements.'
    },
    {
      icon: '📋',
      title: 'Full Compliance',
      description: 'All solutions meet international standards and regulatory requirements.'
    },
    {
      icon: '🤝',
      title: 'Partnership Approach',
      description: 'We become an extension of your team, committed to your long-term success.'
    },
    {
      icon: '🚀',
      title: 'Innovation Leader',
      description: 'Continuously exploring new technologies and methodologies to improve performance.'
    }
  ]

  return (
    <div className="why-choose-us-page">
      <section className="page-header">
        <h1>Why Choose JAWTETS?</h1>
        <p>The trusted partner for water treatment, energy solutions, and technical services</p>
      </section>

      <div className="container">
        {/* Intro */}
        <section className="why-intro">
          <p>
            With over 20 years of industry expertise, JAWTETS has established itself as the preferred partner for comprehensive water treatment, renewable energy, and technical solutions. Here's why leading organizations trust us:
          </p>
        </section>

        {/* Reasons Grid */}
        <section className="reasons-section">
          <h2>12 Reasons to Partner With Us</h2>
          <div className="reasons-grid">
            {reasons.map((reason, idx) => (
              <div key={idx} className="reason-card">
                <span className="reason-icon">{reason.icon}</span>
                <h3>{reason.title}</h3>
                <p>{reason.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Client Testimonials Summary */}
        <section className="testimonials-summary">
          <h2>What Our Clients Say</h2>
          <div className="quote-cards">
            <div className="quote-card">
              <p className="quote-text">
                "JAWTETS reduced our operational costs by 25% while ensuring 100% reliability. Their team is professional and responsive."
              </p>
              <p className="quote-author">— Director, Manufacturing Company</p>
            </div>
            <div className="quote-card">
              <p className="quote-text">
                "The quality of service and technical expertise is exceptional. We depend on JAWTETS for our critical water and energy needs."
              </p>
              <p className="quote-author">— Operations Manager, Healthcare Facility</p>
            </div>
            <div className="quote-card">
              <p className="quote-text">
                "Best investment we've made. The solar system has exceeded expectations and their support team is always available."
              </p>
              <p className="quote-author">— Business Owner, Commercial Enterprise</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="why-cta">
          <h2>Ready to Experience the Difference?</h2>
          <p>
            Join hundreds of satisfied clients who have transformed their operations with JAWTETS solutions.
          </p>
          <a href="/contact" className="cta-button">Schedule Your Consultation</a>
        </section>

        {/* Final Statement */}
        <section className="final-statement">
          <div className="statement-box">
            <h3>Our Promise</h3>
            <p>
              We don't just provide solutions—we build partnerships. Your success is our success, and we're committed to exceeding your expectations at every turn.
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

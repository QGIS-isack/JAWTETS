import './Approach.css'

export default function Approach() {
  const steps = [
    {
      number: '01',
      title: 'Assessment & Consultation',
      description: 'We begin by understanding your specific needs, challenges, and goals through comprehensive consultation and site assessment.'
    },
    {
      number: '02',
      title: 'Customized Design',
      description: 'Our expert team designs tailored solutions that align with your requirements, budget, and operational objectives.'
    },
    {
      number: '03',
      title: 'Professional Installation',
      description: 'We execute installation with precision using quality materials and proven methodologies to ensure optimal performance.'
    },
    {
      number: '04',
      title: 'Testing & Commissioning',
      description: 'Comprehensive testing and commissioning ensure your system meets all standards and performs as designed.'
    },
    {
      number: '05',
      title: 'Training & Handover',
      description: 'We provide complete training to your team and ensure smooth transition to operational management.'
    },
    {
      number: '06',
      title: 'Ongoing Support',
      description: '24/7 technical support, preventive maintenance, and optimization services for long-term success.'
    }
  ]

  const principles = [
    {
      icon: '🎯',
      title: 'Client-Centric',
      description: 'Your success is our priority. We tailor every solution to your specific needs.'
    },
    {
      icon: '🏆',
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in every aspect of our work.'
    },
    {
      icon: '🔍',
      title: 'Attention to Detail',
      description: 'Precision and thoroughness in design, installation, and support.'
    },
    {
      icon: '💡',
      title: 'Innovation',
      description: 'We continuously explore new technologies and best practices.'
    },
    {
      icon: '🤝',
      title: 'Partnership',
      description: 'Long-term relationships built on trust and mutual success.'
    },
    {
      icon: '📈',
      title: 'Continuous Improvement',
      description: 'Always seeking ways to enhance value and performance.'
    }
  ]

  return (
    <div className="approach-page">
      <section className="page-header">
        <h1>Our Approach</h1>
        <p>A systematic, client-focused methodology for delivering exceptional results</p>
      </section>

      <div className="container">
        {/* Approach Intro */}
        <section className="approach-intro">
          <p>
            Our comprehensive approach ensures every project is completed with precision, quality, and your complete satisfaction. We combine expertise, innovation, and dedication to deliver solutions that exceed expectations.
          </p>
        </section>

        {/* Methodology Steps */}
        <section className="approach-steps">
          <h2>Our Six-Step Process</h2>
          <div className="steps-container">
            {steps.map((step, idx) => (
              <div key={idx} className="step-card">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Principles */}
        <section className="approach-principles">
          <h2>Our Core Principles</h2>
          <p className="principles-intro">
            These principles guide every decision and action we take:
          </p>
          <div className="principles-grid">
            {principles.map((principle, idx) => (
              <div key={idx} className="principle-card">
                <span className="principle-icon">{principle.icon}</span>
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commitment */}
        <section className="approach-commitment">
          <h2>Our Commitment to You</h2>
          <div className="commitment-content">
            <ul className="commitment-list">
              <li>Transparent communication throughout every project phase</li>
              <li>Adherence to timelines and budget agreements</li>
              <li>Quality workmanship and attention to detail</li>
              <li>Full compliance with all relevant standards and regulations</li>
              <li>Proactive problem-solving and issue resolution</li>
              <li>Complete project documentation and knowledge transfer</li>
              <li>Reliable ongoing support and maintenance services</li>
            </ul>
          </div>
        </section>

        {/* Why This Approach */}
        <section className="approach-why">
          <h2>Why This Approach Works</h2>
          <p>
            By combining systematic processes with personalized attention, we ensure your project receives the expertise it deserves. Our methodology has proven results across hundreds of successful projects and satisfied clients.
          </p>
          <div className="why-benefits">
            <div className="benefit">
              <h4>Risk Mitigation</h4>
              <p>Thorough planning reduces project risks</p>
            </div>
            <div className="benefit">
              <h4>Cost Efficiency</h4>
              <p>Optimized processes keep costs controlled</p>
            </div>
            <div className="benefit">
              <h4>Quality Assurance</h4>
              <p>Multiple checkpoints ensure excellence</p>
            </div>
            <div className="benefit">
              <h4>Long-Term Success</h4>
              <p>Ongoing support ensures sustained value</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

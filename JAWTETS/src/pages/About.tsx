import './About.css'

export default function About() {
  return (
    <div className="about-page">
      <section className="page-header">
        <h1>About JAWTETS</h1>
        <p>Jabal Water Treatment, Energy & Technical Services</p>
      </section>

      <div className="container">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            JAWTETS was founded with a mission to provide comprehensive solutions for water treatment, 
            renewable energy, and technical services. With over 20 years of industry experience, we have 
            established ourselves as a trusted partner for businesses and communities seeking reliable, 
            sustainable solutions.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Mission</h2>
          <div className="mission-statement">
            <p>
              To deliver innovative and sustainable solutions in water treatment, renewable energy, and 
              technical services, ensuring quality, reliability, and customer satisfaction while contributing 
              to environmental conservation and community development.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Vision</h2>
          <div className="vision-statement">
            <p>
              To be the leading provider of integrated water, energy, and technical solutions in the region, 
              recognized for excellence, innovation, and commitment to sustainable development.
            </p>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Quality</h3>
              <p>We deliver high-quality services and solutions that meet professional standards and exceed client expectations.</p>
            </div>
            <div className="value-item">
              <h3>Commitment</h3>
              <p>We are dedicated to our clients, projects, and responsibilities, ensuring reliable and timely service delivery.</p>
            </div>
            <div className="value-item">
              <h3>Trust</h3>
              <p>We build lasting relationships through honesty, transparency, accountability, and professional integrity.</p>
            </div>
            <div className="value-item">
              <h3>Discipline</h3>
              <p>We maintain professionalism, responsibility, punctuality, and adherence to established standards in everything we do.</p>
            </div>
          </div>
        </section>

        <section className="about-section">
          <h2>Our Team</h2>
          <p>
            Our experienced team consists of engineers, technicians, and specialists with deep expertise 
            in water treatment, renewable energy systems, and technical services. We are dedicated to 
            providing professional solutions tailored to each client's unique needs.
          </p>
        </section>

        <section className="certifications">
          <h2>Certifications & Partnerships</h2>
          <p>
            We maintain industry certifications and partnerships with leading organizations to ensure 
            quality and compliance with international standards.
          </p>
          <ul className="cert-list">
            <li>✓ ISO Certified Operations</li>
            <li>✓ Industry Standard Compliance</li>
            <li>✓ Government Approved Contractor</li>
            <li>✓ Environmental Certifications</li>
            <li>✓ Safety & Quality Accreditations</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

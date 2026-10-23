import './About.css'
import { Link } from 'react-router-dom'
import aboutHeaderImage from '../assets/image/5.jpg'

export default function About() {
  return (
    <div className="about-page">
      <div className="container about-overview">
        <section className="about-intro">
          <div className="about-intro-heading">
            <p className="about-eyebrow">About Us</p>
            <h1>Engineering solutions for a sustainable future</h1>
            <Link to="/contact" className="about-contact-link">Get Started</Link>
          </div>
          <p className="about-intro-copy">
            Jabal Water Treatment, Energy &amp; Technical Services delivers dependable water,
            renewable energy, and engineering services. We combine practical expertise and
            thoughtful design to help communities and businesses thrive.
          </p>
        </section>

        <section className="about-feature-grid" aria-label="Our story, mission, and vision">
          <article className="about-story-card">
            <img src={aboutHeaderImage} alt="JAWTETS engineering project" />
            <div className="about-story-copy">
              <h2>Our Story</h2>
              <p>
                Founded to make reliable water and energy solutions more accessible, JAWTETS
                partners with clients to deliver sustainable, practical engineering projects.
              </p>
            </div>
          </article>
          <div className="about-purpose-cards">
            <article className="about-purpose-card about-mission-card">
              <h2>Our Mission</h2>
              <p>
                To deliver high-quality, innovative, and sustainable water and energy solutions
                that improve lives and protect the environment.
              </p>
            </article>
            <article className="about-purpose-card about-vision-card">
              <h2>Our Vision</h2>
              <p>
                To be a leading provider of sustainable water, energy, and technical solutions
                across Africa and beyond.
              </p>
            </article>
          </div>
        </section>
      </div>

      <div className="container">
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
            providing professional solutions tailored to each client&apos;s unique needs.
          </p>
        </section>

        <section className="certifications">
          <h2>Certifications &amp; Partnerships</h2>
          <p>
            We maintain industry certifications and partnerships with leading organizations to ensure
            quality and compliance with international standards.
          </p>
          <ul className="cert-list">
            <li>✓ ISO Certified Operations</li>
            <li>✓ Industry Standard Compliance</li>
            <li>✓ Government Approved Contractor</li>
            <li>✓ Environmental Certifications</li>
            <li>✓ Safety &amp; Quality Accreditations</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

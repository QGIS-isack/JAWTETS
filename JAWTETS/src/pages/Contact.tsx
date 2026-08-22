import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })
  
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="contact-page">
      <section className="page-header">
        <h1>Contact Us</h1>
        <p>Get in touch with our team for inquiries and support</p>
      </section>

      <div className="container">
        <div className="contact-content">
          {/* Contact Information */}
          <section className="contact-info">
            <h2>Contact Information</h2>
            
            <div className="info-item">
              <h3>📍 Address</h3>
              <p>Jabal, Mwege, Dar es salaam</p>
            </div>

            <div className="info-item">
              <h3>📞 Phone</h3>
              <p>+255 656 639 615</p>
              <p>+255 714 091 01</p>
            </div>

            <div className="info-item">
              <h3>📧 Email</h3>
              <p>jawtets@gmail.com</p>
            </div>

            <div className="info-item">
              <h3>🌐 Website</h3>
              <p>www.jawtets.com</p>
            </div>

            <div className="info-item">
              <h3>⏰ Business Hours</h3>
              <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p>Saturday: 9:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
              <p style={{ marginTop: '0.5rem', fontSize: '0.9rem', color: '#666' }}>
                24/7 Emergency Support Available
              </p>
            </div>
          </section>

          {/* Contact Form */}
          <section className="contact-form-section">
            <h2>Send us a Message</h2>
            
            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+255 XXXX XXXX"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service">Service Interested In *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="water-treatment">Water Treatment</option>
                  <option value="solar-solutions">Solar Solutions</option>
                  <option value="borehole-drilling">Borehole Drilling</option>
                  <option value="chemical-supply">Chemical Supply</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project or inquiry..."
                  rows={5}
                />
              </div>

              <button type="submit" className="submit-button">Send Message</button>
            </form>
          </section>
        </div>

        {/* Map Section */}
        <section className="map-section">
          <h2>Find Us on the Map</h2>
          <div className="map-placeholder">
            <p>📍 Map location to be added</p>
          </div>
        </section>
      </div>
    </div>
  )
}

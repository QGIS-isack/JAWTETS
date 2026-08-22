import './Footer.css'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>JAWTETS</h3>
          <p>Jabal Water Treatment, Energy & Technical Services</p>
          <p className="tagline">Pure Water • Smart Energy • Reliable Solution</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><a href="/services">Water Treatment</a></li>
            <li><a href="/services">Solar Solutions</a></li>
            <li><a href="/services">Borehole Drilling</a></li>
            <li><a href="/services">Chemicals Supply</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Website: www.jawtets.com</p>
          <p>Email: jawtets@gmail.com</p>
          <p>Phone: +255 656 639 615</p>
        </div>

        <div className="footer-section social-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="https://www.linkedin.com/company/jawtets/" target="_blank" rel="noreferrer" aria-label="JAWTETS on LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a href="https://www.facebook.com/jawtets" target="_blank" rel="noreferrer" aria-label="JAWTETS on Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="https://www.instagram.com/jawtets" target="_blank" rel="noreferrer" aria-label="JAWTETS on Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="https://www.youtube.com/@jawtets" target="_blank" rel="noreferrer" aria-label="JAWTETS on YouTube">
              <FaYoutube aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {currentYear} JAWTETS. All rights reserved.</p>
      </div>
    </footer>
  )
}

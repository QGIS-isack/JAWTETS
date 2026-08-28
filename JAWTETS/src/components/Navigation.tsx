import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navigation.css'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => setIsMenuOpen(false)

  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <span className="logo-wordmark" aria-label="JAWTETS logo">
            <span className="logo-wordmark-jaw">JAW</span><span className="logo-wordmark-tets">TETS</span>
          </span>
          <span className="logo-subtitle">
            <span className="logo-subtitle-water">Pure Water</span>
            <span aria-hidden="true"> • </span>
            <span className="logo-subtitle-energy">Smart Energy</span>
            <span aria-hidden="true"> • </span>
            <span className="logo-subtitle-solution">Reliable Solutions</span>
          </span>
        </Link>
        <button
          className="nav-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul id="primary-navigation" className={`nav-menu${isMenuOpen ? ' is-open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/services" className="nav-link" onClick={closeMenu}>Services</Link>
            <ul className="dropdown-menu">
              <li><Link to="/water-treatment" onClick={closeMenu}>Water Treatment</Link></li>
              <li><Link to="/solar-energy" onClick={closeMenu}>Solar Energy</Link></li>
              <li><Link to="/borehole-drilling" onClick={closeMenu}>Borehole Drilling</Link></li>
              <li><Link to="/chemicals-supply" onClick={closeMenu}>Chemicals Supply</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link" onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/approach" className="nav-link" onClick={closeMenu}>Approach</Link>
          </li>
          <li className="nav-item">
            <Link to="/why-choose-us" className="nav-link" onClick={closeMenu}>Why Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={closeMenu}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-cta" onClick={closeMenu}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

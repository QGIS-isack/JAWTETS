import { Link } from 'react-router-dom'
import './Navigation.css'
import logoIcon from '../assets/logo-icon.png'

export default function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <img className="logo-icon" src={logoIcon} alt="JAWTETS logo" />
          <span className="logo-subtitle">Water • Energy • Solutions</span>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item dropdown">
            <Link to="/services" className="nav-link">Services</Link>
            <ul className="dropdown-menu">
              <li><Link to="/water-treatment">Water Treatment</Link></li>
              <li><Link to="/solar-energy">Solar Energy</Link></li>
              <li><Link to="/borehole-drilling">Borehole Drilling</Link></li>
              <li><Link to="/chemicals-supply">Chemicals Supply</Link></li>
            </ul>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/approach" className="nav-link">Approach</Link>
          </li>
          <li className="nav-item">
            <Link to="/why-choose-us" className="nav-link">Why Us</Link>
          </li>
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link">Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link nav-link-cta">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBuilding, FaBuildingColumns, FaCity, FaClipboard, FaFileCircleCheck, FaFileLines, FaGraduationCap, FaHelmetSafety, FaHouse, FaHospital, FaIndustry, FaPenRuler, FaScrewdriverWrench, FaHeadset, FaTractor, FaHouseChimney, FaUsers } from 'react-icons/fa6'
import './Home.css'
import technicalImage from '../assets/technical.jpg'
import waterImage from '../assets/2.jpeg'
import waterTreatmentIcon from '../assets/water-treatment-icon.svg'
import solarEnergyIcon from '../assets/solar-energy-icon.svg'
import boreholeServicesIcon from '../assets/borehole-services-icon.svg'
import chemicalSolutionsIcon from '../assets/chemical-solutions-icon.svg'
import engineeringConsultancyIcon from '../assets/engineering-consultancy-icon.svg'
import boreholesImage from '../assets/boreholes.jpg'
import chemicalImage from '../assets/chemical.jpg'
import solarImage from '../assets/solar.jpg'
import heroImageTwoAdded from '../assets/image/2.jpg'
import heroImageThreeAdded from '../assets/image/3.jpg'
import heroImageFourAdded from '../assets/image/4.jpg'
import projectImage from '../assets/image/5.jpg'
import aboutImageOne from '../assets/about/11.jpg'
import aboutImageTwo from '../assets/about/2.jpg'
import torayLogo from '../assets/Toray-icon.png'
import grundfosLogo from '../assets/grundfos-icon.png'
import pentairLogo from '../assets/pentair-icon.png'
import dowLogo from '../assets/dow-icon.jpg'
import danfossLogo from '../assets/danfoss-icon.jpg'
import energyLogo from '../assets/energy-icon.jpg'

const heroImages = [
  heroImageTwoAdded,
  heroImageThreeAdded,
  heroImageFourAdded,
]

const aboutImages = [aboutImageOne, aboutImageTwo]

const solutions = [
  { title: 'Water Treatment', image: waterImage, icon: waterTreatmentIcon, text: 'RO Systems, Filtration, UV, UF, Softeners & more.' },
  { title: 'Solar Energy', image: solarImage, icon: solarEnergyIcon, text: 'Solar Backup, Hybrid, Off-Grid, Solar Pumping Systems.' },
  { title: 'Borehole Services', image: boreholesImage, icon: boreholeServicesIcon, text: 'Geological Survey, Drilling, Test Pumping & Systems.' },
  { title: 'Chemical Solutions', image: chemicalImage, icon: chemicalSolutionsIcon, text: 'Water Treatment, Industrial Chemicals & Cleaning Chemicals.' },
  { title: 'Engineering Consultancy', image: technicalImage, icon: engineeringConsultancyIcon, text: 'Design, Assessment, Technical Advice & Project Support.' },
]

const process = [
  { title: 'Consultation', icon: FaUsers, description: 'Understand your needs and challenges.' },
  { title: 'Site Assessment', icon: FaClipboard, description: 'Evaluate site conditions and requirements.' },
  { title: 'Engineering & Design', icon: FaPenRuler, description: 'Develop the right solution for your application.' },
  { title: 'Proposal', icon: FaFileLines, description: 'Provide technical and commercial proposals.' },
  { title: 'Implementation', icon: FaScrewdriverWrench, description: 'Supply equipment and professional installation.' },
  { title: 'Commissioning', icon: FaFileCircleCheck, description: 'Testing, training and system handover.' },
  { title: 'Support', icon: FaHeadset, description: 'After-sales service and technical support.' },
]

const industries = [
  { title: 'Residential', icon: FaHouse },
  { title: 'Hotels & Hospitality', icon: FaBuilding },
  { title: 'Hospitals', icon: FaHospital },
  { title: 'Schools', icon: FaGraduationCap },
  { title: 'Industries', icon: FaIndustry },
  { title: 'Commercial Buildings', icon: FaBuildingColumns },
  { title: 'Agriculture', icon: FaTractor },
  { title: 'Construction', icon: FaHelmetSafety },
  { title: 'Real Estate', icon: FaHouseChimney },
  { title: 'NGOs & Institutions', icon: FaCity },
]

export default function Home() {
  const [heroImageIndex, setHeroImageIndex] = useState(0)
  const [aboutImageIndex, setAboutImageIndex] = useState(0)

  useEffect(() => {
    const imageTimer = window.setInterval(() => {
      setHeroImageIndex((currentIndex) => (currentIndex + 1) % heroImages.length)
    }, 5000)
    const aboutImageTimer = window.setInterval(() => {
      setAboutImageIndex((currentIndex) => (currentIndex + 1) % aboutImages.length)
    }, 5000)

    return () => {
      window.clearInterval(imageTimer)
      window.clearInterval(aboutImageTimer)
    }
  }, [])

  return (
    <div className="home">
      <section className="home-hero">
        <img key={heroImageIndex} src={heroImages[heroImageIndex]} alt="JAWTETS engineering installation" />
        <div className="home-hero-shade" />
        <div className="container home-hero-content">
          {/* <p className="eyebrow">JAWTETS ENGINEERING</p> */}
          <h1>Engineering Solutions<br />for Water &amp; Energy</h1>
          <p className="hero-lede">Reliable water treatment, solar energy, borehole and technical solutions engineered for commercial and industrial applications.</p>
          <div className="home-actions"><Link to="/contact" className="home-primary-button">Request a quotation <span>-&gt;</span></Link><Link to="/water-treatment" className="home-outline-button">Explore our solutions <span>-&gt;</span></Link></div>
          <div className="hero-service-strip">{solutions.map((solution) => <span key={solution.title}><img src={solution.icon} alt="" />{solution.title}</span>)}</div>
        </div>
      </section>

      <section className="home-intro"><div className="container intro-grid"><div className="intro-image-frame">{aboutImages.map((image, index) => <img key={image} className={`intro-image${index === aboutImageIndex ? ' is-active' : ''}`} src={image} alt="JAWTETS engineering installation" aria-hidden={index !== aboutImageIndex} />)}</div><div><p className="eyebrow">Who we are</p><h2>Engineering solutions that create value.</h2><p>JAWTETS is an engineering solutions company specializing in water treatment, solar energy, borehole systems, chemicals and technical consultancy.</p><p>We combine engineering expertise with practical innovation to deliver reliable, efficient and sustainable solutions tailored to each client&apos;s needs.</p><Link to="/about" className="text-link">About JAWTETS <span>-&gt;</span></Link></div></div></section>

      <section className="home-solutions"><div className="container"><div className="section-heading"><p className="eyebrow">Our solutions</p><center><h2>Complete solutions. One partner.</h2></center></div><div className="solution-cards">{solutions.map((solution) => <Link to={solution.title === 'Water Treatment' ? '/water-treatment' : solution.title === 'Solar Energy' ? '/solar-energy' : solution.title === 'Borehole Services' ? '/borehole-drilling' : '/chemicals-supply'} className="home-solution-card" key={solution.title}><div className="solution-icon"><img src={solution.icon} alt="" /></div><img className="solution-card-image" src={solution.image} alt="" /><div><h3>{solution.title}</h3><p>{solution.text}</p><span>Explore solutions -&gt;</span></div></Link>)}</div></div></section>

      <section className="why-section"><div className="container"><h2>Why choose JAWTETS?</h2><div className="why-grid"><div><b>Engineering-led approach</b><span>Solutions based on technical assessment and actual application requirements.</span></div><div><b>Tailored solutions</b><span>Systems designed around each client&apos;s requirements and conditions.</span></div><div><b>End-to-end delivery</b><span>From assessment and design to supply, installation, testing and commissioning.</span></div><div><b>After-sales support</b><span>Continued technical support to ensure reliable system performance.</span></div></div></div></section>

      <section className="process-section"><div className="container"><div className="section-heading"><p className="eyebrow">Our approach</p><center><h2>How we work</h2></center></div><div className="process-grid">{process.map(({ title, icon: ProcessIcon, description }, index) => <div className="process-item" key={title}><div className="process-step"><strong><ProcessIcon aria-hidden="true" /></strong><small>{String(index + 1).padStart(2, '0')}</small><h3>{title}</h3><p>{description}</p></div>{index < process.length - 1 && <span className="process-arrow" aria-hidden="true">-&gt;</span>}</div>)}</div></div></section>

      <section className="projects-section"><div className="container"><div className="section-heading"><p className="eyebrow">Selected work</p><center><h2>Featured projects</h2></center></div><div className="project-grid"><article><img src={solarImage} alt="Solar borehole pumping system" /><b>Solar borehole pumping system</b><span>Solar energy &nbsp; | &nbsp; Water supply</span></article><article><img src={technicalImage} alt="Commercial RO water treatment system" /><b>Commercial RO water treatment system</b><span>Water treatment &nbsp; | &nbsp; Installation</span></article><article><img src={projectImage} alt="Commercial solar energy solution" /><b>Commercial solar energy solution</b><span>Renewable energy &nbsp; | &nbsp; Engineering</span></article><article><img src={waterImage} alt="Industrial water filtration system" /><b>Industrial water filtration system</b><span>Water treatment &nbsp; | &nbsp; Filtration</span></article></div><Link to="/portfolio" className="home-primary-button project-button">View all projects <span>-&gt;</span></Link></div></section>

      <section className="industries-section"><div className="container industries-grid"><div><h2>Industries we serve</h2><div className="industry-list">{industries.map(({ title, icon: IndustryIcon }) => <span key={title}><IndustryIcon aria-hidden="true" />{title}</span>)}</div></div><div className="brands"><p className="eyebrow">Technologies &amp; brands we work with</p><div><img src={grundfosLogo} alt="Grundfos" /><img src={pentairLogo} alt="Pentair" /><img src={dowLogo} alt="Dow" /><img src={torayLogo} alt="Toray" /><img src={danfossLogo} alt="Danfoss" /><img src={energyLogo} alt="Energy" /></div><p>We work with trusted global brands to deliver reliable and innovative solutions.</p></div></div></section>

      <section className="home-cta"><div className="container"><p className="eyebrow">Have a project in mind?</p><h2>Let&apos;s build a reliable solution.</h2><p>Talk to our engineering team about your water, energy or technical requirements.</p><Link to="/contact" className="home-primary-button">Request a quotation <span>-&gt;</span></Link></div></section>
    </div>
  )
}

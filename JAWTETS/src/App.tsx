import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import WaterTreatment from './pages/WaterTreatment'
import SolarEnergy from './pages/SolarEnergy'
import BoreholeDrilling from './pages/BoreholeDrilling'
import ChemicalsSupply from './pages/ChemicalsSupply'
import Approach from './pages/Approach'
import WhyChooseUs from './pages/WhyChooseUs'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/water-treatment" element={<WaterTreatment />} />
            <Route path="/solar-energy" element={<SolarEnergy />} />
            <Route path="/borehole-drilling" element={<BoreholeDrilling />} />
            <Route path="/chemicals-supply" element={<ChemicalsSupply />} />
            <Route path="/approach" element={<Approach />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
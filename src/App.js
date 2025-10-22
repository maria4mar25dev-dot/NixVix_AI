import React from 'react'
import Home from "../src/Pages/Home/Home"
import About from '../src/Pages/About/About'
import Services from '../src/Pages/Services/Services'
import TechStack from '../src/Pages/TechStack/TechStack'
import Solutions from '../src/Pages/Solutions/Solutions'
import ContactUs from '../src/Pages/ContactUs/ContactUs'
import CaseStudies from '../src/Pages/CaseStudies/CaseStudies'
import Navbar from './CommonComponents/Navbar'
import Footer from './CommonComponents/Footer/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
     <div className="App bg-[#000000] text-white font-inter">
      <Router>
      <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/techstack" element={<TechStack />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/contact-us" element={<ContactUs />} />
         <Route path="/case-studies" element={<CaseStudies />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  )
}

export default App

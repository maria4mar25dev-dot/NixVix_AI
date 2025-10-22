import React from 'react'
import ServicesHero from './ServicesHero'
import ServicesDetail from './ServicesDetail'
import Testimonial from '../../CommonComponents/Testimonial'
import Contact from '../../CommonComponents/Contact/Contact'
import ServicesCard from './ServicesCard'
function Services() {
  return (
    <div>
      <ServicesHero/>
      <ServicesDetail/>
      <ServicesCard/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default Services

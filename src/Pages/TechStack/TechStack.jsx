import React from 'react'
import TechStackHero from './TechStackHero'
import TechCard from './TechCard'
import Expertise from './Expertise'
import Testimonial from '../../CommonComponents/Testimonial'
import Contact from '../../CommonComponents/Contact/Contact'

function TechStack() {
  return (
    <div>
     <TechStackHero/>
     <TechCard/>
     <Expertise/>
      <Testimonial/>
      <Contact/>
    </div>
  )
}

export default TechStack

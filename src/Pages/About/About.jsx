import React from 'react'
import AboutHero from './AboutHero'
import Mission from './Mission/Mission'
import Stories from './Stories/Stories'
import TeamMembers from './TeamMembers'
import Partners from '../../CommonComponents/Partners'
import Contact from '../../CommonComponents/Contact/Contact'
function About() {
  return (
    <div>
      <AboutHero/>
      <Mission/>
      <Partners/>
      <Stories/>
      <TeamMembers/>
      <Contact/>
    </div>
  )
}

export default About

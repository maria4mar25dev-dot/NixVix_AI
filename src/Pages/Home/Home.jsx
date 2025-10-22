import React from 'react'
import HomeHero from './HomeHero'
import About from './About'
import Impact from './Impact'
import Possibilities from './Possibilities'
import TechCards from '../TechStack/TechCard'
import VoiceTech from './VoiceTech'
import Workflow from './WorkFlow/WorkFlow'
import CaseStudyList from '../CaseStudies/CaseStudyList/CaseStudyList'
import { caseData } from '../CaseStudies/CaseStudyList/CaseStudyData'
import Industries from './Industries'
import Testimonial from '../../CommonComponents/Testimonial'
import Partners from '../../CommonComponents/Partners'
import Contact from '../../CommonComponents/Contact/Contact'


function Home() {
  return (
    <div>
        <HomeHero/>
        <About/>
        <Impact/>
        <Possibilities/>
        <TechCards/>
        <VoiceTech/>
        <CaseStudyList caseData={caseData} showHeader={true} />
        <Industries/>
        <Partners/>
        <Testimonial/>
        <Workflow/>
        <Contact/>
        
    </div>
  )
}

export default Home

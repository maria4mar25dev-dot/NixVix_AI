import React from 'react'
import HomeHero from './HomeHero'
import About from './About'
import Impact from './Impact'
// import Possibilities from './Possibilities'
import TechCards from '../TechStack/TechCard'
import VoiceTech from './VoiceTech'
import Workflow from './WorkFlow/WorkFlow'
import CaseStudyList from '../CaseStudies/CaseStudyList/CaseStudyList'
import { caseData } from '../CaseStudies/CaseStudyList/CaseStudyData'
import Industries from './Industries'
import Testimonial from '../../CommonComponents/Testimonial'
import Partners from '../../CommonComponents/Partners'
import Contact from '../../CommonComponents/Contact/Contact'
import PossibleServices from './PossibleServices'


function Home() {
  return (
    <div>
      <div
  className="
    absolute
    w-[902px] h-[902px]
    rounded-full
    top-[5950px]
    right-1/2
    pointer-events-none
    bg-[radial-gradient(50%_50%_at_50%_50%,rgba(43,112,109,0.4)_0%,rgba(43,112,109,0)_100%)]
    backdrop-blur-[64px]
  "
/>
        <HomeHero/>
        <About/>
        <Impact/>
        {/* <Possibilities/> */}
        <PossibleServices/>
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

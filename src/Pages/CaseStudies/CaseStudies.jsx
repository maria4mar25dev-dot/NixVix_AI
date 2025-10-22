import React from 'react'
import CaseStudiesHero from './CaseStudiesHero'
import CaseStudyParent from './CaseStudyList/CaseStudyParent'
import Contact from '../../CommonComponents/Contact/Contact'
import Partners from '../../CommonComponents/Partners'

function CaseStudies() {
  return (
    <div>
     <CaseStudiesHero/>
     <CaseStudyParent/>
     <Partners/>
     <Contact/>
    </div>
  )
}

export default CaseStudies

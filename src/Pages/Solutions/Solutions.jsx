import React from 'react'
import SolutionsHero from './SolutionsHero'
import SolutionCard from './SolutionDetail'
import Impact  from '../Home/Impact'
import Contact from '../../CommonComponents/Contact/Contact'
import Partners from '../../CommonComponents/Partners'

function Solutions() {
  return (
    <div>
      <SolutionsHero/>
      <SolutionCard/>
      <Partners/>
      <Impact solution={true} />
      <Contact/>
    </div>
  )
}

export default Solutions

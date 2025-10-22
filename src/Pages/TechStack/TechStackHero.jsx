import React from 'react'
import {IMAGES} from '../../Images'

function TechStackHero() {
  return (
   <div
         className="hero-section"
         style={{ backgroundImage: `url(${IMAGES.heroImg4})` }}
       >
     <div className="overlay"></div>
    <div className="relative z-[20] flex flex-col items-center justify-center text-center">
  <h1 className="heading1 mt-16 sm:mt-20 md:mt-24 lg:mt-32 leading-[2rem]">Tech Stack</h1>
  <h1 className="sub-heading mb-2">The Engine Behind Our AI</h1>
</div>

       </div>
  )
}

export default TechStackHero

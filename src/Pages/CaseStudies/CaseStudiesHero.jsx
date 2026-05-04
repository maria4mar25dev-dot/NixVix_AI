import React from 'react'
import { IMAGES } from '../../Images'

function CaseStudiesHero() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-10"
      style={{
        backgroundImage: `url(${IMAGES.heroImg2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="overlay"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center lg:mt-32">
        <h1 className="heading1">Case Studies</h1>
      </div>
    </div>
  )
}

export default CaseStudiesHero

import React from 'react'
import { IMAGES } from '../../Images'

function TechStackHero() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${IMAGES.heroImg4})`,
        backgroundSize: "cover",
        backgroundPosition: "center", }}
    >
      <div className="overlay"></div>
      <div className="relative z-[20] flex flex-col items-center justify-center text-center ">
        <h1 className="heading1">Tech Stack</h1>
        <h1 className="sub-heading mb-2">The Engine Behind Our AI</h1>
      </div>

    </div>
  )
}

export default TechStackHero

import React from 'react'
import { IMAGES } from '../../Images'

function SolutionsHero() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${IMAGES.heroImg5})` }}
    >
      <div className="overlay"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <h1 className="heading1">AI Solutions</h1>
        <h1 className="sub-heading">Solutions we Deliver</h1>
        {/* Button Container */}
       <div className="flex flex-wrap justify-center  gap-2 sm:gap-4 md:gap-6 mt-2 sm:mt-4 md:mt-6 max-w-[1200px]  ">
  {/* Top Row (3 buttons) */}
  <div className="flex justify-center flex-wrap gap-4 sm:gap-6 w-full md:w-auto  ">
    <Button label="Pose Estimation" />
    <Button label="Computer Vision" />
    <Button label="Voice Tech" />
  </div>

  {/* Bottom Row (4 buttons) */}
  <div className="flex justify-center flex-wrap gap-4 sm:gap-6 w-full md:w-auto">
    <Button label="AI Video Gen" />
    <Button label="Conversation AI" />
    <Button label="AI Understanding" />
    <Button label="Agent Workflows" />
  </div>
</div>

      </div>
    </div>
  )
}

export default SolutionsHero

function Button({ label }) {
  return (
    <button
      className="
        bg-black 
        border border-white/10 
        text-white 
         px-2.5 sm:px-4 md:px-6 
         py-1.5 sm:py-2 md:py-3  
        rounded-full 
        text-xs sm:text-sm md:text-base lg:text-lg 
        font-medium 
        cursor-pointer 
        transition-all duration-300 
        shadow-[0_0_15px_rgba(0,255,200,0.2)] 
        hover:shadow-[0_0_25px_rgba(0,255,200,0.6)] 
        hover:border-[rgba(0,255,200,0.8)]
      "
    >
      {label}
    </button>
  )
}

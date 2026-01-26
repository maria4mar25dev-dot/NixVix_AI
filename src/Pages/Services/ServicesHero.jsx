import React from 'react'
import { IMAGES } from '../../Images'

function ServicesHero() {
  return (
    <div
      className="hero-section"
      style={{ backgroundImage: `url(${IMAGES.heroImg3})` }}
    >
      <div className="overlay"></div>
      <div className="relative z-20 flex flex-col items-center justify-center text-center">
        <h1 className="heading1 ">Services</h1>

        <h1 className="sub-heading ">Redefine what's possible with AI</h1>

        {/* Button Container */}
        <div className="flex flex-wrap justify-center  sm:gap-6 mt-4 max-w-[1200px]  gap-2 sm:gap-4 md:gap-6 mt-2 sm:mt-4 md:mt-6">
          <Button label="Generative AI" />
          <Button label="LLM & Agentic AI" />
          <Button label="Computer Vision" />
          <Button label="Machine Learning & Predictive Analytics" />
          <Button label="MLOps, Serverless & Scalable" />
        </div>
      </div>

    </div>
  )
}

export default ServicesHero

function Button({ label }) {
  return (
    <button
      className="
        bg-black 
        text-white 
         px-2.5 sm:px-4 md:px-6 
         py-1.5 sm:py-2 md:py-3  
        rounded-full 
        text-xs sm:text-sm md:text-base lg:text-lg 
        font-medium 
        cursor-pointer 
        transition-all duration-300 
        shadow-[0px_0px_11.44px_1.62px_#2B6D6B]
        border-[1.22px] border-transparent
        hover:border-[#419491]
        hover:shadow-[0px_0px_11.44px_1.62px_#5CE5E0]
      "
    >
      {label}
    </button>
  )
}
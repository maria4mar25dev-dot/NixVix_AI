import React, { useState } from "react";
import { IMAGES } from "../../Images";

const industriesData = [
  {
    image: IMAGES.industryImg,
    title: "Healthcare",
    description:
      "Automated Echocardiograms De-Identification and Interpretation for Clinical Purposes",
    meta: "PhysioW – A Physiotherapist Assistant",
  },
  {
    image: IMAGES.industryImg,
    title: "Sports",
    description:
      "AI-powered athlete tracking system combining swimmer performance logging and drone-based soccer monitoring",
    meta: "Swim Today - Swimmer Performance Logger",
  },
  {
    image: IMAGES.industryImg,
    title: "Retail",
    description:
      "AI-powered system automating shelf restocking and optimizing retail operations with Biscuit.ai.",
    meta: "Smart Shelf Replenishment System",
  },
];

function Industries() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + industriesData.length) % industriesData.length
    );
  const handleNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % industriesData.length);

  const currentIndustry = industriesData[currentIndex];

  return (
    <section className="relative text-center text-white px-2 md:px-6 py-2 sm:py-4 md:py-12 lg:py-14 overflow-hidden w-[93%] max-w-[1380px] mx-auto">
      {/* Gradient background */}
      <div className="absolute top-[100px] left-0 w-[40%] h-full bg-[radial-gradient(circle_at_left_center,rgba(39,240,213,0.15),transparent_70%)] -z-10"></div>

      {/* Titles */}
      <h4 className="subtitle">Industries</h4>
      <h2 className="heading2 ">Where Our Solutions Make An Impact</h2>

      {/* Card Container */}
      <div className="relative max-w-[1050px] mx-auto mt-8">
        {/* Image + Overlay Info */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src={currentIndustry.image}
            alt={currentIndustry.title}
            className="w-full md:h-[450px] sm:h-[300px] h-[250] object-cover block"
          />
          <div className="absolute bottom-0 left-0 w-full bg-[rgba(20,20,20,0.95)] backdrop-blur-md text-left lg:p-6 md:p-4 sm:p-3 xs:p-2">
            <h3 className="text-[16px] sm:text-[16px] md:text-lg font-semibold mb-1 px-1">
              {currentIndustry.title}
            </h3>
            <p className="text-white/80 text-[12px] sm:text-[14px] md:text-sm leading-[1.4] px-1 mb-0 sm:mb-1 md:mb-2">
              {currentIndustry.description}
            </p>
            <span className="text-white/60 text-[10px] sm:text-xs md:text-[0.85rem] px-1 ">
              {currentIndustry.meta}
            </span>
          </div>
        </div>

        {/* Buttons Wrapper */}
        <div className="flex justify-center items-center gap-2 my-2 md:mt-0 md:justify-between relative md:absolute md:top-1/2 md:left-0 md:w-full md:-translate-y-1/2">

          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] text-xs rounded-full 
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
            flex items-center justify-center  
            md:absolute md:left-[-30px]"
          >
            ←
          </button>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] text-xs rounded-full 
            w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 
            flex items-center justify-center  
            md:absolute md:right-[-30px]"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Industries;

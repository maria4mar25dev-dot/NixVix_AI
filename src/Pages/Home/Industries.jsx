import React, { useState } from "react";
import { IMAGES } from "../../Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
const industriesData = [
  {
    image: IMAGES.industryImg,
    title: "Healthcare",
    description:
      "Automated Echocardiograms De-Identification and Interpretation for Clinical Purposes",
    meta: "PhysioW – A Physiotherapist Assistant",
  },
  {
    image: IMAGES.industryImg2,
    title: "Sports",
    description:
      "AI-powered athlete tracking system combining swimmer performance logging and drone-based soccer monitoring",
    meta: "Swim Today - Swimmer Performance Logger",
  },
  {
    image: IMAGES.industryImg3,
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
    <div>

      <section className="relative text-center text-white  px-[20px] sm:px-[40px] md:px-[40px]    mt-20 sm:mt-20 md:mt-28 lg:mt-32 max-w-[1380px] mx-auto">
{/* Bottom Left Glow */}
<div
  className="
    absolute
    bottom-[-120px]
    left-[-120px]
    w-[420px]
    h-[420px]
    rounded-full
    bg-[radial-gradient(circle,rgba(43,112,109,0.4)_0%,rgba(43,112,109,0)_70%)]
    blur-[64px]
    pointer-events-none
    z-0
  "
/>
        {/* Titles */}
        <h4 className="subtitle">Industries</h4>
        <h2 className="heading2 ">Where Our Solutions Make An Impact</h2>

        {/* Card Container */}
        <div className="relative max-w-[1035px] mx-auto mt-8">
          {/* Image + Overlay Info */}
          <div className="relative rounded-t-[16px] sm:rounded-t-[20px] md:rounded-t-[20px] overflow-hidden">
            <img
              src={currentIndustry.image}
              alt={currentIndustry.title}
              className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/9] object-cover block"
            />
            <div className="absolute bottom-0 left-0 w-full bg-[#171717]  backdrop-blur-[64px] text-left lg:p-6 md:p-4 sm:p-3 xs:p-2">
              <h3 className="pheading font-semibold mb-1 px-1">
                {currentIndustry.title}
              </h3>
              <p className=" ptext text-white/80 leading-[1.4] px-1 mb-0 sm:mb-1 md:mb-2">
                {currentIndustry.description}
              </p>
              <span className="text-white/60 text-[10px] sm:text-[11px] md:text-[12px] px-1 ">
                {currentIndustry.meta}
              </span>
            </div>
          </div>
          {/* Buttons Wrapper */}
          <div className="flex justify-center items-center gap-2 my-2 mt-4 sm:mt-6 md:mt-0 md:justify-between relative md:absolute md:top-1/2 md:left-0 md:w-full md:-translate-y-1/2">

            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] text-xs rounded-full transition-all
                       duration-300
                       ease-out
                       hover:-translate-y-[2px]
                       hover:shadow-[0_10px_30px_rgba(92,229,224,0.25)]
                       w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10
                       flex items-center justify-center  
                       md:absolute md:left-[-30px]"
            >
              <FontAwesomeIcon
                icon={faArrowLeft}
                className="text-[#6AFFD9] text-[10px] sm:text-[12px] md:text-[14px]"
              />
            </button>
            {/* Right Button */}
            <button
              onClick={handleNext}
              className="bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] text-xs rounded-full transition-all
                       duration-300
                       ease-out
                       hover:-translate-y-[2px]
                       hover:shadow-[0_10px_30px_rgba(92,229,224,0.25)]
                       w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10
                       flex items-center justify-center  
                       md:absolute md:right-[-30px]"
            >
              <FontAwesomeIcon
                icon={faArrowRight}
                className="text-[#6AFFD9] text-[10px] sm:text-[12px] md:text-[14px]"
              />
            </button>
          </div>
        </div>
      </section></div>
  );
}

export default Industries;

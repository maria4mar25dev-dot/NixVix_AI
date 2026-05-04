import React from "react";
import { IMAGES } from "../../Images";


function VoiceTech() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-[20px] sm:px-[40px] md:px-[40px] my-4 sm:my-6 md:my-14 lg:my-20">
      <h3 className="subtitle">AI Solutions</h3>
      <h2 className="heading2">
        Solutions We Deliver
      </h2>
      <div className="flex flex-wrap justify-center gap-3 mt-4 sm:gap-4 md:gap-6 mb-4 md:mb-8">
        <Button label="Pose Estimation" />
        <Button label="Computer Vision" />
        <Button label="Voice Tech" />
        <Button label="AI Video Gen" />
        <Button label="Conversational AI" />
        <Button label="AI Understanding" />
        <Button label="Agent Workflows" />
      </div>

      <h3 className="pheading mb-2">
        Detection, Segmentation, Tracking
      </h3>
      <div
        className="w-full max-w-[1211px]
             h-[250px] 
             sm:h-[400px] 
             md:h-[550px] 
             lg:h-[660px]
             rounded-[20px] sm:rounded-[28px] md:rounded-[40px] lg:rounded-[60px]
             border border-[#1F805399]
             shadow-[0_0_20px_rgba(31,128,83,0.2)]
             bg-cover bg-center bg-no-repeat
             transition-all duration-300 ease-in-out mb-6 sm:mb-10 md:mb-20"
        style={{
          backgroundImage: `url(${IMAGES.voiceTechImg})`,
        }}
      ></div>

    </div>
  );
}

export default VoiceTech;

function Button({ label }) {
  return (
    <button
      className="px-2 sm:px-2 md:px-4
                  py-2 sm:py-2 md:py-2 
                  btext
                  font-thin sm:font-light md:font-normal rounded-full
                  transition-all duration-300 
                  text-white 
                  shadow-[0_0_16px_rgba(0,255,200,0.5)] 
                  backdrop-blur-sm shadow-[0px_0px_14.1px_2px_#2B6D6B]
                  transition-all
                  duration-300
                  ease-in
                  border-[1.22px] border-transparent
                  hover:border-[#419491]
                  hover:shadow-[0px_0px_11.44px_1.62px_#5CE5E0] "
    >
      {label}
    </button>
  )
}
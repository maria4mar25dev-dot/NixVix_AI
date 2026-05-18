import React from "react";
import { IMAGES } from "../../Images";


function VoiceTech() {
  return (
    <div className=" w-full max-w-[1360px] mx-auto items-center justify-center px-[20px] sm:px-[40px] md:px-[40px]  mt-20 sm:mt-20 md:mt-28 lg:mt-32">
      
     <div >
  <h3 className="subtitle text-left">
    AI Solutions
  </h3>

  <h2 className="heading2 text-left">
    Solutions We Deliver
  </h2>
</div>
      <div className="flex flex-wrap justify-left items-center gap-4 sm:gap-4 md:gap-7 max-w-[1360px] mx-auto    mt-4  mb-4 md:mb-8">
        <Button label="Computer Vision" />
        <Button label="Pose Estimation" />
        <Button label="Voice Tech" />
        <Button label="AI Video Gen" />
        <Button label="Conversational AI" />
        <Button label="AI Understanding" />
        <Button label="Agent Workflows" />
      </div>

      <h3 className="pheading mb-2 text-center">
        Detection, Segmentation, Tracking
      </h3>
      <div
        className="w-full max-w-[1211px] px-[20px] sm:px-[40px] md:px-[40px] mx-auto
             aspect-[16/9]
             rounded-[10px] sm:rounded-[25px] md:rounded-[40px] lg:rounded-[60px]
             border border-[#1F805399]
             shadow-[0_0_20px_rgba(31,128,83,0.2)]
             bg-cover bg-center bg-no-repeat
             transition-all duration-300 ease-in-out"
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
      className="px-3 sm:px-4 md:px-4 mt-2
                  py-2
                  whitespace-nowrap
                  btext
                  font-thin sm:font-light md:font-normal rounded-full
                  transition-all duration-300 ease-in-out hover:-translate-y-[2px]  
                  text-white 
                  backdrop-blur-sm 
                  border-[1.22px] border-transparent
                  hover:border-[#419491]
                  hover:bg-[#0D1F1F]
                  shadow-[0px_0px_14.1px_2px_#2B6D6B]
                  hover:shadow-[0px_0px_11.44px_1.62px_#5CE5E0] "
    >
      {label}
    </button>
  )
}
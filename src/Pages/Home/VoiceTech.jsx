import React from "react";
import { IMAGES } from "../../Images";


function VoiceTech() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-10 my-4 sm:my-6 md:my-14 lg:my-20">
        <h3 className="subtitle">AI Solutions</h3>
        <h2 className="heading2 mb-8 sm:mb-10 md:mb-14 lg:mb-20">
          Solutions We Deliver
        </h2>
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 mb-4 md:mb-8">
        <Button label="Pose Estimation" />
        <Button label="Computer Vision" />
        <Button label="Voice Tech" />
        <Button label="AI Video Gen" />
        <Button label="Conversational AI" />
        <Button label="AI Understanding" />
        <Button label="Agent Workflows" />
      </div>
      
      <h3 className="subtitle">
        Detection, Segmentation, Tracking
      </h3>
     <div
  className="w-full max-w-[1150px]
             aspect-[16/9] sm:aspect-[16/9] md:aspect-[21/9] lg:aspect-[21/9]
             min-h-[230px] sm:min-h-[350px] md:min-h-[450px] lg:min-h-[550px]
             rounded-[10px] sm:rounded-[15px] md:rounded-[20px] lg:rounded-[25px]
             border border-[#1F805399]
             shadow-[0_0_20px_rgba(31,128,83,0.2)]
             bg-cover bg-center bg-no-repeat
             transition-all duration-300 ease-in-out mb-6 sm:mb-10" 
  style={{
    backgroundImage: `url(${IMAGES.voiceTechImg})`,
  }}
></div>

    </div>
  );
}

export default VoiceTech;

function Button ({label}){
  return(
      <button
        className="px-2 sm:px-2 md:px-4
         py-2 sm:py-2 md:py-2 
      
                   font-thin sm:font-light md:font-normal   text-[12px] sm:text-[14px] md:text-[15px] rounded-full
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
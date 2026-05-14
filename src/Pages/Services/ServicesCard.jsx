import React from "react";

function ServicesCard() {
  const services = [
    "Text-to-Image (Stable Diffusion, DALLE, DreamBooth)",
    "Text-to-Speech (TTS) & Speech-to-Text (STT)",
    "Image & Video Enhancement",
    "Voice Conversion & Cloning",
    "Talking Avatars, Lip Sync, DeepFakes",
    "Super-resolution, Face Editing, Background Removal",
  ];

  return (
    <div className="text-center relative z-[1] my-20 sm:my-20 md:my-28 lg:my-32">
      <h2 className="heading2 text-white mb-6 md:mb-8">Services Include</h2>

      {/* 🔹 Card Container */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1200px] mx-[20px] sm:mx-[40px] md:mx-[30px] lg:mx-[40px] xl:mx-auto ">
        <div className="absolute  inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(43,112,109,0.3)_0%,rgba(43,112,109,0)_100%)] backdrop-blur-[64px] rounded-full"></div>
        {/* Cards */}
        {services.map((item, i) => (
          <div
            key={i}
            className=" pheading relative backdrop-blur-[8px] 
            border-2 border-[#1C1C1C] rounded-lg md:rounded-[30px] lg:rounded-[30px] bg-white/5 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[169px]  border-2 border-[#1C1C1C] bg-[#0e0909] text-white flex items-center  font-inter font-semibold  px-5 sm:px-6 md:px-8 py-4 text-left"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;

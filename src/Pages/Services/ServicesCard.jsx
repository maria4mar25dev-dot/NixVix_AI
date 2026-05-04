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
    <div className="text-center relative z-[1]">
      <h2 className="heading2 text-white mb-6 md:mb-8">Services Include</h2>

      {/* 🔹 Card Container */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[1200px] mx-[20px] sm:mx-[40px] md:mx-[30px] lg:mx-[40px] xl:mx-auto mb-8 sm:mb-8 md:mb-20">
        <div className="absolute  inset-0 bg-[radial-gradient(50%_50%_at_50%_50%,rgba(43,112,109,0.3)_0%,rgba(43,112,109,0)_100%)] backdrop-blur-[64px] rounded-full"></div>
        {/* Cards */}
        {services.map((item, i) => (
          <div
            key={i}
            className=" pheading relative backdrop-blur-[8px] 
            border-2 border-[#1C1C1C] rounded-[30px] bg-white/5 h-[100px] sm:h-[120px] md:h-[140px] lg:h-[169px]  rounded-[30px] border-2 border-[#1C1C1C] bg-[#0e0909] text-white flex items-center justify-center font-inter font-semibold p-4 sm:p-4 md:p-6 text-center"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServicesCard;

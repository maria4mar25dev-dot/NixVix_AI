import React from "react";
import { IMAGES } from "../../Images";

function ServicesDetail() {
  return (
    <div className=" relative z-[1] max-w-[1200px] mx-[15px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-auto -mt-[50px] sm:-mt-[25px] md:mt-0 my-10 p-4 sm:p-6 md:p-8 rounded-2xl border border-[#348E77] text-white bg-black/40 backdrop-blur-sm">

      {/* Image Section */}
      <div className="rounded-2xl overflow-hidden border border-[#262626] mb-6">
        <img
          src={IMAGES.solutionImg}
          alt="Generative AI"
          className="w-full h-[240px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Title */}
      <h2 className="text-[16px] sm:text-[16px] md:text-xl lg:text-2xl font-semibold" style={{textAlign:"left"}}>
        Computer Vision
      </h2>

      {/* Subtitle */}
      <p className="text-sm sm:text-base md:text-lg text-gray-400 my-2">
        Innovate with intelligence that creates.
      </p>

      {/* Tags Section */}
      <div className="flex flex-wrap gap-3 mb-6">
        <span className="px-4 py-2 border border-[#348E77] rounded-full text-[12px] ">
          Text-to-Image
        </span>
        <span className="px-4 py-2 border border-[#348E77] rounded-full text-[12px] ">
          Voice Cloning
        </span>
        <span className="px-4 py-2 border border-[#348E77] rounded-full text-[12px]">
          Talking Avatars
        </span>
      </div>

      {/* Description Section */}
      <div className="bg-[#0F0F0F]/90 border border-[#194439] rounded-xl p-4 sm:p-6 md:p-8">
        <h3 className="font-semibold text-base sm:text-lg md:text-xl mb-3 text-white">
          Solution Description
        </h3>
        <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed">
         We can examine and interpret your visual content (social media images, headshots & CCTV streams etc.) through intelligent machines powered by cutting edge deep learning architectures. We can assist you in the domains like:
        </p>
      </div>
    </div>
  );
}

export default ServicesDetail;

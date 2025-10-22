import React from "react";
import { IMAGES } from "../../Images";

function ServicesDetail() {
  return (
    <div className="relative z-[1] max-w-[1200px] mx-[15px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-auto -mt-[50px] sm:-mt-[25px] md:mt-0 mb-6 sm:mb-8 md:mb-20 px-4 sm:px-6 md:px-10 py-8 sm:py-10 rounded-[20px] border border-[#348E77] text-white bg-[#000000]/30 backdrop-blur-sm">
      
      {/* Title + Subtitle */}
      <div className="mb-6 sm:mb-8">
        <h2 className="heading2 mb-2 " style={{textAlign:"left"}}>
          Generative AI
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-400 mt-1">
          Innovate with intelligence that creates.
        </p>
      </div>

      {/* Image Section */}
      <div className="rounded-[20px] overflow-hidden border border-[#262626] mb-6">
        <img
          src={IMAGES.item1}
          alt="Generative AI"
          className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Information Section */}
      <div className="bg-[#0F0F0F]/90 backdrop-blur-xl border border-[#194439] rounded-xl p-4 sm:p-6 md:p-8 transition-all duration-300">
        <strong className="block text-base sm:text-lg md:text-xl lg:text-2xl mb-2 text-white">
          Best For:
        </strong>

        <span className="block mb-3 text-[13px] sm:text-sm md:text-base text-white font-medium">
          MediaTech, eLearning, Avatars, AI Art
        </span>

        <p className="text-gray-300 text-[14px] sm:text-[16px] md:text-[18px] leading-relaxed sm:leading-7">
          Our Generative AI solutions help you create smarter, faster, and more
          creative digital experiences. From turning text into stunning images
          and lifelike voices to enhancing photos, videos, and even creating
          talking avatars, we make advanced AI simple and impactful. Whether
          it’s voice cloning, background removal, or super-resolution editing,
          we deliver tools that bring your ideas to life with intelligence that
          truly creates.
        </p>
      </div>
    </div>
  );
}

export default ServicesDetail;

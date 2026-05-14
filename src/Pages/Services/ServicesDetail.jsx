import React from "react";
import { IMAGES } from "../../Images";

function ServicesDetail() {
  return (
    <div className="relative z-[1] max-w-[1200px] mx-[20px] sm:mx-[40px] md:mx-[30px] lg:mx-[40px] xl:mx-auto mt-0 sm:mt-14 md:mt-28 lg:mt-32 px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 rounded-lg md:rounded-[20px] lg:rounded-[20px] border border-[#348E77] text-white bg-[#000000]/30 backdrop-blur-sm">
      
      {/* Title + Subtitle */}
      <div className="mb-6 sm:mb-8">
        <h2 className="heading2 mb-0 " style={{textAlign:"left"}}>
          Generative AI
        </h2>
        <p className="pheading text-white">
          Innovate with intelligence that creates.
        </p>
      </div>

      {/* Image Section */}
      <div className="rounded-lg md:rounded-[20px] lg:rounded-[20px] overflow-hidden border border-[#262626] mb-6">
        <img
          src={IMAGES.item1}
          alt="Generative AI"
          className="w-full aspect-[16/9] object-cover transition-transform duration-500 hover:scale-[1.02]"
        />
      </div>

      {/* Information Section */}
      <div className="bg-[#0F0F0F]/90 backdrop-blur-xl border border-[#194439] rounded-lg md:rounded-[20px] lg:rounded-[20px] p-4 sm:p-6 md:p-8 transition-all duration-300">
        <strong className="pheading block font-bold mb-2 text-white">
          Best For:
        </strong>

        <span className=" ptext block mb-3  text-white font-extrabold">
          MediaTech, eLearning, Avatars, AI Art
        </span>

        <p className="ptext text-white leading-relaxed sm:leading-7">
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

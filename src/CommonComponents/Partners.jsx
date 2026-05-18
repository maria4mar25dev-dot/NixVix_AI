import React from "react";
import { IMAGES } from "../Images";

function Partners() {
  return (
    <section
      className="
        bg-black border-y border-[#2B2B2B]
        lg:py-8 md:py-6 sm:py-4 py-4
        flex justify-center items-center overflow-hidden
        md:mx-[40px] sm:mx-[40px] xs:mx-[20px]  mt-20 sm:mt-20 md:mt-28 lg:mt-32 backdrop-blur-[64px]
      "
    >
      <div
        className="
          flex justify-around sm:justify-between items-center flex-wrap
          sm:gap-2 md:gap-12 lg:gap-14
          max-w-[1360px] w-full 
        "
      >
        {/* Partner Logos */}
        <img
          src={IMAGES.partnerLogo1}
          alt="Fluffy Partner"
          className=" 
           max-h-[15px] sm:max-h-[35px] md:max-h-[45px] lg:max-h-[60px] object-contain
            filter invert brightness-0
            opacity-85 hover:opacity-100 hover:scale-105
            transition-all duration-300
          "
        />
        <img
          src={IMAGES.partnerLogo2}
          alt="Biscuit AI Partner"
          className="
           max-h-[20px] sm:max-h-[40px] md:max-h-[50px] lg:max-h-[65px] object-contain
            filter invert brightness-0
            opacity-85 hover:opacity-100 hover:scale-105
            transition-all duration-300
          "
        />
        <img
          src={IMAGES.partnerLogo3}
          alt="Shelfr Partner"
          className="
            max-h-[20px] sm:max-h-[40px] md:max-h-[50px] lg:max-h-[65px] object-contain
            filter invert brightness-0
            opacity-85 hover:opacity-100 hover:scale-105
            transition-all duration-300
          "
        />
        <img
          src={IMAGES.partnerLogo4}
          alt="Synthesys Partner"
          className=" 
            max-h-[20px] sm:max-h-[40px] md:max-h-[50px] lg:max-h-[65px] object-contain
            filter invert brightness-0
            opacity-85 hover:opacity-100 hover:scale-105
            transition-all duration-300
          "
        />
        <img
          src={IMAGES.partnerLogo5}
          alt="Shotdeck Partner"
          className="
            max-h-[10px] sm:max-h-[25px] md:max-h-[35px] lg:max-h-[40px] object-contain
            filter invert brightness-0
            opacity-85 hover:opacity-100 hover:scale-105
            transition-all duration-300
          "
        />
      </div>
    </section>
  );
}

export default Partners;

import React from "react";
import { IMAGES } from "../../Images";
import { Link } from "react-router-dom";

function HomeHero() {
  const home = true;
  return (
    <div
      className={`hero-section ${
        home ? "" : ""
      } flex flex-col items-center justify-center text-center relative`}
      style={{
        backgroundImage: `url(${IMAGES.heroGif})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        
      }}
    >

      {/* Hero Content */}
      <div className="relative z-[2] max-w-[1000px] flex flex-col items-center justify-center text-center  mt-24">
        {/* Badge */}
        <div className="inline-block whitespace-nowrap  bg-[#348E774D] text-white text-[10px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-light font-medium md:font-semibold italic  px-1 py-1 sm:px-3  md:px-4 md:py-2  lg:px-[24px] lg:py-[8px] rounded-full border border-[#348E77]  mb-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 overflow-hidden    shadow-[inset_0px_2px_4px_0px_rgba(0,0,0,0.05)]  backdrop-blur-[4px]">
          <span className="not-italic mr-1">★</span>
          Enterprise-Grade AI THAT <em>Thinks, Sees, Hears, Speaks &amp; Adapts</em>
        </div>

        {/* Heading */}
        <h1 className="heading1">
          TURNING COMPLEXITY INTO <br />
          <span className="block text-center">CLARITY THROUGH AI</span>
        </h1>

        {/* Paragraph */}
        <p className=" leading-5 sm:leading-6 md:leading-8 text-[12px] sm:text-[14px] md:text-[0.9rem] font-normal mb-6 px-2 text-white max-w-[800px] text-center mx-auto">
          Nixense Vixion delivers Intelligent, Scalable AI Solutions – from
          Generative AI to Computer Vision — engineered for speed, adaptability,
          and measurable business value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-8">
          <Link to="/case-studies">
            <button className="group flex items-center justify-center gap-[10px] w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-300 border border-[#2B706D] shadow-[0px_0px_14.1px_2px_#2B6D6B] text-white hover:border-2 hover:border-[#51CBC6]">
              Explore Our Work <span
                  className="
                    inline-flex
                    transition-transform duration-300 ease-in-out
                    rotate-0
                    group-hover:rotate-[45deg]
                    group-hover:translate-x-[2px]
                   "
                >
                  <img
                    src={IMAGES.arrow}   
                    alt="arrow"
                    className="w-[12px] h-[18px] object-contain"
                  />
                </span>
            </button>
          </Link>

          <Link to="/contact-us">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-[18px] bg-[#2E7A77] text-white  shadow-[0px_4px_54px_0px_#00000040]  transition-all duration-300 hover:border-2 hover:border-[#51CBC6]">
              Let’s Talk AI
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;

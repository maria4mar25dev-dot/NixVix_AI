import React from "react";
import { IMAGES } from "../../Images";
import { Link } from "react-router-dom";

function HomeHero() {
  const scrollToAbout = () => {
    const section = document.getElementById("about-section");
    section?.scrollIntoView({ behavior: "smooth" });
  };


  return (

    <div
      className="grid-overlay relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-10 mb-4 sm:mb-8 md:mb-12 lg:mb-14"
      style={{
        backgroundImage: `url(${IMAGES.heroImg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(to_top,_rgba(0,0,0,0.9)_0%,_transparent_90%)]" />

      {/* Content */}
      <div className="relative z-[4] max-w-[1000px] flex flex-col items-center justify-center text-center lg:mt-32" >

        {/* Badge */}
        <div className="inline-block whitespace-nowrap bg-[#348E774D] border border-[#348E77] backdrop-blur-[4px] text-white text-[10px] sm:text-[14px] md:text-[15px] lg:text-[16px] px-2 py-1 sm:px-3 md:px-4 md:py-2 lg:px-6 lg:py-2 rounded-full mb-4">
          <span className="mr-1">★</span>
          E𝙣𝙩𝙚𝙧𝙥𝙧𝙞𝙨𝙚-𝙂𝙧𝙖𝙙𝙚 𝘼𝙄 That 𝙏𝙝𝙞𝙣𝙠𝙨, 𝙎𝙚𝙚𝙨, 𝙃𝙚𝙖𝙧𝙨, 𝙎𝙥𝙚𝙖𝙠𝙨 & 𝘼𝙙𝙖𝙥𝙩𝙨
        </div>

        {/* Heading */}
        <h1 className="heading1">
          Turning Complexity Into Clarity Through AI
        </h1>

        {/* Paragraph */}
        <p className="leading-5 sm:leading-6 md:leading-[24px] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal font-jost text-white mb-6 max-w-[850px]">
          Nixense Vixion delivers Intelligent, Scalable AI Solutions – from
          Generative AI to Computer Vision — engineered for speed, adaptability,
          and measurable business value.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/case-studies" className="w-full sm:w-auto">
            <button className="btext group flex items-center justify-center gap-[10px] w-full sm:w-auto px-6 py-3 rounded-full font-semibold transition-all duration-300 ease-in-out hover:-translate-y-[2px] border border-[#2B706D] shadow-[0px_0px_14.1px_2px_#2B6D6B] text-white hover:border-2 hover:border-[#51CBC6]">
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

          <Link to="/contact-us" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full font-medium text-[15px] lg:text-[17.58px] bg-[#2E7A77] text-white  shadow-[0px_4px_54px_0px_#00000040]  transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:border-2 hover:border-[#51CBC6]">
              Let’s Talk AI
            </button>
          </Link>

        </div>

      </div>
      {/* Arrow at bottom */}
      <div className="absolute bottom-0 sm:-bottom-6 md:-bottom-10 lg:-bottom-24 left-1/2 -translate-x-1/2 z-[4]">
        <img
          src={IMAGES.arrow2}
          alt="arrow"
          onClick={scrollToAbout}
          className="w-[25px] h-[50px] cursor-pointer animate-bounce"
        />
      </div>
    </div>


  );
}

export default HomeHero;

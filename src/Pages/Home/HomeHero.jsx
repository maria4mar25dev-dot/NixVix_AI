import React from "react";
import { IMAGES } from "../../Images";
import { Link } from "react-router-dom";

function HomeHero() {
  const home = true;
  return (
    <div
      className={`hero-section ${
        home ? "grid-overlay" : ""
      } flex flex-col items-center justify-center text-center relative`}
      style={{
        backgroundImage: `url(${IMAGES.heroImg1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <div className="relative z-[2] max-w-[900px] flex flex-col items-center justify-center text-center  mt-24">
        {/* Badge */}
        <div className="inline-block whitespace-nowrap bg-[rgba(27,61,53,0.8)] text-white text-[10px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-inter font-medium md:font-semibold italic px-2 sm:px-3 md:px-4 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2  lg:px-5 lg:py-3 rounded-full border border-[#348E77]  mb-4 mt-6 sm:mt-8 md:mt-10 lg:mt-12 overflow-hidden">
          <span className="not-italic mr-1">★</span>
          Enterprise-Grade AI THAT <em>Thinks, Sees, Hears, Speaks &amp; Adapts</em>
        </div>

        {/* Heading */}
        <h1 className="heading1">
          Turning Complexity Into <br />
          <span className="block text-center">Clarity Through AI</span>
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
            <button className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-300 border border-[#2E7A77] text-white hover:bg-[#27f0d5] hover:text-black">
              Explore Our Work →
            </button>
          </Link>

          <Link to="/contact-us">
            <button className="w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-[15px] bg-[#2E7A77] text-white shadow-[0_4px_54px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-[#27f0d5] hover:text-black">
              Let’s Talk AI
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HomeHero;

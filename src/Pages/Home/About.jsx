import React from 'react';
import { Link } from 'react-router-dom';
import {IMAGES} from '../../Images'

function About() {
  const scrollToAbout = () => {
  const section = document.getElementById("about-section");
  section?.scrollIntoView({ behavior: "smooth" });
};

  return (
    <div>
      {/* Arrow */}
  <div className="flex justify-center mt-24">
    <img
      src={IMAGES.arrow2}
      alt="arrow"
      onClick={scrollToAbout}
      className="w-[35px] h-auto object-contain cursor-pointer   transition-all duration-300 ease-in"
    />
  </div>
   <section
  id="about-section"
  className="px-3 sm:px-5 md:px-10 lg:px-16 py-0 sm:py-16 md:py-24 lg:py-28 bg-transparent"
   >
  {/* CONTENT */}
  <div className="max-w-[1150px] mx-auto text-left">

    <h3 className="subtitle  text-left ">About Us</h3>

    <h2 className="heading2 text-left">
      Pioneering AI That Thinks Beyond Code
    </h2>

    <p
      className="font-inter text-white font-normal mb-6 lg:mb-8 max-w-[1150px]
                 text-[12px] sm:text-[14px] md:text-base lg:text-lg xl:text-xl
                 leading-5 sm:leading-6 md:leading-8 text-left"
    >
      We help businesses identify opportunities and transform them into reality through
      generative, cognitive, and applied AI. Leveraging foundation models, machine learning,
      and multi-agent intelligence, we co-create with domain experts, researchers, and
      stakeholders across every stage of product development — ensuring solutions that are
      explainable, scalable, and production-ready.
    </p>

    {/* Buttons */}
    <div className="flex gap-4 justify-start">
      <Link to="/about">
        <button className="px-6 py-3 rounded-full font-medium text-[18px] bg-[#2E7A77] text-white shadow-[0px_4px_54px_0px_#00000040] transition-all duration-300 ease-in hover:border-2 hover: border-[#51CBC6]">
          Read More
        </button>
      </Link>

      <Link to="/contact-us">
        <button className="group flex items-center justify-center gap-[10px] px-6 py-3 rounded-full font-semibold text-[15px] border border-[#2E7A77] shadow-[0px_0px_14.1px_2px_#2B6D6B] text-white transition-all duration-300 hover:border-2 hover:border-[#51CBC6]">
          Start a Project  <span
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
    </div>

  </div>
</section>
</div>
  );
}

export default About;

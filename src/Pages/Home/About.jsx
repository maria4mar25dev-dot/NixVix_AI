import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className=" px-3 sm:px-5 md:px-10 lg:px-16 py-0 sm:py-16 md:py-24 lg:py-28 bg-transparent">
      <div className="max-w-[1130px] mx-auto text-center">
        
        {/* Subtitle */}
        <h3 className="subtitle ">About Us</h3>

        {/* Main Heading */}
        <h2 className="heading2 ">
          Pioneering AI That Thinks Beyond Code
        </h2>

        {/* Description */}
        <p
          className="font-inter text-white font-normal  mb-6 sm:mb-6 mb:mt-6 lg:mb-8 max-w-[1150px]  text-justify
                      text-[12px] sm:text-[14px] md:text-base lg:text-lg xl:text-xl leading-5 sm:leading-6 md:leading-8
                     [text-align-last:center]"
        >
          We help businesses identify opportunities and transform them into reality through
          generative, cognitive, and applied AI. Leveraging foundation models, machine learning,
          and multi-agent intelligence, we co-create with domain experts, researchers, and
          stakeholders across every stage of product development — ensuring solutions that are
          explainable, scalable, and production-ready.
        </p>

         <Link to="/contact-us">
                   <button className=" mb-8 sm:mb-8 sm:w-auto px-6 py-3 rounded-full font-semibold text-[15px] transition-all duration-300 border border-[#2E7A77] text-white hover:bg-[#27f0d5] hover:text-black">
                     Start a Project →
                   </button>
                 </Link>
      </div>
    </section>
  );
}

export default About;

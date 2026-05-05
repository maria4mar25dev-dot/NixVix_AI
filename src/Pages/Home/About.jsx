import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../Images'

function About() {


  return (
    <section
      id="about-section"
      className="px-[20px] sm:px-[40px] lg:px-16 pt-0 sm:pt-16 md:pt-24 lg:pt-28 bg-transparent"
    >
      {/* CONTENT */}
      <div className="max-w-[1150px] mx-auto text-left">

        <h3 className="subtitle  text-left ">About Us</h3>

        <h2 className="heading2 text-left">
          Pioneering AI That Thinks Beyond Code
        </h2>

        <p
          className=" pheading text-white mb-6 lg:mb-8 max-w-[1150px] font-normal
                 leading-5 sm:leading-6 md:leading-8 text-left"
        >
          We help businesses identify opportunities and transform them into reality through
          generative, cognitive, and applied AI. Leveraging foundation models, machine learning,
          and multi-agent intelligence, we co-create with domain experts, researchers, and
          stakeholders across every stage of product development — ensuring solutions that are
          explainable, scalable, and production-ready.
        </p>

        {/* Buttons */}
        <div className="flex flex-col  gap-4 sm:flex-col  md:flex-row md:justify-start lg:flex-row lg:justify-start">


          <Link to="/contact-us">
            <button className="btext group flex items-center justify-center gap-[10px] px-6 py-3 rounded-full font-semibold border border-[#2E7A77] shadow-[0px_0px_14.1px_2px_#2B6D6B] text-white transition-all duration-300 hover:border-2 hover:border-[#51CBC6]">
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

  );
}

export default About;

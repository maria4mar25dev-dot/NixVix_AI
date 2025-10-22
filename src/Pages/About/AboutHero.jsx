import React from 'react';
import { IMAGES } from '../../Images';

function AboutHero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center text-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${IMAGES.heroImg7})` }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-16  py-10 sm:py-14 md:py-20 lg:py-24  mt-10 sm:mt-16 md:mt-20 lg:mt-24">

        {/* Main Heading */}
        <h1 className="heading1">
          About Us
        </h1>

        {/* Subheading */}
        <h2 className="sub-heading">
          Pioneering AI That Thinks Beyond Code
        </h2>

        <p
          className="font-inter text-white font-normal md:my-5 sm:my-4 my-2 max-w-[1078px] mx-auto text-justify
            text-[12px] sm:text-[14px] md:text-base lg:text-lg xl:text-xl leading-5 sm:leading-6 md:leading-8
             [text-align-last:center]"
        >
          We help businesses identify opportunities and transform them into reality through generative,
          cognitive, and applied AI. Leveraging foundation models, machine learning, and multi-agent
          intelligence, we co-create with domain experts, researchers, and stakeholders across every stage
          of product development — ensuring solutions that are explainable, scalable, and production-ready.
        </p>

      </div>
    </div>
  );
}

export default AboutHero;

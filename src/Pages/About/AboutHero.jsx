import React from 'react';
import { IMAGES } from '../../Images';

function AboutHero() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center text-center px-4 sm:px-6 md:px-10"
      style={{ backgroundImage: `url(${IMAGES.heroImg7})`,
        backgroundSize: "cover",
        backgroundPosition: "center", }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] lg:mt-32">

        {/* Main Heading */}
        <h1 className="heading1">
          About Us
        </h1>

        {/* Subheading */}
        <h2 className="sub-heading">
          Pioneering AI That Thinks Beyond Code
        </h2>

        <p
          className="ptext font-inter text-white font-normal md:my-5 sm:my-4 my-2 max-w-[1078px] mx-auto text-justify
             leading-5 sm:leading-6 md:leading-8
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

import React from "react";
import { IMAGES } from "../../../Images";

function Mission() {
  return (
    <section className="relative overflow-hidden py-0 sm:py-14 md:py-28 lg:py-32 px-[20px] sm:px-[40px] flex justify-center items-center">

      {/* Background Circuit Images */}
      <img
        src={IMAGES.bgRight}
        alt="left bg"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[260px] md:w-[380px] opacity-50 pointer-events-none"
      />

      <img
        src={IMAGES.bgLeft}
        alt="right bg"
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[180px] sm:w-[260px] md:w-[380px] opacity-50 pointer-events-none"
      />

      {/* Glass Card */}
      <div
        className="
          relative
          w-[92%]
          max-w-[1248px]
          backdrop-blur-[8px] bg-[#FFFFFF0D] border-2 border-[#1C1C1C]
          rounded-[30px] md:rounded-full lg:rounded-full
          shadow-[0_0_40px_rgba(0,255,200,0.08)]
          px-6
          sm:px-10
          md:px-20
          py-10
          sm:py-12
          md:py-16
          text-center
        "
      >
        {/* Content */}
        <div className="relative z-10">
          <h2
            className="heading2"
          >
            Our Mission
          </h2>

          <p
            className="pheading text-[#A9A9A9]"
          >
            To redefine what's possible with AI by listening deeply,
            building fearlessly, and scaling responsibly—making
            intelligence accessible, ethical, and impactful.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Mission;

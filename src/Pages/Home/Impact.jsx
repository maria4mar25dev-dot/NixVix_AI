import React from "react";
import { IMAGES } from "../../Images";

function Impact({ solution = false }) {
  return (
    <section
      className="
        relative w-[93%] mx-auto mb-4 sm:mb-8 md:mb-10 lg:mb-12 text-center text-white overflow-hidden
        px-0 sm:px-2 md:px-5
        py-2 sm:py-3 md:py-4
      "
    >
      {/* Left Gradient */}
<div
  className="
    absolute 
    w-[384px] h-[384px]  
    top-[-60px] sm:top-[-70px] md:top-[58px] 
    left-[-100px] sm:left-[-120px] md:left-[-150px] 
    pointer-events-none 
    z-0 
     bg-[#2B706D36]
  backdrop-blur-[134.3px]
  rounded-full


  "
></div>

{/* Right Gradient */}
<div
  className="
    absolute 
    w-[384px] h-[384px] 
  
    top-[50px] sm:top-[70px] md:top-[266px] 
    right-[-100px] sm:right-[-120px] md:right-[-150px] 
    pointer-events-none 
    z-0 
    bg-[#2B706D36]
  backdrop-blur-[134.3px]
  rounded-full


  "
></div>

      {/* Background Element 2 */}
<img
  src={IMAGES.bgElement2}
  alt=""
  className="
    absolute 
    top-[35%] sm:top-[38%] md:top-[40%] 
    left-1/2 
    -translate-x-1/2 -translate-y-1/2 
    w-[90%] sm:w-[95%] md:w-full 
    h-auto 
    opacity-50 
    z-0 
    pointer-events-none 
    blur-sm
  "
/>

{/* Background Element 3 */}
<img
  src={IMAGES.bgElement3}
  alt=""
  className="
    absolute 
    top-[150px] sm:top-[200px] md:top-[250px]  lg:top-[420px] 
    left-[80px] sm:left-[120px] md:left-[160px] 
    w-[120px] sm:w-[160px] md:w-[200px] lg:w-[240px] xl:w-[280px] 
    h-auto 
    opacity-70 
    z-0
    pointer-events-none 
    blur-sm
  "
/>


      {/* Heading */}
      <h2 className="heading2 ">
        The Nixvix Impact
      </h2>

      {/* Stats Box */}
      <div
        className="
          relative z-[1] flex justify-around items-center flex-wrap
          gap-2 sm:gap-3 md:gap-6 lg:gap-8 xl:gap-12
         rounded-[150px]
          px-2 sm:px-4 md:px-10
          py-6 sm:py-8 md:py-10 lg:py-14
          max-w-[90%] mx-auto mt-4 sm:mt-8 md:mt-16 lg:mt-20 mb-4 sm:mb-8 md:mb-12 lg:mb-32
         bg-white/5
         backdrop-blur-[8px] 
         border-2 border-[#1C1C1C]
        "
      >
        {[
          { value: "80+", text: "AI Projects\nDelivered" },
          { value: "70+", text: "Global Clients\nServed" },
          { value: "10+", text: "Years Driving\nAI Innovation" },
          { value: "100%", text: "Client\nSatisfaction" },
        ].map((stat, i) => (
          <div key={i} className="text-center">
            <h3 className="text-[16px] sm:text-[16px] md:text-[1.5rem] lg:text-[1.7rem] xl:text-[2rem] font-bold mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-300 text-[0.5rem] sm:text-[0.6rem] md:text-[0.7rem] lg:text-[0.8rem] xl:text-[0.9rem] leading-snug whitespace-pre-line">
              {stat.text}
            </p>
          </div>
        ))}
      </div>

      {/* Top-right image */}
      <img
        src={IMAGES.bgElement}
        alt=""
        className="absolute top-[10px] right-[-10px] w-[50px] sm:w-[80px] md:w-[100px] lg:w-[110px] xl:w-[120px] opacity-80 pointer-events-none z-[3]"
      />

      {!solution && <VisionMission />}
    </section>
  );
}

function VisionMission() {
  return (
    <section
  className="
    w-[95%] max-w-[1350px] mx-auto 
    my-8 sm:my-10 md:my-20 lg:my-24 
    text-white text-center md:text-left relative z-[5]
  "
>
  <div
    className="
      flex flex-col md:flex-row 
      justify-between sm:gap-2 gap-2
     
    "
  >
    {/* Mission */}
    <div
      className="
        flex-1 max-w-[650px]
        px-3 sm:px-4 md:px-3 lg:px-4 xl:px-4
      "
    >
      <h2
        className="
          text-[16px] sm:text-[16px] md:text-xl lg:text-2xl 
          font-bold mb-3 sm:mb-4 md:mb-5
        "
      >
        Our Mission
      </h2>
      <p
        className="
           text-[#A9A9A9] 
          leading-5 sm:leading-6 md:leading-8 text-[12px] sm:text-[14px] md:text-sm lg:text-base 
        "
      > 
      To redefine what's possible with AI by listening deeply, building fearlessly, and scaling responsibly making intelligence accessible, ethical, and impactful.
      </p>
    </div>

    {/* Vision */}
    <div
      className="
        flex-1 max-w-[650px]
         px-3 sm:px-4 md:px-3 lg:px-4 xl:px-4
      "
    >
      <h2
        className="
          text-[16px] sm:text-[16px] md:text-xl lg:text-2xl 
          font-bold mb-3 sm:mb-4 md:mb-5
        "
      >
        Our Vision
      </h2>
      <p
        className="
          text-[#A9A9A9]
          leading-5 sm:leading-6 md:leading-8 text-[12px] sm:text-[14px] md:text-sm lg:text-base 
        "
      >
        To be the global catalyst for human-centered AI innovation shaping a smarter, more connected future, one algorithm at a time.
      </p>
    </div>
  </div>
</section>

  );
}

export default Impact;

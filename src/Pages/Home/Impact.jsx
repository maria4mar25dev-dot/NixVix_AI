import React from "react";
import { IMAGES } from "../../Images";

function Impact({ solution = false }) {
  return (

    <section className={`relative w-full overflow-hidden  text-white px-[20px] sm:px-[40px] md:px-[40px] mx-auto  max-w-[1360px]
      ${solution ? "pt-20 sm:pt-20 md:pt-28 lg:pt-32 pb-10 sm:pb-10 md:pb-14 lg:pb-16" : "pt-20 sm:pt-20 md:pt-28 lg:pt-32"}`}>

      {/* LEFT GLOW */}
      <div className={`absolute left-[-5%] top-[25%] w-[200px] md:w-[250px] h-[250px] md:h-[350px] bg-[#2B706D] opacity-20 blur-[120px] rounded-full z-[1]`} />

      {/* RIGHT GLOW */}
      <div className={`absolute right-[-5%] top-[40%] w-[200px] md:w-[250px] h-[250px] md:h-[350px] bg-[#2B706D] opacity-20 blur-[120px] rounded-full z-[1]`} />

      {/* CENTER BACKGROUND SHAPE */}
      <img
        src={IMAGES.bgElement2}
        className={`absolute  left-1/2  -translate-x-1/2  ${solution
          ? "top-[70%] -translate-y-1/2"
          : "top-[50%] -translate-y-1/2"
          } opacity-40 blur-[1px] w-[80%] max-w-[900px] z-0`}
        alt=""
      />

      {/* FLOATING OBJECT */}
      <img
        src={IMAGES.bgElement3}
        className={`absolute  ${solution
         ? "left-[15%] top-[90%] -translate-y-1/2"
         : "left-[15%] top-[70%] -translate-y-1/2"
          } w-[120px] md:w-[180px] opacity-80 blur-[1px] z-0`}
        alt=""
      />

      {/* TOP RIGHT ELEMENT */}

      {!solution && (
        <img
          src={IMAGES.bgElement}
          className="absolute right-0 top-[10%] w-[50px] sm:w-[70px] md:w-[100px] opacity-80 z-0"
          alt=""
        />
      )}

      {/* CONTENT */}
      <div className="relative z-[2] ">

        {/* HEADING */}
        <h2 className="heading2 mb-10 md:mb-16 text-left max-w-[1360px] mx-auto ">
          The NixVix Impact
        </h2>

        {/* GLASS STATS CARD */}
        {/* <div className="max-w-[1248px] mx-auto backdrop-blur-[8px] bg-white/5 border-2 border-[#1C1C1C] rounded-[150px]  py-8 md:py-12 flex flex-wrap md:flex-nowrap justify-around items-center gap-6 md:gap-0"> */}
        <div className="
             max-w-[1248px] mx-auto
             backdrop-blur-[2px] bg-white/5 border border-[#1C1C1C]
             rounded-lg md:rounded-[150px] lg:rounded-[150px]
             py-6 sm:py-8 md:py-12 lg:py-14
             grid grid-cols-2 md:grid-cols-4
             gap-6 md:gap-0
             text-center
             ">
          {[
            { value: "80+", text: "AI Projects\nDelivered" },
            { value: "70+", text: "Global Clients\nServed" },
            { value: "10+", text: "Years Driving\nAI Innovation" },
            { value: "100%", text: "Client\nSatisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[35px] xl:text-[35px] font-bold mb-2">
                {stat.value}
              </h3>
              <p className="ptext text-[#A9A9A9]  leading-snug whitespace-pre-line">
                {stat.text}
              </p>
            </div>
          ))}

        </div></div>
      {!solution && <VisionMission />}
    </section>


  );
}

function VisionMission() {
  return (

    <div className="relative z-[10] mt-12 md:mt-24 lg:mt-32 max-w-[1168px] mx-auto grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10 text-left">

      <div>
        <h3 className="pheading font-bold mb-2">
          Our Mission
        </h3>
        <p className="ptext text-[#A9A9A9] leading-relaxed">
          To redefine what's possible with AI by listening deeply, building fearlessly,
          and scaling responsibly making intelligence accessible, ethical, and impactful.
        </p>
      </div>

      <div>
        <h3 className="pheading font-bold mb-2">
          Our Vision
        </h3>
        <p className="ptext text-[#A9A9A9] leading-relaxed">
          To be the global catalyst for human-centered AI innovation shaping a smarter,
          more connected future, one algorithm at a time.
        </p>
      </div>

    </div>
  );
}

export default Impact;

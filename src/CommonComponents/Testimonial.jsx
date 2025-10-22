import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IMAGES } from "../Images";

const testimonials = [
  {
    id: 1,
    text: "Ahmer and the Team NixensEV exceeded all expectations, completing this project. The team is extremely knowledgeable about Machine Learning, Servers, Google Cloud, Python, and went above and beyond to make this project successful. They helped set up the required environment and implemented a solution that is easy to understand and very flexible. Throughout the project, the communication was excellent; whenever needed, Ahmer would offer a meeting to explain things in more detail.",
    name: "DENNIS WANGERIN",
    image: IMAGES.testimonialImg1,
  },
  {
    id: 2,
    text: "Nixense Vision was incredible to work with. They were our go-to team for everything AI and Machine Learning. From bespoke solutions to production-ready systems, their work was consistently top-notch. Truly an A+ partner.",
    name: "JUSTIN MCAULEY",
    image: IMAGES.testimonialImg2,
  },
];

function Testimonial() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const { text, name, image } = testimonials[current];

  return (
    <section className="bg-black text-white text-center px-4 sm:px-6 md:px-10 lg:px-16 my-8 sm:my-10 md:my-10">
      {/* Title */}
      <h3 className="subtitle">Clients</h3>
      <h2 className="heading2">Testimonials</h2>

      {/* Testimonial Card */}
      <div
        className="
           relative mx-auto w-full max-w-[1090px]
    lg:rounded-[50px] md:rounded-[40px] sm:rounded-[30px] rounded-[20px]
    shadow-[0_8px_30px_rgba(0,0,0,0.6)]
    lg:p-10 md:p-8 sm:p-4 p-2
    flex flex-col items-center text-left
    overflow-hidden
        "
      >
        {/* Gradient Border Layer */}
        <div
          className="
            absolute inset-0 rounded-[inherit]  p-[5px] sm:p-[8px] md:p-[10px] lg:p-[15px]
            bg-gradient-to-br from-[#555] via-[#333] to-[#000]
          "
        >
          <div
            className="
              w-full h-full rounded-[inherit]
              bg-gradient-to-br from-[#1c1c1c] via-[#111111] to-[#000000]
            "
          ></div>
           <div
    className="
      absolute inset-0 z-[5]
      bg-cover bg-center opacity-0
      rounded-[inherit] pointer-events-none
    "
    style={{
      backgroundImage: `url(${IMAGES.testimonialBg})`,
    }}
  ></div>
        </div>

        {/* Overlay for smooth lighting */}
<div
  className="
    absolute inset-0
    bg-gradient-to-br
    from-white/10 via-transparent to-black/60
    opacity-70
    mix-blend-soft-light
    pointer-events-none
    rounded-[inherit]
  "
></div>

        {/* Quote Content */}
        <div className="w-full relative z-10">
          <img
            src={IMAGES.quote}
            alt="quote"
            className="block w-5 h-5 md:w-8 md:h-8 sm:w-7 sm:h-7"
          />
          <p
            className="
              text-white font-[Prompt] italic font-extralight sm:font-light md:font-normal px-2 sm:px-3 md:px-5 lg:px-6 text-center
              text-[12px] sm:text-[14px] md:text-[0.85rem] lg:text-[0.95rem]
              leading-[1rem] sm:leading-[1.1rem] md:leading-[1.2rem] lg:leading-[1.6rem]
              tracking-[1px] sm:tracking-[2px] md:tracking-[3px]
            "
          >
            “{text}”
          </p>
        </div>

        {/* Client Info + Arrows */}
        <div
          className="
            flex items-center justify-between mt-1 sm:mt-2 md:mt-3 lg:mt-4
            w-full flex-wrap relative z-10
          "
        >
          {/* Left Button */}
          <button
            onClick={handlePrev}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="text-xs sm:text-xs md:text-xl lg:text-2xl"
            />
          </button>

          {/* Name + Image */}
          <div className="flex flex-col items-center mx-3">
            <img
              src={image}
              alt={name}
              className="
                w-9 h-9 md:w-14 md:h-14 sm:w-12 sm:h-12 xs:w-10 xs:h-10
                rounded-full border-2 sm:border-3 md:border-4 lg:border-4 border-[#27f0d5]
                mb-2
              "
            />
            <p
              className="
                text-[0.7rem] sm:text-[0.75rem] md:text-[0.85rem] lg:text-[0.95rem]
                md:tracking-[5px] sm:tracking-[3px] xs:tracking-[2px]
                text-gray-300
              "
            >
              — {name}
            </p>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-xs sm:text-xs md:text-xl lg:text-2xl"
            />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;

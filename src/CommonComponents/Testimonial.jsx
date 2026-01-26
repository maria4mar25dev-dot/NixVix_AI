import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { IMAGES } from "../Images";

const testimonials = [
  {
    id: 1,
    text: "Nixense Vision was incredible to work with. They were our go-to team for  everything AI and Machine Learning. From bespoke solutions to production-ready  systems, their work was consistently top-notch. Truly an A+ partner.",
    name: "JUSTIN MCAULEY",
    image: IMAGES.testimonialImg1,
    meta: "Head of Product, iBright Studios"
  },
  {
    id: 2,
    text: "Ahmer from Nixense Vision is highly intelligent with strong analytical skills. He handled challenges with a great attitude, delivering quality computer vision solutions quickly and professionally. I highly recommend working with him.",
    name: "KARIM TRIBAK",
    image: IMAGES.testimonialImg2,
    meta: "CTO, Foxtrapp"
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

  const { text, name, image, meta } = testimonials[current];

  return (
    <section className="bg-black text-white text-center px-4 sm:px-6 md:px-10 lg:px-16 my-8 sm:my-10 md:my-10">
      {/* Title */}
      <h3 className="subtitle">Clients</h3>
      <h2 className="heading2">Testimonials</h2>

      <div className="relative rounded-[46px] p-[19px] max-w-[1090px] mx-auto overflow-hidden">
        {/* BORDER */}
        <div
          className="absolute inset-0 rounded-[46px]"
          style={{
            background: `

radial-gradient(
  130% 130% at 0% 0%, 
  rgba(255, 255, 255, 0.3) 30%, 
  rgba(255, 255, 255, 0.01) 100%
)


    
    `,
          }}
        />
        <div
          className="absolute inset-0 rounded-[27px] pointer-events-none"
          style={{
            backgroundImage: `url(${IMAGES.testimonialOverlay})`,
            backgroundRepeat: "repeat",   // scale: tile
            backgroundSize: "auto",
            opacity: 0.2,                 // opacity 20%
            mixBlendMode: "multiply",     // blend: multiply
          }}
        />

        {/* CONTENT */}
        <div className="relative bg-black p-8 rounded-[27px] overflow-hidden">
          {/* TEXTURE IMAGE OVERLAY */}


          <div
            className="absolute inset-0 rounded-[27px] backdrop-blur-[151px]"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(255,255,255,0.22) 1.8%, rgba(254,248,255,0) 100%)",
            }}
          />

   <div
          className="absolute inset-0 rounded-[27px] pointer-events-none"
          style={{
            backgroundImage: `url(${IMAGES.testimonialOverlay})`,
            backgroundRepeat: "repeat",   // scale: tile
            backgroundSize: "auto",
            opacity: 0.2,                 // opacity 20%
            mixBlendMode: "multiply",     // blend: multiply
          }}
        />

          {/* Quote Content */}
          <div className="w-full relative z-10">
            
            <img
              src={IMAGES.quote}
              alt="quote"
              className="block w-5 h-5 md:w-8 md:h-8 sm:w-7 sm:h-7"
            />
            <p
              className="
              text-white font-[Prompt] font-extralight sm:font-light md:font-normal px-2 sm:px-3 md:px-5 lg:px-8 text-center
              text-[12px] sm:text-[14px] md:text-[0.85rem] lg:text-[0.95rem]
              leading-[1rem] sm:leading-[1.1rem] md:leading-[1.2rem] lg:leading-[1.6rem]
              tracking-[1px] sm:tracking-[1px] md:tracking-[1.5px] italic
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
               font-[Inter]
               font-medium
               text-[19px]
               leading-[32px]
               tracking-[0.95px]
               text-center
               uppercase
               text-[#E0E0E0]
              "
              >
                — {name}
              </p>
              <p
                className="
                font-[Inter]
               font-light
               text-[18px]
               leading-[32px]
               tracking-[0px]
               text-center
               text-[#B6BCCC]
              "
              >
                {meta}
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
          </div></div></div>
    </section>
  );
}

export default Testimonial;

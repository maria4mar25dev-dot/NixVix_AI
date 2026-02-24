import React, { useState } from "react";
import { IMAGES } from "../Images";

const testimonials = [
  {
    id: 1,
    text: "Nixense Vision was incredible to work with. They were our go-to team for  everything AI and Machine Learning. From bespoke solutions to production-ready  systems, their work was consistently top-notch. Truly an A+ partner.",
    name: "JUSTIN MCAULEY",
    image: IMAGES.testimonialImg2,
    meta: "Head of Product, iBright Studios"
  },
  {
    id: 2,
    text: "Ahmer from Nixense Vision is highly intelligent with strong analytical skills. He handled challenges with a great attitude, delivering quality computer vision solutions quickly and professionally. I highly recommend working with him.",
    name: "KARIM TRIBAK",
    image: IMAGES.testimonialImg1,
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

      <div
        className="
    relative
    mx-auto
    max-w-[1090px]
    overflow-hidden
    p-[10px] sm:p-[14px] md:p-[18px] lg:p-[22px]
    rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[46px]
  "
      >

        {/* BORDER */}
        <div
          className="absolute inset-0 rounded-inherit"
          style={{
            background: `
      radial-gradient(
        120% 120% at 0% 0%,
        rgba(255,255,255,0.18) 25%,
        rgba(255,255,255,0.01) 100%
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
        <div
          className="
    relative bg-black overflow-hidden
    p-4 sm:p-6 md:p-8

    rounded-[18px] sm:rounded-[24px] md:rounded-[32px] lg:rounded-[36px]
  "
        >

          {/* TEXTURE IMAGE OVERLAY */}
          <div
            className="absolute inset-0 rounded-[27px] backdrop-blur-0"
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
              text-white font-[Prompt] font-extralight sm:font-light md:font-normal px-0 sm:px-3 md:px-5 lg:px-8 text-center
              text-[12px] sm:text-[14px] md:text-[0.85rem] lg:text-[1.1rem]
              leading-[1rem] sm:leading-[1.1rem] md:leading-[1.2rem] lg:leading-[1.6rem]
              tracking-[1px] sm:tracking-[1px] md:tracking-[1.5px] italic mt-6
            "
            >
              “{text}”
            </p>
          </div>

          {/* Client Info + Arrows */}
          <div
            className="
            flex items-center justify-between mt-1 sm:mt-2 md:mt-3 lg:mt-8
            w-full flex-wrap relative z-10
          "
          >
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <img
                src={IMAGES.left}   // import or path to your image
                alt="arrow"
                className="w-3 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-8 lg:h-4"
              />

            </button>
            {/* Name + Image */}
            <div className="flex flex-col items-center mx-3">
              <div
                className="rounded-full p-[1px] sm:p-[2px] md:p-[2px] lg:p-[3px]  mb-2"
                style={{
                  background: `radial-gradient(82.86% 82.86% at 28.57% 17.14%,#2B706D 0%,#2B706D 100% )`,
                }}
              >
                <img
                  src={image}
                  alt={name}
                  className="w-8 h-8 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-[80px] lg:h-[80px] rounded-full object-cover bg-black"
                />
              </div>
              <p
                className="
               font-[Inter]
               font-medium
               text-[12px]
               sm:text-[14px]
               md:text-[16px]
               lg:text-[19px]
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
               text-[11px]
               sm:text-[13px]
               md:text-[16px]
               lg:text-[18px]
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
              <img
                src={IMAGES.right}   // import or path to your image
                alt="arrow"
                className="w-3 h-2 sm:w-3 sm:h-3 md:w-5 md:h-5 lg:w-8 lg:h-4"
              />
            </button>
          </div></div></div>
    </section>
  );
}

export default Testimonial;

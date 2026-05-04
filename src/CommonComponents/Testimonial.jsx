import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { IMAGES } from "../Images";

const testimonials = [
  {
    id: 1,
    text: "Ahmer and the Team NixensEV exceeded all expectations, completing this  project. The team is extremely knowledgeable about Machine Learning,  Servers, Google Cloud, Python, and went above and beyond to make this  project successful. They helped set up the required environment and  implemented a solution that is easy to understand and very flexible.  Throughout the project, the communication was excellent; whenever  needed, Ahmer would offer a meeting to explain things in more detail.",
    name: "DENNIS WANGERIN",
    image: IMAGES.testimonialImg1,
  },
  {
    id: 2,
    text: "Ahmer from Nixense Vision is highly intelligent with strong analytical skills. He handled challenges with a great attitude, delivering quality computer vision solutions quickly and professionally. I highly recommend working with him.",
    name: "KARIM TRIBAK",
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

  const { text, name, image, meta } = testimonials[current];

  return (
    <section className="bg-black text-white text-center px-[20px] sm:px-[40px] md:px-10 lg:px-16 my-8 sm:my-10 md:my-10">
      {/* Title */}
      <h3 className="subtitle">Clients</h3>
      <h2 className="heading2">Testimonials</h2>

      <div
        className="relative mx-auto max-w-[1090px] overflow-hidden p-[10px] sm:p-[14px] md:p-[18px] lg:p-[22px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] lg:rounded-[46px]"
      >

        {/* BORDER */}
        <div
          className="absolute inset-0 rounded-inherit"
          style={{
            background: ` radial-gradient(120% 120% at 0% 0%, rgba(255,255,255,0.18) 25%, rgba(255,255,255,0.01) 100%) `,
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
          className="relative bg-black 
          min-h-[420px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px]
          flex flex-col justify-between
          overflow-hidden p-4 sm:p-6 md:p-8 
          rounded-[18px] sm:rounded-[24px] md:rounded-[32px] lg:rounded-[36px]"
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
          <div className="w-full relative z-10 flex-grow flex flex-col justify-center">

            <img
              src={IMAGES.quote}
              alt="quote"
              className="block w-5 h-5 md:w-8 md:h-8 sm:w-7 sm:h-7"
            />

            <p
              className="ptext text-white font-[Prompt] font-normal px-0 sm:px-3 md:px-5 lg:px-8 text-center leading-[1.3rem] sm:leading-[1.4rem] md:leading-[1.5rem] lg:leading-[1.7rem]  tracking-[0.5px] sm:tracking-[0.8px] md:tracking-[1px]  italic mt-4 overflow-hidden"
            >
              “{text}”
            </p>
          </div>

          {/* Client Info + Arrows */}
          <div
            className="
            flex items-center justify-between  mt-4 sm:mt-6 md:mt-8
            w-full flex-wrap relative z-10
          "
          >
            {/* Left Button */}
            <button
              onClick={handlePrev}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[26px]"
              />
            </button>
            {/* Name + Image */}
            <div className="flex flex-col items-center mx-3">
              <div
                className="rounded-full p-[1px] sm:p-[2px] md:p-[2px] lg:p-[3px]  mb-4"
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
                className="font-[Inter] font-medium text-[12px] sm:text-[14px] md:text-[16px] lg:text-[19px] leading-[32px] tracking-[0.95px] text-center uppercase text-[#E0E0E0]"
              >
                — {name}
              </p>

            </div>

            <button
              onClick={handleNext}
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FontAwesomeIcon
                icon={faArrowRightLong}
                className="text-[16px] md:text-[22px] lg:text-[26px]"
              />
            </button>
          </div></div></div>
    </section>
  );
}

export default Testimonial;

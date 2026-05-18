import React, { useState } from "react";
import { IMAGES } from "../../../Images";

function Stories() {
  const stories = [
    {
      title: "Early Days",
      desc: "We help our clients to conceive business opportunities and envision them by empowering through heuristic and cognitive computations of Machine Learning. We work closely with domain experts, researchers and primary stakeholders of business through different stages of product development.",
    },
    {
      title: "The Problem",
      desc: "We observed inefficiencies in existing systems and found that too much time was spent fixing rather than innovating. This inspired us to create a better way.",
    },
    {
      title: "Our Vision",
      desc: "Our vision is to empower teams with technology that allows them to focus on building and innovating, not constantly repairing broken workflows.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="relative overflow-hidden text-white my-20 sm:my-20 md:my-28 lg:my-32">

      {/* LEFT BG */}
      <img
        src={IMAGES.bgRight}
        alt=""
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-[8%] h-full object-cover
          opacity-70 blur-[0.5px]
          pointer-events-none z-0
          hidden sm:block
        "
      />

      {/* RIGHT BG */}
      <img
        src={IMAGES.bgLeft}
        alt=""
        className="
          absolute right-0 top-1/2 -translate-y-1/2
          w-[8%] h-full object-cover
          opacity-70 blur-[0.5px]
          pointer-events-none z-0
          hidden sm:block
        "
      />

      {/* CONTENT */}
      <div className="
        relative z-[1]
        max-w-[1360px]
        mx-auto
        px-[20px] sm:px-[40px]
        flex flex-col lg:flex-row
        justify-between
       gap-2 sm:gap-6 md:gap-10 lg:gap-16
      ">

        {/* LEFT */}
        <div className="flex-1">

          <h3 className="subtitle text-left mb-2">
            Our Story
          </h3>

          <h2 className="heading2 text-left w-full sm:w-full md:max-w-[500px] mb-0">
            Too much time fixing, not enough time building
          </h2>

        </div>

        {/* RIGHT */}
        <div className="flex-1 w-full">

          {stories.map((story, index) => (
            <div
              key={index}
              className="
                border-b border-[#333]
                py-5
                cursor-pointer
              "
            >
              {/* HEADER */}
              <div
                onClick={() => toggleAccordion(index)}
                className="
                  flex items-center justify-between
                  gap-4
                "
              >

                <h3 className="
                  text-[16px] sm:text-[18px] md:text-[22px]
                  font-semibold
                  tracking-[-0.01em]
                ">
                  {story.title}
                </h3>

                <span
                  className="
                             flex items-center justify-center p-1 sm:p-2 md:p-3
                             w-[24px] h-[24px]
                             rounded-full border-2
                             border border-white   
                             text-[16px] sm:text-[18px] md:text-[22px]
                             font-semibold
                             leading-none
                             transition-all duration-300"
                >
                  {activeIndex === index ? "−" : "+"}
                </span>

              </div>

              {/* CONTENT */}
              <div
                className={`
                  overflow-hidden
                  transition-all duration-500 ease-in-out
                  ${activeIndex === index
                    ? "max-h-[300px] opacity-100 mt-4"
                    : "max-h-0 opacity-0"
                  }
                `}
              >
                <p className="
                  ptext
                  text-white
                  leading-[1.8]
                  tracking-[0.01em]
                  pr-4
                ">
                  {story.desc}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stories;
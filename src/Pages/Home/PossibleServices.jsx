import React from 'react'
import { IMAGES } from "../../Images";
import { Link } from 'react-router-dom';
const services = [
  {
    title: "Generative AI",
    desc: "Generative AI creates new content such as text, images, audio, and video.",
    icon: IMAGES.serviceImg1,
  },
  {
    title: "Computer Vision",
    desc: "Computer Vision enables machines to interpret visual data, understand images and videos.",
    icon: IMAGES.serviceImg2,
  },
  {
    title: "LLMs & Agentic AI",
    desc: "LLMs & Agentic AI power intelligent reasoning and autonomous decision-making.",
    icon: IMAGES.serviceImg3,
  },
  {
    title: "Machine Learning & Predictive Analytics",
    desc: "Machine learning and predictive analytics forecast trends and insights.",
    icon: IMAGES.serviceImg4,
  },
  {
    title: "MLOps, Serverless & Scalable",
    desc: "MLOps & Serverless ensure efficient, scalable AI deployment.",
    icon: IMAGES.serviceImg5,
  },
];
const clipPath =
  "polygon(100% 0, 100% 80%, 80% 100%, 0 100%, 0 0)";
const iconClipPath =
  "polygon(0 0, 100% 0, 100% 80%, 80% 100%, 0 100%)";
const PossibleServices = () => {
  return (
    <section className="bg-black text-white font-inter max-w-[1250px] mx-auto px-4 ">
      {/* Header */}
     <div
  className="
    flex flex-col gap-6
    md:flex-row md:items-center md:justify-between
    mb-10 sm:mb-12 md:mb-14
    text-center md:text-left
    items-center md:items-start
  "
>
        <div >
          <span className="subtitle">Services</span>
          <h2 className="heading2">Redefine What's Possible  With AI</h2>
        </div>
        {/* Button */}
        <Link to="/contact-us">
          <button className="group flex items-center justify-center gap-[10px] px-6 py-3 rounded-full font-semibold text-[15px] border border-[#2E7A77] shadow-[0px_0px_14.1px_2px_#2B6D6B] text-white transition-all duration-300 hover:border-2 hover:border-[#51CBC6]">
            Start a Project<span
              className="
              inline-flex
              transition-transform duration-300 ease-in-out
              rotate-0
              group-hover:rotate-[45deg]
              group-hover:translate-x-[2px]
              "
            >
              <img
                src={IMAGES.arrow}
                alt="arrow"
                className="w-[12px] h-[18px] object-contain"
              />
            </span>
          </button></Link>
      </div>
      {/* Cards */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 md:gap-14 lg:gap-16 ">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative mx-auto 
            w-full
            max-w-[230px]
            sm:max-w-[320px]
            md:max-w-[349px]
            aspect-[349/270] group"
          >
            {/* Icon */}
            <div
              className="
                 absolute
          -top-6
          left-8
          md:left-[34.5px]
          w-[56px] h-[60px]
          md:w-[64px] md:h-[68px]
          lg:w-[70px] lg:h-[75px]
          bg-[#348E77]
          flex items-center justify-center
          z-20
                "
              style={{ clipPath: iconClipPath }}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="lg:w-[34px] lg:h-[42px] md:w-[28px] md:h-[36px] sm:w-[26px] sm:h-[34px] w-[20px] h-[30px] object-contain"
              />
            </div>
            {/* Text Container */}
            <div className="relative
              w-full
              max-w-[230px]      
              sm:max-w-[320px]   
              md:max-w-[349.78px] 
              h-[150px]
              sm:h-[200px]
              md:h-[230.95px]">
              {/* BORDER WRAPPER */}
              <div
                className="absolute inset-0 bg-[#348E77]  pointer-events-none
                transition-all duration-300 ease-in
                group-hover:shadow-[0px_4px_37.9px_0px_#2B706DB0]"
                style={{ clipPath }}
              />
              {/* CONTENT */}
              <div
                className="
                    absolute
                    top-[1px] left-[1px] right-[1px] bottom-[1px]
                    bg-[#050E0B]
                    pt-6 px-3          /* mobile */
                    sm:pt-6 sm:px-4    /* small screens */
                    md:pt-10 md:px-5    /* tablets */
                    lg:pt-10 lg:px-6  transition-all duration-300 ease-in
                    group-hover:border-[1.5px]
                    group-hover:border-[#348E77]
                    group-hover:shadow-[0px_4px_37.9px_0px_#2B706DB0]"
                style={{ clipPath }}
              >
                <h3 className="text-[14px] sm:text-[16px] md:text-[20px] lg:text-[23.96px] font-bold leading-[20px]        /* mobile */
                    sm:leading-[24px]     /* small screens */
                    md:leading-[28px]     /* tablets */
                    lg:leading-[35px]  ">
                  {service.title}
                </h3>
                <p className=" font-medium leading-[18px]          /* mobile */
                      sm:leading-[21px]       /* small screens */
                      md:leading-[24px]       /* tablets */
                      lg:leading-[28.75px]  text-[12px] sm:text-[14px] md:text-[16px]  lg:text-[18px] tracking-[-0.02em] text-white/70">
                  {service.desc}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};



export default PossibleServices

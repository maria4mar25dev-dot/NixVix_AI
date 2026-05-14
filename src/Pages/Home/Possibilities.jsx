import React from 'react'
import { IMAGES } from "../../Images";
import { Link } from 'react-router-dom';

const services = [
  {
    id: 1,
    title: "Generative AI",
    description: "Generative AI creates new content from data.",
    image: IMAGES.item1,
  },
  {
    id: 2,
    title: "Computer Vision",
    description: "Computer Vision enables machines to understand and interpret visual data.",
    image: IMAGES.item2,
  },
  {
    id: 3,
    title: "LLMs & Agentic AI",
    description: "LLMs & Agentic AI power intelligent reasoning and autonomous decision-making.",
    image: IMAGES.item3,
  },
  {
    id: 4,
    title: "Machine Learning & Predictive Analytics",
    description: "Machine Learning & Predictive Analytics predict future trends.",
    image: IMAGES.item4,
  },
  {
    id: 5,
    title: "MLOps, Serverless & Scalable",
    description: "MLOps, Serverless & Scalable ensure efficient, flexible AI deployment.",
    image: IMAGES.item5,
  },
];

function Possibilities() {
  return (
    <div className="max-w-[1360px] mx-auto px-[20px] sm:px-[40px] mt-20 sm:mt-20 md:mt-28 lg:mt-32">

      {/* Top Section */}
      <div className="flex items-center justify-between flex-wrap  mb-8">
        <div>
          <span className="subtitle">Services</span>
          <h2 className="heading2 mb-2 text-left">
            Redefine What's Possible With AI
          </h2>
        </div>

        <Link to="/contact-us">
          <button className="btext group flex items-center mt-2 gap-[10px] px-6 py-3 rounded-full font-semibold border border-[#2E7A77] shadow-[0px_0px_14.1px_2px_#2B6D6B] text-white transition-all duration-300 ease-in-out hover:-translate-y-[2px] hover:border-2 hover:border-[#51CBC6]">
            Start a Project
            <span className="inline-flex transition-transform duration-300 group-hover:rotate-[45deg] group-hover:translate-x-[2px]">
              <img
                src={IMAGES.arrow}
                alt="arrow"
                className="w-[12px] h-[18px] object-contain"
              />
            </span>
          </button>
        </Link>
      </div>

      {/* Grid Section */}
      <div className="w-full aspect-[16/9] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]">

        {services.map((service) => (
          <div
            key={service.id}
            className={`
              relative text-white overflow-hidden border border-[#2B2B2B]
              min-h-[220px] sm:min-h-[260px] md:min-h-[300px] lg:min-h-[383px]

              ${service.id === 2 ? "lg:col-span-2" : ""}
              ${service.id === 3 ? "lg:col-span-2" : ""}
              ${service.id === 5 ? "lg:col-span-3" : ""}
            `}
            style={{
              background: `url(${service.image}) center/cover no-repeat`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

            {/* Circle Icon */}
            <div className="absolute top-6 left-6 w-[10px] h-[10px] border-2 border-white rounded-full z-10" />

            {/* Content */}
            <div className="absolute bottom-6 left-6 z-10">
              <h3 className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[28px] md:leading-[36px] lg:leading-[45px] font-bold font-inter mb-1">
                {service.title}
              </h3>
              <p className="  text-[14px] sm:text-[15px]  md:text-[16px]  lg:text-[17.25px]   md:leading-[26px] lg:leading-[28.75px] font-medium tracking-[-0.02em] font-inter text-white/70">
                {service.description}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Possibilities;
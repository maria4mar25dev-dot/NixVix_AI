import React from 'react'
import { IMAGES } from "../../Images";
const services = [
  {
    id: 1,
    title: "Generative AI",
    description: "Generative AI creates new content from data.",
    image: IMAGES.item1,
    className: "item1",
  },
  {
    id: 2,
    title: "Computer Vision",
    description: "Computer Vision enables machines to understand and interpret visual data.",
    image: IMAGES.item2,
    className: "item2",
    gridSpan: "2 / span 2",
  },
  {
    id: 3,
    title: "LLMs & Agentic AI",
    description: "LLMs & Agentic AI power intelligent reasoning and autonomous decision-making.",
    image: IMAGES.item3,
    className: "item3",
    gridSpan: "1 / span 2",
  },
  {
    id: 4,
    title: "Machine Learning & Predictive Analytics",
    description: "Machine Learning & Predictive Analytics predict future trends.",
    image: IMAGES.item4,
    className: "item4",
  },
  {
    id: 5,
    title: "MLOps, Serverless & Scalable",
    description: "MLOps, Serverless & Scalable ensure efficient, flexible AI deployment.",
    image: IMAGES.item5,
    className: "item5",
    gridSpan: "1 / span 3",
  },
]

function Possibilities() {
  return (
    <div className='mx-[20px] sm:mx-[40px] mt-0 mb-24 sm:mb-20 md:mb-0'>
      <h3 className="subtitle">Services</h3>
        <h2 className="heading2">Redefine what's possible with AI</h2>
    <div className="w-[100%] max-w-[1350px] mx-auto mb-16 my-8 md:my-16 border border-[#2B2B2B] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[150px] sm:auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[360px] gap-[1px]">
  {services.map((service) => (
    <div
      key={service.id}
      className={`relative text-white font-sans overflow-hidden border border-[#2B2B2B] ${service.className}`}
      style={{
        background: `url(${service.image}) center/cover no-repeat`,
        gridColumn: service.gridSpan || "auto",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

      {/* Circle Icon */}
      <div className="absolute top-5 left-5 w-[10px] h-[10px] border-2 border-white rounded-full bg-transparent z-10" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 text-left z-10">
        <h3 className="text-[16px] sm:text-[16px] md:text-xl lg:text-[1rem] xl:text-[1.45rem] font-bold mb-1">{service.title}</h3>
        <p className="text-[12px] sm:text-[14px] md:text-sm lg:text-base xl:text-[1.05rem] text-white/70">{service.description}</p>
      </div>
    </div>
  ))}
</div>

    </div>
  )
}

export default Possibilities

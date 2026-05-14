import React from "react";

function CaseStudyDetail({ activeCase }) {
  if (!activeCase) return null;

  return (
    <div className="relative z-[1] mx-[20px] sm:mx-[40px] md:mx-[30px] lg:mx-[40px] xl:mx-auto  px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 bg-[#0d0f10] text-white rounded-lg md:rounded-[20px] lg:rounded-[20px] border border-[#348E77] shadow-[0_8px_24px_rgba(0,0,0,0.5)] 
      max-w-[1200px]  mb-[50px] sm:mb-[100px] md:mb-[200px] font-inter">

      {/* Title */}
      <h2 className="heading2 text-left  mb-3">
        {activeCase.title}
      </h2>

      {/* Tags */}
      <div className="pheading flex flex-wrap gap-2 text-white mb-4 font-normal">
        {activeCase.tags.map((tag, i) => (
          <span key={i}>{tag}{i < activeCase.tags.length - 1 && " |"}</span>
        ))}
      </div>

      {/* Image */}
      <img
        src={activeCase.img}
        alt={activeCase.title}
        className="w-full aspect-[16/9] object-cover rounded-lg md:rounded-[20px] lg:rounded-[20px] mb-6 border border-[#262626]"
      />

      {/* Details */}
      <div className="bg-[#141618] border border-[#194439] rounded-lg md:rounded-[20px] lg:rounded-[20px] p-4 sm:p-6 md:p-8 leading-relaxed text-gray-300">
        
        {/* Challenge */}
        <h4 className="pheading font-bold  mb-1 text-white">Challenge:</h4>
        <p className="ptext  leading-[22px] sm:leading-[24px] md:leading-[26px] mb-3">
          {activeCase.challenge}
        </p>

        {/* Solution */}
        <h4 className="pheading font-bold  mb-1 text-white">Our Solution:</h4>
        <p className="ptext sm:leading-[24px] md:leading-[26px] mb-3">
          {activeCase.solution}
        </p>

        {/* Tech Stack */}
        <div className="bg-[rgba(12,47,35,0.4)] border border-[#194439] rounded-[30px] px-4 sm:px-6 py-2 sm:py-3 
           font-normal text-white backdrop-blur-md w-full mb-3   text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px]">
          <strong className="text-white mr-2">Tech Stack:</strong>
          {activeCase.tech.join(", ")}
        </div>

        {/* Outcome */}
        <h4 className="pheading font-bold  mb-1 text-white">Outcome:</h4>
        <p className="ptext leading-[22px] sm:leading-[24px] md:leading-[26px]">
          {activeCase.outcome}
        </p>
      </div>
    </div>
  );
}

export default CaseStudyDetail;

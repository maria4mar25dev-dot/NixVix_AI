import React from "react";

function CaseStudyDetail({ activeCase }) {
  if (!activeCase) return null;

  return (
    <div className="relative z-[1] mx-[15px] sm:mx-[20px] md:mx-[30px] lg:mx-[40px] xl:mx-auto -mt-[50px] sm:-mt-[25px] md:mt-0 bg-[#0d0f10] text-white rounded-[20px] border border-[#348E77] shadow-[0_8px_24px_rgba(0,0,0,0.5)] 
      max-w-[1200px] px-4 sm:px-6 md:px-10 lg:px-12 py-6 sm:py-8 md:py-10 mb-[50px] sm:mb-[100px] md:mb-[200px] font-inter">

      {/* Title */}
      <h2 className="heading2 text-left  mb-3">
        {activeCase.title}
      </h2>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 text-gray-400 mb-4 text-sm sm:text-base md:text-base">
        {activeCase.tags.map((tag, i) => (
          <span key={i}>{tag}{i < activeCase.tags.length - 1 && " |"}</span>
        ))}
      </div>

      {/* Image */}
      <img
        src={activeCase.img}
        alt={activeCase.title}
        className="w-full h-[220px] sm:h-[320px] md:h-[420px] lg:h-[500px] object-cover rounded-xl mb-6 border border-[#262626]"
      />

      {/* Details */}
      <div className="bg-[#141618] border border-[#194439] rounded-xl p-4 sm:p-6 md:p-8 leading-relaxed text-gray-300">
        
        {/* Challenge */}
        <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-white">Challenge:</h4>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-3">
          {activeCase.challenge}
        </p>

        {/* Solution */}
        <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-white">Our Solution:</h4>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px] mb-3">
          {activeCase.solution}
        </p>

        {/* Tech Stack */}
        <div className="bg-[rgba(12,47,35,0.4)] border border-[#194439] rounded-[30px] px-4 sm:px-6 py-2 sm:py-3 
          text-[13px] sm:text-[15px] md:text-[16px] font-medium text-white backdrop-blur-md inline-block mb-3">
          <strong className="text-white mr-2">Tech Stack:</strong>
          {activeCase.tech.join(", ")}
        </div>

        {/* Outcome */}
        <h4 className="font-semibold text-base sm:text-lg md:text-xl mb-1 text-white">Outcome:</h4>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[24px] md:leading-[26px]">
          {activeCase.outcome}
        </p>
      </div>
    </div>
  );
}

export default CaseStudyDetail;

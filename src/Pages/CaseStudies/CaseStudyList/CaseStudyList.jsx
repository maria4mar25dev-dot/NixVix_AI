import React from "react";

function CaseStudyList({ caseData, activeCase, setActiveCase, showHeader }) {
  return (
    <div className="text-white">
      {showHeader && (
        <div className="w-[78%] mx-auto mb-6">
          <h3 className="subtitle">
            Portfolio
          </h3>
         
            <h2 className="heading2">
              Case Studies
            </h2>
        
        </div>
      )}

      {/* Cards Section */}
      <div className="flex flex-wrap justify-center gap-6 max-w-[1300px] mx-auto mb-6 sm:mb-10 md:my-12 ">
        {caseData.map((item, i) => {
          const isActive = activeCase?.title === item.title;

          return (
            <div
              key={i}
              onClick={() => setActiveCase?.(item)}
              className={`w-[300px] sm:w-[360px] md:w-[380px] bg-[#080808] rounded-2xl overflow-hidden flex flex-col relative cursor-pointer transition-all duration-300 border border-transparent hover:border-[#348E77] hover:shadow-[0_6px_20px_rgba(52,142,119,0.3)] ${
                isActive ? "border-[#27f0d5]" : ""
              }`}
            >
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-[200px] object-cover rounded-t-2xl mb-2 sm:mb-3 md:mb-5"
              />

              {/* Tags */}
              <div className="flex  flex-wrap  gap-2  px-2 sm:px-3 md:px-4 mb-3">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="bg-[#181818] text-[#E4E4E4]  text-[0.65rem] sm:text-xs md:text-[0.85rem]  px-1 sm:px-2 md:px-3 py-1 rounded-md"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className=" px-2 sm:px-3 md:px-4  text-[16px] sm:text-[16px] md:text-lg font-semibold text-white mb-1 leading-6">
                {item.title}
              </h3>

              {/* Description */}
              <p className=" px-2 sm:px-3 md:px-4 text-[12px] sm:text-[14px] md:text-sm text-[#C6C6C6] mb-4 sm:mb-4 md:mb-5 leading-relaxed">
                {item.outcome || item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CaseStudyList;

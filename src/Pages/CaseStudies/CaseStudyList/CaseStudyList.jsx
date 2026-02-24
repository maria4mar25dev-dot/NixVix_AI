import React from "react";
import { IMAGES } from "../../../Images";
import { useNavigate } from "react-router-dom";
function CaseStudyList({ caseData, activeCase, setActiveCase, showHeader }) {
    const navigate = useNavigate();

  const handleClick = (item) => {
    setActiveCase?.(item);

    // Navigate to Case Studies page
    navigate("/case-studies");
  };
  return (
    <div className="text-white">
      {showHeader && (
        <div className="w-[78%] mx-auto mb-8 flex items-center justify-between">

          {/* Left: Heading */}
          <div>
            <h3 className="subtitle text-left">Work</h3>
            <h2 className="heading2">Case Studies</h2>
          </div>

          {/* Right: Navigation Buttons */}
          <div className="flex gap-3">
            <button
              className="bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#6AFFD9]/10 transition"
            >
              <img
                src={IMAGES.rightArrow}
                alt="Previous"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>

            <button
              className=" bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#6AFFD9]/10 transition"
            >
              <img
                src={IMAGES.leftArrow}
                alt="Next"
                className="w-4 h-4 sm:w-5 sm:h-5"
              />
            </button>
          </div>

        </div>
      )}


      {/* Cards Section */}

      <div className="flex flex-wrap justify-center gap-6 max-w-[1300px] mx-auto mb-6 sm:mb-10 md:my-12 ">
        {caseData.map((item, i) => {
          const isActive = activeCase?.title === item.title;
          return (
            <div key={item.title}
              className={` p-[1px] rounded-2xl transition-all duration-300
               ${isActive
                  ? "bg-[linear-gradient(to_bottom,#66DFD9_0%,rgba(43,112,109,0)_100%)]"
                  : "bg-transparent hover:bg-[linear-gradient(to_bottom,#66DFD9_0%,rgba(43,112,109,0)_100%)]"
                }
             `}
            >
              <div
                onClick={() => handleClick(item)}
                className={`w-[300px] sm:w-[360px] md:w-[380px] bg-[#080808] rounded-2xl overflow-hidden flex flex-col relative cursor-pointer transition-all duration-300 border border-transparent hover:shadow-[0_6px_20px_rgba(52,142,119,0.3)] ${
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
                      className="bg-[#181818] font-normal text-[#E4E4E4]  text-[11px] sm:text-[13px] md:text-[15px]  px-1 sm:px-2 md:px-3 py-1 rounded-[8px]"
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
                <p className=" px-2 sm:px-3 md:px-4 text-[12px] sm:text-[14px] md:text-[17px] text-[#C6C6C6] mb-4 sm:mb-4 md:mb-5 leading-relaxed">
                  {item.outcome || item.desc}
                </p>
                <div className="px-4 sm:px-3 md:px-4 pb-4">
                  <div className="h-[1px] w-full bg-[linear-gradient(90deg,rgba(43,112,109,0)_0%,#66DFD9_50%,rgba(43,112,109,0)_100%)]"></div>
                </div>
              </div></div>
          );
        })}
      </div>
    </div>
  );
}

export default CaseStudyList;

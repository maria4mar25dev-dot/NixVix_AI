import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
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
        <div className="max-w-[1250px] mx-auto flex items-center px-[20px] sm:px-[40px] justify-between  mt-16 sm:mt-16 md:mt-24 lg:mt-28">

          {/* Left: Heading */}
          <div>
            <h3 className="subtitle text-left">Portfolio</h3>
            <h2 className="heading2">Case Studies</h2>
          </div>

          {/* Right: Navigation Buttons */}
          <div className="flex gap-3">
            <button
              className="bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#6AFFD9]/10 transition"
            >
              <FontAwesomeIcon
                        icon={faArrowLeft}
                        className="text-[#6AFFD9] text-sm "
                        />
            </button>

            <button
              className=" bg-[#0D0F0C] border-2 border-[#6AFFD9] text-[#6AFFD9] rounded-full w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center hover:bg-[#6AFFD9]/10 transition"
            >
              <FontAwesomeIcon
                        icon={faArrowRight}
                        className="text-[#6AFFD9] text-sm "
                        />
            </button>
          </div>

        </div>
      )}


      {/* Cards Section */}

      <div className="px-[20px] sm:px-[40px] grid grid-cols-1  sm:grid-cols-2  lg:grid-cols-3 gap-6  max-w-[1250px]  mx-auto mb-6 sm:mb-10 md:my-4  items-stretch">
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
                className={`w-full h-full bg-[#080808] rounded-2xl overflow-hidden flex flex-col relative cursor-pointer transition-all duration-300 border border-transparent hover:shadow-[0_6px_20px_rgba(52,142,119,0.3)] ${
                  isActive ? "border-[#27f0d5]" : ""
                }`}
              >
                {/* Image */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[200px] object-cover rounded-t-2xl "
                />

                 <div className="flex flex-col flex-grow px-2 sm:px-3 md:px-4 py-3">

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3 min-h-[48px]">
                    {item.tags.map((tag, j) => (
                      <span
                        key={j}
                        className="btext bg-[#181818] text-[#E4E4E4] px-2 py-1 rounded-[8px]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="ptext font-semibold text-white mb-2 leading-6">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="btext text-[#C6C6C6] leading-relaxed">
                    {item.outcome || item.desc}
                  </p>

                  {/* Bottom Divider */}
                  <div className="mt-auto pt-4">
                    <div className="h-[1px] w-full bg-[linear-gradient(90deg,rgba(43,112,109,0)_0%,#66DFD9_50%,rgba(43,112,109,0)_100%)]"></div>
                  </div>

                </div>
              </div></div>
          );
        })}
      </div>
    </div>
  );
}

export default CaseStudyList;

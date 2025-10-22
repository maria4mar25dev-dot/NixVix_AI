import React, { useState, useRef  } from "react";
import CaseStudyDetail from "./CaseStudyDetail";
import CaseStudyList from "./CaseStudyList";
import {caseData} from './CaseStudyData'

function CaseStudyParent() {
  
const [activeCase, setActiveCase] = useState(caseData[0]);
  const detailRef = useRef(null);

  // Scroll handler
  const handleCaseClick = (item) => {
    setActiveCase(item);
    // Smooth scroll to the details section
    setTimeout(() => {
      detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100); // slight delay ensures component renders first
  };


  return (
    <div className="case-study-wrapper">
      {/* Detail Section */}
      <div ref={detailRef}>
      <CaseStudyDetail activeCase={activeCase} /></div>

      {/* Cards Section */}
      <CaseStudyList
        caseData={caseData}
        activeCase={activeCase}
        setActiveCase={handleCaseClick}
      />
    </div>
  );
}

export default CaseStudyParent;

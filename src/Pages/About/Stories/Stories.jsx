import React, { useState } from "react";
import "./Stories.css";
import { IMAGES } from "../../../Images"; 

function Stories() {
  const stories = [
    {
      title: "Early Days",
      desc: "We help our clients to conceive business opportunities and envision them by empowering through heuristic and cognitive computations of Machine Learning. We work closely with domain experts, researchers and primary stakeholders of business through different stages of product development."
    },
    {
      title: "The Problem",
      desc: "We observed inefficiencies in existing systems and found that too much time was spent fixing rather than innovating. This inspired us to create a better way."
    },
    {
      title: "Our Vision",
      desc: "Our vision is to empower teams with technology that allows them to focus on building and innovating, not constantly repairing broken workflows."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="ourstory-section">
      <img src={IMAGES.bgRight} alt="left decoration" className="ourstory-bg-left" />
      <img src={IMAGES.bgLeft} alt="right decoration" className="ourstory-bg-right" />

      <div className="ourstory-container">
        {/* Left side */}
        <div className="ourstory-left">
          <h3 className="subtitle" style={{marginTop:"6vh", textAlign:"left"}}>Our Story</h3>
          <h2 className="heading2"  style={{ textAlign:"left"}}>
            Too much time 
            fixing, not enough
            time building
          </h2>
        </div>

        {/* Right side */}
        <div className="ourstory-right">
          {stories.map((story, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => toggleAccordion(index)}
              >
                <h3>{story.title}</h3>
                <span className="icon">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </div>
              {activeIndex === index && (
                <p className="accordion-content">{story.desc}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stories;

import React from "react";
import "./WorkFlow.css";
import {IMAGES} from '../../../Images'

function Workflow() {
  const steps = [
    { icon: IMAGES.workflowImg1, title: "Requirements" },
    { icon: IMAGES.workflowImg2, title: "Feasibility Study" },
    { icon: IMAGES.workflowImg3, title: "Prototyping\nand Validation" },
    { icon: IMAGES.workflowImg4, title: "Product Development" },
    { icon: IMAGES.workflowImg5, title: "Deployment" },
    { icon: IMAGES.workflowImg6, title: "Continuous Improvements" },
  ];

  return (
    <div className="outer-container my-20 sm:my-20 md:my-28 lg:my-32">
    <section className="workflow-section">
      <div className="workflow-header w-full max-w-[1360px] mx-auto px-[20px] sm:px-[40px]">
        <p className="subtitle text-left">Process</p>
        <h2 className="heading2 text-left">The NixVix Workflow</h2>
      </div>

      <div className="workflow-steps py-0 sm:py-0 md:py-28 lg:py-32"  style={{
    backgroundImage: `url(${IMAGES.workflowbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}>
        {steps.map((step, idx) => (
          <div className="workflow-item" key={idx}>
            <div className="circle">
              <img src={step.icon} alt={step.title} />
            </div>
            <p className="ptext workflow-text">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Workflow;

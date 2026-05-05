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
    <div className="outer-container py-8 sm:py-8 md:py-12 lg:py-14 my-8 sm:my-8 md:my-12 lg:my-14"
    
    style={{
    backgroundImage: `url(${IMAGES.workflowbg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  }}
    >
    <section className="workflow-section">
      <div className="workflow-header">
        <p className="subtitle">Process</p>
        <h2 className="heading2">The NixVix Workflow</h2>
      </div>

      <div className="workflow-steps">
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

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
    <div className="outer-container"
    
      style={{
    backgroundImage: `linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.93) 0%,
        rgba(26, 49, 43, 0.9) 70%,
        rgba(0, 0, 0, 1) 100%
      ), url(${IMAGES.workflowBackground})`,
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
            <p className="workflow-text">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default Workflow;

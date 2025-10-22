import React from "react";
import "./Mission.css";
import { IMAGES } from "../../../Images"; // your centralized image imports

function Mission() {
  return (
    <section className="mission-section">
      <img src={IMAGES.bgRight} alt="left bg" className="mission-bg-left" />
      <img src={IMAGES.bgLeft} alt="right bg" className="mission-bg-right" />
      <div className="mission-card">
        <h2 className="heading2 mb-2 sm:mb-4 md:mb-6">Our Mission</h2>
        <p className="mission-text">
          To redefine what's possible with AI by listening deeply, building fearlessly, 
          and scaling responsibly—making intelligence accessible, ethical, and impactful.
        </p>
      </div>
    </section>
  );
}

export default Mission;

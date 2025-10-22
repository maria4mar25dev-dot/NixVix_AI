import React from "react";
import { IMAGES } from "../../Images";

function TeamMembers() {
  const teamMembers = [
    {
      name: "Karim Taribak",
      designation: "Foxtrap",
      image: IMAGES.teamMember1,
      linkedin: "https://www.linkedin.com/in/karim-tribak-77605713/",
    },
    {
      name: "Munish Sharma",
      designation: "WSIB",
      image: IMAGES.teamMember2,
      linkedin: "https://www.linkedin.com/in/munish-sharma/",
    },
    {
      name: "Braum Katz",
      designation: "360Bonsai",
      image: IMAGES.teamMember3,
      linkedin: "https://www.linkedin.com/in/braum/",
    },
    {
      name: "Tim Eller",
      designation: "dycd",
      image: IMAGES.teamMember5,
      linkedin: "https://www.linkedin.com/in/tim-eller/",
    },
  ];

  return (
    <section
      className="
        text-center text-white bg-black
        px-6 sm:px-10 md:mt-14 sm:mt-6 mt-6
      "
    >
      {/* Subtitle */}
      <p className="subtitle">Our Team</p>

      {/* Title */}
      <h2
        className="heading2"
      >
        Behind the Tech
      </h2>

      {/* Team Container */}
      <div
        className="
          flex flex-wrap justify-center
          gap-x-20 gap-y-12
          max-w-[1100px] mx-auto
        "
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="
              bg-white/5 rounded-lg overflow-hidden text-center
              w-[280px] relative pb-6
              transition-all duration-300 ease-in-out
               hover:shadow-[0_4px_20px_rgba(0,255,200,0.1)]
              sm:w-[240px] md:w-[260px] lg:w-[280px]
            "
          >
            {/* Image */}
            <div className="relative w-full overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-auto block rounded-t-lg"
              />

              {/* LinkedIn Icon */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  absolute top-3 right-3 rounded-md
                  hover:scale-110 hover:opacity-90 transition-all duration-300 
                "
              >
                <img
                  src={IMAGES.LinkedIn}
                  alt="LinkedIn"
                  className="w-[22px] h-[22px] object-cover rounded-sm"
                />
              </a>
            </div>

            {/* Text */}
            <h3 className="mt-3  text-[16px] sm:text-[16px] md:text-[1.1rem] font-semibold text-[#EEF9F0]">
              {member.name}
            </h3>
            <p className="mt-1  text-[12px] sm:text-[14px] md:text-[0.9rem] text-[#348E77]">
              {member.designation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamMembers;

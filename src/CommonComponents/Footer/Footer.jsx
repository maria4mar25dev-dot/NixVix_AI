import React from "react";
import { IMAGES } from "../../Images";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
  <div className=" border-t border-[#348E77] rounded-t-xl bg-gradient-to-br from-[#2B706D25] via-[#2B706D20] to-[#2B706D10] backdrop-blur-[64px]">


<footer className=" backdrop-blur-[64px] p-6 shadow-lg ">


    {/* Top Line */}
<div className="h-[1px] mb-8 w-full bg-gradient-to-r from-transparent via-[#2B706D] to-transparent" />

    {/* Main Sections */}
    <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row md:justify-between gap-10 md:gap-8 text-center md:text-left">

  {/* LEFT - LINKS */}
<div className="order-2 md:order-1">
  <h4 className="text-[#2B706D] font-semibold uppercase tracking-wide mb-3 text-sm sm:text-base text-center md:text-left">
    LINKS
  </h4>

  {/* Horizontal on small, vertical on md+ */}
  <div className="flex flex-wrap justify-center md:flex-col md:justify-start gap-4 md:gap-2 font-light text-sm sm:text-[15px]">
    <Link to="/" className="hover:text-[#B14A1C] transition">
      Home
    </Link>
    <Link to="/about" className="hover:text-[#B14A1C] transition">
      About
    </Link>
    <Link to="/services" className="hover:text-[#B14A1C] transition">
      Services
    </Link>
    <Link to="/solutions" className="hover:text-[#B14A1C] transition">
      Solutions
    </Link>
  </div>
</div>


      {/* CENTER - LOGO */}
      <div className="order-1 md:order-2 max-w-[380px] mx-auto space-y-4">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <img
            src={IMAGES.logo}
            alt="Nixense Vixion"
            className="w-[50px] h-[40px] sm:w-[60px] sm:h-[50px] object-contain"
          />
          <span className="text-lg sm:text-xl font-bold leading-tight">
            Nixense Vixion
          </span>
        </div>

        <p className="text-gray-200 text-sm sm:text-[15px] leading-relaxed font-light">
          To be the global catalyst for human-centered AI innovation —
          shaping a smarter, more connected future.
        </p>
      </div>

     {/* RIGHT - CONTACT */}
<div className="order-3 space-y-3 text-gray-300">
  <h4 className="text-[#2B706D] font-semibold uppercase tracking-wide mb-3 text-sm sm:text-base text-center md:text-left">
    Contact
  </h4>

  {/* Horizontal on small, vertical on md+ */}
  <div className="flex flex-wrap justify-center md:flex-col md:justify-start gap-4 md:gap-3 text-sm sm:text-[15px] font-light">

    <div className="flex items-center gap-2">
      <img src={IMAGES.locationIcon} className="w-4 h-4"  alt="location"/>
      <span>Lahore</span>
    </div>

    <div className="flex items-center gap-2">
      <img src={IMAGES.contactIcon} className="w-4 h-4"  alt="contact"/>
      <span>+92 307 5741522</span>
    </div>

    <div className="flex items-center gap-2">
      <img src={IMAGES.emailIcon} className="w-4 h-4"  alt="email" />
      <span>hello@nixvix.ai</span>
    </div>

  </div>
</div>


    </div>
<div className="max-w-[1100px] mx-auto border-t border-white/10 pt-4 flex justify-between items-center">

  <div className="text-gray-500 text-xs">
    © {new Date().getFullYear()} Nixense Vixion.
  </div>

  <button
    className="bg-[#2B706D] hover:bg-[#348E77] w-10 h-10 rounded-full flex items-center justify-center shadow-md transition"
    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  >
    <svg viewBox="0 0 24 24" width="16" height="16">
      <path fill="currentColor" d="M12 4l-8 8h5v8h6v-8h5z" />
    </svg>
  </button>

</div>


  </footer>
</div>


  );
}

export default Footer;


// import React from "react";
// import { IMAGES } from "../../Images";

// function Footer() {
//   return (
//     <footer className="bg-black text-white border-t border-[#2B706D] px-6 md:px-16 py-12">

//       <div className="max-w-[1200px] mx-auto">

//         {/* Top Section */}
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">

//           {/* Left Content */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-semibold">
//               Contact
//             </h2>
//             <p className="text-gray-400 mt-2 text-sm md:text-base">
//               Let’s Build the Future of AI Together
//             </p>
//           </div>

//           {/* Button */}
//           <button
//             className="
//               bg-[#2B706D]
//               hover:bg-[#348E77]
//               px-6 py-2
//               rounded-full
//               text-sm md:text-base
//               transition
//             "
//           >
//             More Info
//           </button>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 mb-8"></div>

//         {/* Contact Info Section */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {/* Email */}
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full   bg-[#2B706D] flex items-center justify-center">
//               <img
//                 src={IMAGES.emailIcon}
//                 alt="email"
//                 className="w-5 h-5 object-contain"
//               />
//             </div>
//             <p className="text-gray-300 text-sm md:text-base">
//               Email: hello@nixvix.ai
//             </p>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full   bg-[#2B706D] flex items-center justify-center">
//               <img
//                 src={IMAGES.contactIcon}
//                 alt="phone"
//                 className="w-5 h-5 object-contain"
//               />
//             </div>
//             <p className="text-gray-300 text-sm md:text-base">
//               Phone: +1 (234) 567-8910
//             </p>
//           </div>

//           {/* Location */}
//           <div className="flex items-center gap-4">
//             <div className="w-10 h-10 rounded-full   bg-[#2B706D] flex items-center justify-center">
//               <img
//                 src={IMAGES.locationIcon}
//                 alt="location"
//                 className="w-5 h-5 object-contain"
//               />
//             </div>
//             <p className="text-gray-300 text-sm md:text-base">
//               Location: Lahore, Pakistan
//             </p>
//           </div>

//         </div>

//       </div>
//     </footer>
//   );
// }

// export default Footer;

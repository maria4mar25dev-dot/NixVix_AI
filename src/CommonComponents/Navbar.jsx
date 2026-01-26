import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { IMAGES } from "../Images";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { path: "/", name: "Home" },
    // { path: "/about", name: "About" },
    { path: "/services", name: "Services" },
    { path: "/techstack", name: "Tech Stack" },
    { path: "/solutions", name: "Solutions" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#040B0B] border-b border-[#212423] shadow-[0_1px_6px_rgba(0,0,0,0.4)] z-50">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto px-6 py-3">

        {/* Logo */}
        <div className="flex-shrink-0">
          <img
            src={IMAGES.logo}
            alt="Logo"
            className=" w-[50px] h-[40px]          /* Base: Mobile */
            sm:w-[60px] sm:h-[50px]    /* Small screens ≥ 640px */
            md:w-[70px] md:h-[60px]    /* Medium screens ≥ 768px */
            lg:w-[85px] lg:h-[75px]   /* Large screens ≥ 1024px */
            xl:w-[85px] xl:h-[75px] object-contain"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center  md:gap-[0.5rem] lg:gap-10">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-white font-roboto text-[17px] relative py-1 px-2 transition-all duration-300 ${isActive
                  ? "text-[#B14A1C] after:w-[120%] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-[-6px] after:h-[1.2px] after:bg-[#B14A1C]"
                  : "hover:text-[#B14A1C]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Button */}
        <Link to="/contact-us" className="hidden md:block">
          <button className="bg-[#B14A1C] text-white font-inter  px-3 py-2 sm:px-4 sm:py-2.5 md:px-5 md:py-2.5 lg:px-6 lg:py-3  rounded-full text-sm sm:text-base md:text-[0.7rem] lg:text-[1.1rem]  font-medium transition-transform duration-200 hover:scale-110 active:scale-95">
            Let’s Talk AI
          </button>
        </Link>

        {/* Hamburger Icon */}
        <FontAwesomeIcon
          icon={isOpen ? faTimes : faBars}
          size="lg"
          className="text-white cursor-pointer transition-transform duration-200 hover:text-[#B14A1C] hover:scale-110 md:hidden"
          onClick={toggleMenu}
        />
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute right-6 top-[70px] w-[230px] bg-[#111]/90 backdrop-blur-xl rounded-lg overflow-hidden flex flex-col transition-all duration-300 ${isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-3"
          }`}
      >
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            onClick={() => setIsOpen(false)}
            className="py-2 text-center font-light text-[16px] text-white hover:text-[#B14A1C] transition-colors duration-200 border-b border-white/10"
          >
            {link.name}
          </NavLink>
        ))}
        <div className="flex justify-center py-3">
          <Link to="/contact-us" onClick={() => setIsOpen(false)}>
            <button className="bg-[#B14A1C] font-light text-white font-inter px-3 py-1 rounded-full text-[16px] font-medium w-full transition-transform duration-200 hover:scale-105 active:scale-95">
              Let’s Talk AI
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

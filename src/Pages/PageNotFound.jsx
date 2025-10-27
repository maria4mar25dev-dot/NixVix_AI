// src/Pages/NotFound/NotFound.jsx
import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#000000] text-white text-center px-4">
      <h1 className="text-6xl font-bold mb-4 text-[#27f0d5]">404</h1>
      <p className="text-lg mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="px-6 py-3 bg-[#27f0d5] text-black rounded-lg font-semibold hover:bg-[#20c7ac] transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}

export default PageNotFound;

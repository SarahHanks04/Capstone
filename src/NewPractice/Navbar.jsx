import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#FAF4F4] text-black py-4 px-4 md:px-16 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl md:text-3xl font-bold">Feedback Form</h1>

      {/* Hamburger Button for Small Screens */}
      <button
        onClick={toggleMenu}
        className="text-2xl md:hidden focus:outline-none"
        aria-label="Toggle Menu"
      >
        ☰
      </button>

      {/* Links */}
      <div
        className={`absolute md:static bg-[#FAF4F4] top-16 left-0 w-full md:w-auto md:flex md:items-center space-y-4 md:space-y-0 md:space-x-8 text-lg ${
          isMenuOpen ? "block" : "hidden"
        }`}
      >
        <Link
          to="/complaint"
          className="block md:inline hover:text-blue-400 px-4 md:px-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Complaint
        </Link>
        <Link
          to="/"
          className="block md:inline hover:text-blue-400 px-4 md:px-0"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block md:inline hover:text-blue-400 px-4 md:px-0"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Feedback Form</h1>
      <div className="space-x-4">
        <Link to="/complaint" className="hover:text-blue-400">
          Complaint
        </Link>
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

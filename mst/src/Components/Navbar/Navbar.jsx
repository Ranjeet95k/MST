import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.webp";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center text-white text-xl">
          <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
          MST
        </Link>

        <button className="lg:hidden text-white" onClick={toggleMenu}>
          &#9776;
        </button>
        <div className={`lg:flex space-x-4 ${isMenuOpen ? "block" : "hidden"}`}>
          <Link to="/" className="text-white hover:text-yellow-400">
            Home
          </Link>
          <Link to="/events" className="text-white hover:text-yellow-400">
            Events
          </Link>
          <Link to="/gallery" className="text-white hover:text-yellow-400">
            Gallery
          </Link>
          <Link to="/highlights" className="text-white hover:text-yellow-400">
            Highlights
          </Link>
          <Link to="/teams" className="text-white hover:text-yellow-400">
            Teams
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

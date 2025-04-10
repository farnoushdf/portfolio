import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "./../assets/fndf-logo.webp"; // Adjust the path to your logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-8 w-8 mr-2 rounded-full"
            />
            <Link to="/" className="text-xl font-bold text-gray-800">
              Farnoush Daliran
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-600"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About Me
            </Link>
            <Link to="/projects" className="text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link to="/skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </Link>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="block px-3 py-2 text-gray-600 hover:text-gray-900"
            >
              Skills
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

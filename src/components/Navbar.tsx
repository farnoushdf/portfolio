import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../assets/fndf-logo.svg";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed z-10 w-full border-b border-stone-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
            <Link to="/" className="text-xl font-bold text-stone-900">
              Farnoush Daliran
            </Link>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-md p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-900"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <Link to="/about" className="text-stone-600 hover:text-emerald-700">
              About Me
            </Link>
            <Link
              to="/projects"
              className="text-stone-600 hover:text-emerald-700"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              className="text-stone-600 hover:text-emerald-700"
            >
              Skills
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=farnoushfdf@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-stone-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-700"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-stone-600 hover:text-emerald-700"
            >
              About Me
            </Link>
            <Link
              to="/projects"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-stone-600 hover:text-emerald-700"
            >
              Projects
            </Link>
            <Link
              to="/skills"
              onClick={() => setIsMenuOpen(false)}
              className="block px-4 py-2 text-stone-600 hover:text-emerald-700"
            >
              Skills
            </Link>
            <a
              href="mailto:farnoushfdf@gmail.com"
              className="block px-4 py-2 text-stone-600 hover:text-emerald-700"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

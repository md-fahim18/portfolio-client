import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          MyAgency
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-gray-700 hover:text-primary font-medium">
            Home
          </Link>
          <Link to="/projects" className="text-gray-700 hover:text-primary font-medium">
            Projects
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-primary font-medium">
            Services
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary font-medium">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 flex flex-col gap-4">
          <Link to="/" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">
            Home
          </Link>
          <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">
            Projects
          </Link>
          <Link to="/services" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">
            Services
          </Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

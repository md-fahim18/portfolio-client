import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-12">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} MyAgency. All rights reserved.</p>

        <div className="flex space-x-4">
          <Link to="/" className="hover:text-primary text-sm">
            Home
          </Link>
          <Link to="/projects" className="hover:text-primary text-sm">
            Projects
          </Link>
          <Link to="/services" className="hover:text-primary text-sm">
            Services
          </Link>
          <Link to="/contact" className="hover:text-primary text-sm">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

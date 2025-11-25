import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral-100 via-gray-50 to-blue-50">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight">
          We Craft Digital <span className="text-blue-600">Experiences</span>
          <br />
          That Drive Results
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
          A creative agency focused on branding, web design, and development that helps businesses stand out and grow.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link to="/projects" className="bg-blue-600 text-white py-3 px-8 rounded-lg shadow-lg hover:bg-blue-700 transition">
            View Our Work
          </Link>
          <Link to="/contact" className="border border-blue-600 text-blue-600 py-3 px-8 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

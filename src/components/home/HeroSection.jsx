import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-gray-100 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900 transition-colors duration-500">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 dark:text-gray-50 leading-tight">
          We Craft Digital{" "}
          <span className="text-blue-600 dark:text-amber-500">Experiences</span>
          <br />
          That Drive Results
        </h1>

        {/* Subheading */}
        <p className="mt-8 text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          A creative agency focused on branding, web design, and development that helps businesses stand out and grow.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
          <Link
            to="/projects"
            className="bg-blue-600 dark:bg-amber-500 text-white dark:text-gray-900 py-3 px-8 rounded-lg shadow-lg hover:shadow-xl hover:bg-blue-700 dark:hover:bg-amber-400 transition-all duration-300"
          >
            View Our Work
          </Link>
          <Link
            to="/contact"
            className="border border-blue-600 dark:border-amber-500 text-blue-600 dark:text-amber-500 py-3 px-8 rounded-lg hover:bg-blue-600 dark:hover:bg-amber-500 hover:text-white dark:hover:text-gray-900 transition-all duration-300"
          >
            Start a Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

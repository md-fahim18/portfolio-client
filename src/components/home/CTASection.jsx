import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to elevate your brand?
        </h2>
        <p className="text-xl opacity-90 mb-10">
          Let’s create something extraordinary together.
        </p>
        <Link to="/contact" className="bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-100 transition">
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default CTASection;

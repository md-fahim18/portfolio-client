// src/components/home/Home.jsx

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section – Full-screen, bold, agency style */}
      <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-neutral via-base-100 to-primary/5">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-black text-base-content leading-tight">
            We Craft Digital <span className="text-primary">Experiences</span>
            <br />
            That Drive Results
          </h1>

          <p className="mt-8 text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto">
            A creative agency focused on branding, web design, and development that helps businesses stand out and grow.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Link to="/projects" className="btn btn-primary btn-lg shadow-xl">
              View Our Work
            </Link>
            <Link to="/contact" className="btn btn-outline btn-lg">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Services Preview – optional, delete if you don’t want */}
      <section className="py-24 bg-base-200">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            What We Do
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Brand Identity", desc: "Logos, visual systems & strategy" },
              { title: "Web Design", desc: "Beautiful, high-converting websites" },
              { title: "Development", desc: "React, Next.js, custom solutions" },
            ].map((service, i) => (
              <div
                key={i}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="card-body text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">{i + 1}</span>
                  </div>
                  <h3 className="card-title">{service.title}</h3>
                  <p className="text-base-content/70">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple CTA at the bottom */}
      <section className="py-24 bg-primary text-primary-content">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to elevate your brand?
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Let’s create something extraordinary together.
          </p>
          <Link to="/contact" className="btn btn-neutral btn-lg">
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
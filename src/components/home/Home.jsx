import React from "react";
import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import CTASection from "./CTASection";

const Home = () => {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <ServicesSection />
      <CTASection />
    </div>
  );
};

export default Home;

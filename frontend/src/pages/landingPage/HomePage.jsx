import React from "react";
import { Hero } from "../../components/home/Hero";
import { Features } from "../../components/home/Features";
import { HowItWorks } from "../../components/home/HowItWorks";
import { Roadmap } from "../../components/home/Roadmap";
import { Footer } from "../../components/home/Footer";

const HomePage = () => {
  return (
    <div className=' bg-gray-900'>
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

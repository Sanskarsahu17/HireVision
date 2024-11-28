import React from "react";
import { Navbar } from "../../components/common/Navbar";
import { Hero } from "../../components/home/Hero";
import { Features } from "../../components/home/Features";
import { HowItWorks } from "../../components/home/HowItWorks";
import { Roadmap } from "../../components/home/Roadmap";
import { Footer } from "../../components/home/Footer";

const HomePage = () => {
  return (
    <div className='min-h-screen bg-gray-900'>
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default HomePage;

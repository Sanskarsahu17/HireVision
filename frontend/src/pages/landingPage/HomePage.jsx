import React from "react";
import {Hero} from "../../components/landingPage/Hero";
import { Features } from "../../components/landingPage/Features";
import { HowItWorks } from "../../components/landingPage/HowItWorks";

import { Footer } from "../../components/landingPage/Footer";
import { BentoGrid } from "../../components/landingPage/BentoGrid";

const HomePage = () => {
  return (
    <div className=' bg-gray-900'>
      <main>
        <Hero />
        <BentoGrid/>
        <Features />
        <HowItWorks />
       
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;

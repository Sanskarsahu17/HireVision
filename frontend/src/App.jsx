import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/landingPage/homePage";
import { Jobs } from "./pages/joblisting/JobListing";
import JobDescription from "./pages/jobDescription/Description";
import HRDashboard from "./pages/hr/HRDashboard";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";

const App = () => {
  return (
    <div className=' h-full  bg-gray-900'>
      {/* <Routes>
        <Route path='/' element={<Jobs />} />
        <Route path='/job/:id' element={<JobDescription />} />
      </Routes> */}
      {/* <HRDashboard /> */}
      <HomePage />
    </div>
  );
};

export default App;

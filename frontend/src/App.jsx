import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import HomePage from "./pages/landingPage/homePage";
import Jobs from "./pages/joblisting/JobListing";
import JobDescription from "./pages/jobDescription/Description";
import HRDashboard from "./pages/hr/HRDashboard";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import ProfilePage from "./pages/profile/ProfilePage";

const App = () => {
  return (
    <div className='   bg-gray-900'>
      {/* <Routes>
        <Route path='/' element={<Jobs />} />
        <Route path='/job/:id' element={<JobDescription />} />
      </Routes>
      {/* <HRDashboard /> */}
      {/* <CandidateDashboard /> */}
      {/* <HomePage /> */}
      <ProfilePage />
    </div>
  );
};

export default App;

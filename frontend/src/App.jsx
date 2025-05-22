import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import Cookies from "js-cookie";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/landingPage/HomePage";
import JobListings from "./pages/joblisting/JobListing";
import JobDescription from "./pages/jobDescription/Description";
import HRDashboard from "./pages/hr/HRDashboard";
import CandidateDashboard from "./pages/candidate/CandidateDashboard";
import ProfilePage from "./pages/profile/ProfilePage";
import AuthPage from "./pages/auth/AuthPage";
import InterviewPage from "./pages/interview/InterviewPage";
import CandidateApplications from "./pages/candidate/candidateapplication/CandidateApplications";
import ApplicationForm from "./components/jobDescription/ApplicationForm";
import ScheduledInterview from "./components/candidatePage/scheduledInterview/ScheduledInterview";
import Messages from "./components/hrPage/sidebar/Messages";
import Interviews from "./components/hrPage/sidebar/Interviews";
import JobPostings from "./components/hrPage/sidebar/jobPosting/JobPosting";
import CandidatesPage from "./pages/hr/CandidatesPage";
import Testing from "./components/hrPage/sidebar/candidates/Testing";
import Unauthorized from "./components/common/Unauthorised";
import MCQ from "./pages/mcqsPage/MCQ";
import VirtualInterviewPage from "./pages/virtualInterview/VirtualInterviewPage";


function isAuthenticated() {
  const token=Cookies.get('token');
  return !!token;
}


const App = () => (
  <div className='bg-gray-900'>
    <Navbar isAuthenticated={isAuthenticated} />
    <Routes>

        {/* public routes */}
      <Route path='/' element={<HomePage />} />
      <Route path='/auth' element={<AuthPage />} />
      <Route path='/jobs' element={<JobListings />} />
      <Route path='/job/:_id' element={<JobDescription />} />
     

     {/* candiate protected routes */}
     <Route path='/candidate/dashboard' element={<CandidateDashboard />} />
     <Route path='/candidate/applications' element={<CandidateApplications />} />
     <Route path='/candidate/profile' element={<ProfilePage />} />
     <Route path='/candidate/interview/:_id' element={<InterviewPage />} />
     <Route path='/candidate/application-form' element={<ApplicationForm />} />
     <Route
          path='/candidate/mcqQuiz'
          element={isAuthenticated ? <MCQ /> : <AuthPage/> }
        /> 
      <Route path='/candidate/scheduledinterviews' element={<ScheduledInterview />} />
   

     {/* hr protected routes */}
      <Route path='/hr/dashboard' element={<HRDashboard />} />
      <Route path='/hr/messages' element={<Messages />} />
      <Route path='/hr/interviews' element={<Interviews />} />
      <Route path='/hr/jobpostings' element={<JobPostings />} />

      <Route path='/hr/candidates' element={<CandidatesPage />} />
      <Route path='/hr/candidates/:_id' element={<Testing />} />
      <Route path='/candidate/virtualInterview' element={<VirtualInterviewPage/>} />
  
     {/* default route */}
     <Route path="/401" element={<Unauthorized />} />
     
    </Routes>
    <Toaster richColors='true' />
  </div>
);




export default App;
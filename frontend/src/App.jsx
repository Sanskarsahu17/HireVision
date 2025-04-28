
import { useState, useEffect, React } from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
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
import Results from "./components/interview/Results";
import ScheduledInterview from "./components/candidatePage/scheduledInterview/ScheduledInterview";
import MessagesPage from "./components/candidatePage/messagespage/messagesPage";
import Messages from "./components/hrPage/sidebar/Messages";
import Interviews from "./components/hrPage/sidebar/Interviews";
import JobPostings from "./components/hrPage/sidebar/jobPosting/JobPosting";
import Reports from "./components/hrPage/sidebar/Reports";
import Settings from "./components/hrPage/sidebar/Settings";
import CandidatesPage from "./pages/hr/CandidatesPage";
import Testing from "./components/hrPage/sidebar/candidates/Testing";
import MCQ from "./pages/mcqsPage/MCQ";

const App = () => {
  const userRole = "candidate"; // Replace with actual role logic
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    // Fetch user data if authenticated
    if (isAuthenticated) {
      fetchUserData();
    }
  }, [isAuthenticated]);

  const fetchUserData = async () => {
    // Fetch user data from API
    const response = await fetch("/api/user");
    const data = await response.json();
    setUserData(data);
  };

  return (
    <div className='bg-gray-900'>
      {" "}
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/jobs' element={<JobListings />} />
        <Route path='/job/:_id' element={<JobDescription />} />
        <Route path='/hr/dashboard' element={<HRDashboard />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/candidate/interview' element={<InterviewPage />} />
        <Route path='/candidate/interview/results' element={<Results />} />
        <Route path='/hr/dashboard/student/testing' element={<Testing/>} />
        <Route
          path='/candidate/Applications'
          element={<CandidateApplications />}
        />
        <Route
          path='/candidate/scheduledinterviews'
          element={<ScheduledInterview />}
        />
        <Route path='/candidate/messages' element={<MessagesPage />} />
        <Route path='/apply' element={<ApplicationForm />} />
        <Route path='/candidate/dashboard' element={<CandidateDashboard />} />
        <Route path='*' element={<div>404 - Page Not Found</div>} />

        <Route
          path='/hr/messages'
          element={isAuthenticated ? <Messages /> : <AuthPage />}
        />
        <Route
          path='/hr/interviews'
          element={isAuthenticated ? <Interviews /> : <AuthPage />}
        />
        <Route
          path='/hr/jobpostings'
          element={isAuthenticated ? <JobPostings /> : <AuthPage />}
        />
        <Route
          path='/hr/reports'
          element={isAuthenticated ? <Reports /> : <AuthPage />}
        />
        <Route
          path='/hr/settings'
          element={isAuthenticated ? <Settings /> : <AuthPage />}
        />
        <Route
          path='/hr/candidates'
          element={isAuthenticated ? <CandidatesPage /> : <AuthPage />}
        />
        <Route
          path='/candidate/mcqQuiz'
          element={isAuthenticated ? <MCQ /> : <AuthPage/> }
        />  
      </Routes>
      <Toaster richColors='true' />
    </div>
  );
};

export default App;

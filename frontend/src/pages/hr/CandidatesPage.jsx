import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "../../components/hrPage/SideBar";
import { getCandidate } from "../../hooks/hrDashboard";
import JobSelector from "../../components/hrPage/sidebar/candidates/JobSelector";
import CandidateList from "../../components/hrPage/sidebar/candidates/CandidateList";
import CheckButton from "../../components/hrPage/sidebar/candidates/CheckButton";

export default function CandidatesPage() {
  const { data, error, isLoading, refetch } = getCandidate();
  const [selectedJob, setSelectedJob] = useState(null);

  // Group candidates by job position
  const groupedCandidates = data?.reduce((acc, jobArray) => {
    jobArray.forEach((candidate) => {
      if (!acc[candidate.jobPosition]) {
        acc[candidate.jobPosition] = [];
      }
      acc[candidate.jobPosition].push(candidate);
    });
    return acc;
  }, {}) || {};

  return (
    <div className='min-h-screen bg-slate-900 flex'>
      <Sidebar />
      <div className='ml-64 p-8 w-full'>
        <div className='max-w-6xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <h1 className='text-3xl font-bold text-white'>Candidates</h1>
            <p className='text-slate-400'>
              Manage and track candidate applications
            </p>
          </motion.div>

          {/* Job Selector Dropdown */}
          <JobSelector
            jobOptions={Object.keys(groupedCandidates)}
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
          />

          {/* Check Button and Candidate List for selected job */}
          {selectedJob && (
            <>
              <CheckButton
                candidatesData={groupedCandidates[selectedJob]}
                onCheckComplete={refetch}
              />
              <CandidateList candidates={groupedCandidates[selectedJob]} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

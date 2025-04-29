import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import ApplicationCard from "../../../components/candidatePage/dashboardapplications/ApplicationCard";
import StageProgress from "../../../components/candidatePage/dashboardapplications/StageProgress";
import Sidebar from "../../../components/candidatePage/Sidebar";

import { useDashboardData } from "../../../hooks/useDashBoardData";

const CandidateApplications = () => {
  const { applications, error, loading } = useDashboardData();
  if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error}</div>; // agar user job fill nhi kiya ho
  // If job not applied at all
  if (error) {
    return (
      <div className='bg-slate-900'>
        <Toaster position='top-right' />
        <Sidebar />

        <div className='ml-64'>
          <div className='max-w-7xl mx-auto px-4 py-8'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className='flex items-center gap-4 mb-8'
            ></motion.div>

            <div className='grid gap-6 '>
              <h1 className='text-center text-white text-xl'>
                No jobs applied yet!
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // If jobs applied

  console.log("applications loaded");
  return (
    <div className='bg-slate-900'>
      <Toaster position='top-right' />
      <Sidebar />

      <div className='ml-64'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex items-center gap-4 mb-8'
          ></motion.div>

          <div className='grid gap-6'>
            {applications.map((application, index) => (
              <motion.div
                key={application._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StageProgress currentStage={application.applicationStatus} />
                <ApplicationCard application={application} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateApplications;

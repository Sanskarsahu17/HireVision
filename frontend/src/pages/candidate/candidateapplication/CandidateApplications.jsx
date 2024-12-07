import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import ApplicationCard from "../../../components/candidatePage/dashboardapplications/ApplicationCard";
import StageProgress from "../../../components/candidatePage/dashboardapplications/StageProgress";
import Sidebar from "../../../components/candidatePage/Sidebar";
import { mockApplications, mockUser } from "../../../data/mockData";
import { Avatar } from "../../../components/ui/Avatar";

const CandidateApplications = () => {
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
            {mockApplications.map((application, index) => (
              <motion.div
                key={application.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <StageProgress currentStage={application.stage} />
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

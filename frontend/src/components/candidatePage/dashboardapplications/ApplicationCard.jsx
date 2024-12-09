import React from "react";
import { motion } from "framer-motion";
import { Calendar, Building2 } from "lucide-react";
import { applicationStages } from "../../../data/mockData";
import { Avatar } from "../../../components/ui/Avatar";

export default function ApplicationCard({ application }) {
  const stage = applicationStages[application.applicaitonStatus];
  console.log(stage)
  const date = new Date(application.uploadedAt);
  const formattedDate = date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className='bg-slate-800/30 rounded-xl p-6 hover:bg-slate-800/50 transition-colors'
    >
      <div className='flex items-start gap-4'>
        <Avatar name={application.company} size='lg' />

        <div className='flex-1'>
          <h3 className='text-lg font-semibold text-white'>
            {application.jobPosition}
          </h3>
          <div className='flex items-center gap-2 text-slate-400 mt-1'>
            <Building2 className='w-4 h-4' />
            <span>{application.company}</span>
          </div>
          <div className='flex items-center gap-2 text-slate-400 mt-1'>
            <Calendar className='w-4 h-4' />
            <span>Applied on {formattedDate}</span>
          </div>

          <div className='mt-4'>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${stage.color}`}
            >
              {stage.label}
            </span>
          </div>

          {application.interviewDate && (
            <p className='mt-4 text-emerald-300'>
              Interview scheduled for {application.interviewDate}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

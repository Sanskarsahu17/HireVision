import React from "react";
import { Briefcase, Users, Clock, Edit, Trash2 } from "lucide-react";

const JobCard = ({ job, onEdit, onDelete }) => {
  return (
    <div className='bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-colors'>
      <div className='flex justify-between items-start'>
        <div className='flex gap-4'>
          <div className='w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center'>
            <Briefcase className='w-6 h-6 text-purple-400' />
          </div>
          <div>
            <h3 className='text-xl font-semibold text-white mb-2'>
              {job.title}
            </h3>
            <div className='flex gap-4 text-sm text-slate-400'>
              <span>{job.department}</span>
              <span>•</span>
              <span>{job.location}</span>
              <span>•</span>
              <span>{job.type}</span>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <button
            onClick={() => onEdit(job)}
            className='p-2 text-slate-400 hover:text-white transition-colors'
          >
            <Edit className='w-5 h-5' />
          </button>
          <button
            onClick={() => onDelete(job.id)}
            className='p-2 text-slate-400 hover:text-red-400 transition-colors'
          >
            <Trash2 className='w-5 h-5' />
          </button>
        </div>
      </div>

      <div className='mt-6 flex gap-6'>
        <div className='flex items-center gap-2 text-slate-300'>
          <Users className='w-4 h-4 text-purple-400' />
          {job.applicants} applicants
        </div>
        <div className='flex items-center gap-2 text-slate-300'>
          <Clock className='w-4 h-4 text-purple-400' />
          Posted {job.posted}
        </div>
        <span className='px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm'>
          {job.status}
        </span>
      </div>
    </div>
  );
};

export default JobCard;

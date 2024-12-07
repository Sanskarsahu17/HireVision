import React from "react";
import Sidebar from "../SideBar";
import { Briefcase, Users, Clock, Edit, Trash2 } from "lucide-react";

const mockJobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    applicants: 45,
    posted: "5 days ago",
    status: "Active",
  },
  {
    id: 2,
    title: "Product Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    applicants: 28,
    posted: "2 days ago",
    status: "Active",
  },
];

export default function JobPostings() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <div className='max-w-5xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold text-white'>Job Postings</h1>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors'>
              Create New Job
            </button>
          </div>

          <div className='space-y-6'>
            {mockJobs.map((job) => (
              <div
                key={job.id}
                className='bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-colors'
              >
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
                    <button className='p-2 text-slate-400 hover:text-white transition-colors'>
                      <Edit className='w-5 h-5' />
                    </button>
                    <button className='p-2 text-slate-400 hover:text-red-400 transition-colors'>
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
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Video, Users } from "lucide-react";
import { Avatar } from "../../ui/Avatar";

export default function UpcomingInterviews() {
  const interviews = [
    {
      id: 1,
      candidate: "Sarah Johnson",
      position: "Senior Frontend Developer",
      time: "2:00 PM",
      date: "Today",
      type: "Technical Interview",
      interviewers: ["John Doe", "Jane Smith"],
    },
    {
      id: 2,
      candidate: "Michael Chen",
      position: "Product Manager",
      time: "3:30 PM",
      date: "Tomorrow",
      type: "HR Round",
      interviewers: ["Alice Brown"],
    },
  ];

  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-white'>
          Upcoming Interviews
        </h2>
        <button className='text-purple-400 hover:text-purple-300'>
          View Calendar
        </button>
      </div>

      <div className='space-y-4'>
        {interviews.map((interview, index) => (
          <motion.div
            key={interview.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className='bg-slate-700/30 rounded-lg p-4'
          >
            <div className='flex items-start justify-between'>
              <div>
                <h3 className='font-medium text-white'>
                  {interview.candidate}
                </h3>
                <p className='text-sm text-slate-400'>{interview.position}</p>
                <div className='flex items-center gap-4 mt-2 text-sm'>
                  <div className='flex items-center gap-1 text-slate-300'>
                    <Calendar className='w-4 h-4' />
                    {interview.date}
                  </div>
                  <div className='flex items-center gap-1 text-slate-300'>
                    <Clock className='w-4 h-4' />
                    {interview.time}
                  </div>
                </div>
              </div>

              <div className='flex items-center gap-2'>
                <button className='p-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30'>
                  <Video className='w-4 h-4' />
                </button>
                <div className='flex -space-x-2'>
                  {interview.interviewers.map((interviewer, i) => (
                    <Avatar key={i} name={interviewer} size='sm' />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

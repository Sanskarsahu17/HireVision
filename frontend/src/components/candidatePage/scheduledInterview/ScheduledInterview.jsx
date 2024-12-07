import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Building2,
  Video,
  Users,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";
import Sidebar from "../Sidebar";
import { Avatar } from "../../ui/Avatar";

const interviews = [
  {
    id: 1,
    company: "TechCorp",
    position: "Senior Frontend Developer",
    date: "2024-03-25",
    time: "14:00",
    duration: "1 hour",
    type: "Technical Interview",
    status: "upcoming",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    interviewers: [
      { name: "John Smith", role: "Senior Engineer" },
      { name: "Alice Johnson", role: "Tech Lead" },
    ],
    preparation: [
      "Review full-stack development concepts",
      "Prepare for system design discussions",
      "Be ready to discuss past projects",
    ],
  },
  {
    id: 2,
    company: "InnovateCo",
    position: "Full Stack Developer",
    date: "2024-03-28",
    time: "15:30",
    duration: "45 minutes",
    type: "HR Round",
    status: "upcoming",
    meetingLink: "https://meet.google.com/xyz-uvwx-yz",
    interviewers: [{ name: "Sarah Wilson", role: "HR Manager" }],
    preparation: [
      "Review company background",
      "Prepare questions about company culture",
      "Have salary expectations ready",
    ],
  },
];

export default function ScheduledInterview() {
  const [selectedInterview, setSelectedInterview] = useState(null);

  return (
    <div className='bg-slate-900 min-h-screen'>
      <Sidebar />

      <div className='ml-64'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='mb-8'
          >
            <h1 className='text-3xl font-bold text-white'>
              Upcoming Interviews
            </h1>
            <p className='text-slate-400'>Manage your interview schedule</p>
          </motion.div>

          <div className='grid gap-6'>
            {interviews.map((interview, index) => (
              <motion.div
                key={interview.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className='bg-slate-800/30 rounded-xl p-6'>
                  <div className='flex items-start justify-between'>
                    <div className='space-y-4'>
                      <div>
                        <h3 className='text-xl font-semibold text-white mb-2'>
                          {interview.position}
                        </h3>
                        <div className='flex items-center gap-4 text-slate-400'>
                          <div className='flex items-center gap-2'>
                            <Building2 className='w-4 h-4' />
                            {interview.company}
                          </div>
                          <div className='flex items-center gap-2'>
                            <Calendar className='w-4 h-4' />
                            {interview.date}
                          </div>
                          <div className='flex items-center gap-2'>
                            <Clock className='w-4 h-4' />
                            {interview.time} ({interview.duration})
                          </div>
                        </div>
                      </div>

                      <div className='flex items-center gap-4'>
                        <span className='px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg'>
                          {interview.type}
                        </span>
                        {interview.status === "upcoming" && (
                          <span className='flex items-center gap-2 text-yellow-400'>
                            <AlertCircle className='w-4 h-4' />
                            Upcoming
                          </span>
                        )}
                      </div>

                      <div>
                        <h4 className='text-white font-medium mb-2'>
                          Interviewers:
                        </h4>
                        <div className='flex items-center gap-4'>
                          {interview.interviewers.map((interviewer, i) => (
                            <div key={i} className='flex items-center gap-2'>
                              <Avatar name={interviewer.name} size='sm' />
                              <div>
                                <p className='text-sm text-white'>
                                  {interviewer.name}
                                </p>
                                <p className='text-xs text-slate-400'>
                                  {interviewer.role}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='flex flex-col gap-3'>
                      <a
                        href={interview.meetingLink}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-colors'
                      >
                        <Video className='w-4 h-4' />
                        Join Meeting
                      </a>
                      <button
                        onClick={() => setSelectedInterview(interview)}
                        className='inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 text-purple-300 rounded-lg hover:bg-purple-500/30 transition-colors'
                      >
                        <Users className='w-4 h-4' />
                        View Details
                      </button>
                    </div>
                  </div>

                  {selectedInterview?.id === interview.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className='mt-6 pt-6 border-t border-slate-700'
                    >
                      <h4 className='text-white font-medium mb-3'>
                        Preparation Checklist:
                      </h4>
                      <ul className='space-y-2'>
                        {interview.preparation.map((item, i) => (
                          <li
                            key={i}
                            className='flex items-center gap-2 text-slate-300'
                          >
                            <CheckCircle2 className='w-4 h-4 text-emerald-400' />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

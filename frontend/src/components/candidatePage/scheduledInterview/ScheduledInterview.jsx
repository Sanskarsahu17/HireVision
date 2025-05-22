import React, { useState,useEffect } from "react";
import { motion } from "framer-motion";
import Sidebar from "../Sidebar";
import InterviewCard from "./InterviewCard";
import { getInterviews } from "../../../hooks/useDashBoardData";
import { useNavigate } from "react-router-dom";


const interviews1 = [
 
  {
    id: 1,
    company: "TechCorp",
    position: "Senior Frontend Developer",
    date: "2024-03-25",
    time: "14:00",
    duration: "1 hour",
    type: "AI Interview",
    status: "upcoming",
    meetingLink: "https://meet.google.com/abc-defg-hij",
    interviewers: [],
    preparation: [
      "Complete AI-based mock interview",
      "Review full-stack concepts",
      "Practice behavioral questions",
    ],
  },
  {
    id: 2,
    company: "InnovateCo",
    position: "Full Stack Developer",
    date: "2024-03-28",
    time: "15:30",
    duration: "45 minutes",
    type: "HR Interview",
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

  const navigate = useNavigate();
  const {interviews, loading, error} = getInterviews();
  const [selectedInterview, setSelectedInterview] = useState(null);

  const formattedInterviews = interviews?.map((interview,index) =>({
    id: interview.jobId,
    company: interview.company,
    position: interview.jobPosition,
    date: "2025-05-10", // placeholder or extract from interview if available
    time: "14:00", // placeholder
    duration: "1 hour", // placeholder
    type: "AI Interview", // default or based on some field
    status: "upcoming", // default or compute based on date
    meetingLink: "https://meet.google.com/abc-defg-hij", // placeholder
    interviewers: [], // or fetch from another endpoint
    preparation: [
      "Review the job requirements",
      "Practice technical questions",
      "Research the company",
    ],
  }))

  const combinedInterview = [...formattedInterviews,...interviews1];

  const onStart = (interview)=>{
    console.log("debug 3: ",interview);
    navigate(`/candidate/virtualInterview?job_id=${interview.id}&job_position=${interview.position}&company_name=${interview.company}`);
  }
  
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
            <h1 className='text-3xl font-bold text-white'>Upcoming Interviews</h1>
            <p className='text-slate-400'>Manage your interview schedule</p>
          </motion.div>

          <div className='grid gap-6'>
            {combinedInterview.map((interview, index) => (
              <InterviewCard
                key={interview.id}
                interview={interview}
                index={index}
                onSelect={setSelectedInterview}
                isSelected={selectedInterview?.id === interview.id}
                onStart = {onStart}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

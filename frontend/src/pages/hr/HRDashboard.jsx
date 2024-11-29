import React from "react";
import Sidebar from "../../components/hrPage/SideBar";
import DashboardStats from "../../components/hrPage/DashboardStats";
import CandidateList from "../../components/hrPage/CandidateList";

const mockData = {
  stats: {
    interviewsScheduled: 5,
    resumesSubmitted: 100,
  },
  candidates: [
    {
      id: "APP001",
      name: "Sarah Johnson",
      role: "Frontend Developer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      email: "sarah.j@example.com",
      phone: "+12345678990",
      applicationId: "APP001",
      appliedDate: "2024-03-15",
      status: "Shortlisted",
    },
  ],
};

export default function HRDashboard() {
  const handleScheduleInterview = (candidate) => {
    console.log("Schedule interview for:", candidate);
  };

  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <h1 className='text-3xl font-bold text-white mb-8'>HR Dashboard</h1>

        <div className='space-y-8'>
          <DashboardStats stats={mockData.stats} />

          <div className='bg-slate-800/30 rounded-xl p-6'>
            <div className='flex justify-between items-center mb-6'>
              <h2 className='text-xl font-semibold text-white'>Meeting Link</h2>
            </div>
            <input
              type='text'
              placeholder='Paste the meeting link here for the candidates'
              className='w-full bg-slate-700 text-slate-300 px-4 py-3 rounded-lg'
            />
          </div>

          <CandidateList
            candidates={mockData.candidates}
            onSchedule={handleScheduleInterview}
          />
        </div>
      </main>
    </div>
  );
}

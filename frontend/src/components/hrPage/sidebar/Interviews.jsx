import React from "react";
import Sidebar from "../SideBar";
import { Calendar, Clock, MapPin, Video } from "lucide-react";

const mockInterviews = [
  {
    id: 1,
    candidate: "Alice Cooper",
    position: "Senior Developer",
    date: "2024-03-20",
    time: "10:00 AM",
    type: "Technical",
    location: "Virtual",
  },
  {
    id: 2,
    candidate: "Bob Wilson",
    position: "UX Designer",
    date: "2024-03-21",
    time: "2:30 PM",
    type: "Portfolio Review",
    location: "Virtual",
  },
];

export default function Interviews() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <div className='max-w-4xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold text-white'>
              Scheduled Interviews
            </h1>
            <button className='bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors'>
              Schedule New Interview
            </button>
          </div>

          <div className='space-y-6'>
            {mockInterviews.map((interview) => (
              <div
                key={interview.id}
                className='bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-colors'
              >
                <div className='flex justify-between items-start'>
                  <div>
                    <h3 className='text-xl font-semibold text-white mb-2'>
                      {interview.candidate}
                    </h3>
                    <p className='text-slate-400 mb-4'>{interview.position}</p>
                    <div className='flex gap-4 text-sm'>
                      <div className='flex items-center gap-2 text-slate-300'>
                        <Calendar className='w-4 h-4 text-purple-400' />
                        {interview.date}
                      </div>
                      <div className='flex items-center gap-2 text-slate-300'>
                        <Clock className='w-4 h-4 text-purple-400' />
                        {interview.time}
                      </div>
                      <div className='flex items-center gap-2 text-slate-300'>
                        <MapPin className='w-4 h-4 text-purple-400' />
                        {interview.location}
                      </div>
                    </div>
                  </div>
                  <button className='flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-2 rounded-lg hover:bg-purple-500/30 transition-colors'>
                    <Video className='w-4 h-4' />
                    Join Meeting
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

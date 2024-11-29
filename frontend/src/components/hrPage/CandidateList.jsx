import React from "react";
import { Calendar, Mail, Phone } from "lucide-react";

export default function CandidateList({ candidates, onSchedule }) {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-white'>Candidates</h2>
        <div className='flex gap-4'>
          <select className='bg-slate-700 text-slate-300 px-4 py-2 rounded-lg'>
            <option>Filter by Status</option>
            <option>Shortlisted</option>
            <option>Interview Scheduled</option>
            <option>Test Pending</option>
          </select>
          <input
            type='text'
            placeholder='Search candidates...'
            className='bg-slate-700 text-slate-300 px-4 py-2 rounded-lg'
          />
        </div>
      </div>

      <div className='space-y-4'>
        {candidates.map((candidate) => (
          <div
            key={candidate.id}
            className='bg-slate-700/30 rounded-lg p-4 flex items-center justify-between'
          >
            <div className='flex items-center gap-4'>
              <img
                src={candidate.avatar}
                alt={candidate.name}
                className='w-12 h-12 rounded-full'
              />
              <div>
                <h3 className='text-white font-medium'>{candidate.name}</h3>
                <p className='text-slate-400 text-sm'>{candidate.role}</p>
              </div>
            </div>

            <div className='flex items-center gap-6'>
              <div className='flex items-center gap-2 text-slate-400'>
                <Mail className='w-4 h-4' />
                {candidate.email}
              </div>
              <div className='flex items-center gap-2 text-slate-400'>
                <Phone className='w-4 h-4' />
                {candidate.phone}
              </div>
              <span
                className={`px-3 py-1 rounded-full text-sm ${
                  candidate.status === "Shortlisted"
                    ? "bg-green-500/20 text-green-300"
                    : candidate.status === "Interview Scheduled"
                    ? "bg-blue-500/20 text-blue-300"
                    : "bg-yellow-500/20 text-yellow-300"
                }`}
              >
                {candidate.status}
              </span>
              <button
                onClick={() => onSchedule(candidate)}
                className='bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg transition-colors'
              >
                Schedule
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

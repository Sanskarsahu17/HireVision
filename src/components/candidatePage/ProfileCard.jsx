import React from "react";

export default function ProfileCard({ candidate }) {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6 text-center'>
      <img
        src={candidate.avatar}
        alt={candidate.name}
        className='w-24 h-24 rounded-full mx-auto mb-4'
      />
      <h2 className='text-2xl font-bold text-white mb-1'>{candidate.name}</h2>
      <p className='text-slate-400'>{candidate.role}</p>
    </div>
  );
}

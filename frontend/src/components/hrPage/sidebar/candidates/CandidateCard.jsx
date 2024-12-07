import React from "react";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Avatar } from "../../../ui/Avatar";

export default function CandidateCard({ candidate }) {
  return (
    <div className='bg-slate-800/30 rounded-lg p-6 hover:bg-slate-800/50 transition-colors'>
      <div className='flex items-start justify-between'>
        <div className='flex gap-4'>
          <Avatar name={candidate.name} src={candidate.avatar} size='lg' />
          <div>
            <h3 className='text-xl font-semibold text-white'>
              {candidate.name}
            </h3>
            <p className='text-slate-400 mb-2'>{candidate.role}</p>
            <div className='space-y-1'>
              <div className='flex items-center gap-2 text-sm text-slate-300'>
                <Mail className='w-4 h-4 text-purple-400' />
                {candidate.email}
              </div>
              <div className='flex items-center gap-2 text-sm text-slate-300'>
                <Phone className='w-4 h-4 text-purple-400' />
                {candidate.phone}
              </div>
              <div className='flex items-center gap-2 text-sm text-slate-300'>
                <MapPin className='w-4 h-4 text-purple-400' />
                {candidate.location}
              </div>
            </div>
          </div>
        </div>
        <button className='inline-flex items-center gap-2 text-purple-400 hover:text-purple-300'>
          View Profile
          <ArrowRight className='w-4 h-4' />
        </button>
      </div>
      <div className='mt-4 flex gap-2'>
        {candidate.skills.map((skill, index) => (
          <span
            key={index}
            className='px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

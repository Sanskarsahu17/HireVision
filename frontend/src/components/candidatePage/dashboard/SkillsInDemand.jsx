import React from "react";
import { Briefcase } from "lucide-react";

export default function SkillsInDemand({ skills }) {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6 mb-8'>
      <div className='flex items-center gap-2 mb-6'>
        <Briefcase className='w-5 h-5 text-purple-400' />
        <h2 className='text-xl font-semibold text-white'>Skills in Demand</h2>
      </div>
      <div className='grid grid-cols-2 gap-4'>
        {skills.map((skill) => (
          <div key={skill.name} className='bg-slate-700/30 rounded-lg p-4'>
            <div className='flex justify-between items-center mb-2'>
              <span className='text-white font-medium'>{skill.name}</span>
              <span className='text-purple-400'>{skill.jobCount} jobs</span>
            </div>
            <div className='w-full bg-slate-600/30 rounded-full h-2'>
              <div
                className='bg-purple-500 h-2 rounded-full'
                style={{ width: `${skill.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

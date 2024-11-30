import React from "react";
import { Plus, X } from "lucide-react";

export default function Skills() {
  const skills = ["UI/UX Design", "Figma", "User Research", "Prototyping"];

  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-white'>Skills</h2>
        <button className='inline-flex items-center gap-2 text-purple-400 hover:text-purple-300'>
          <Plus className='w-4 h-4' />
          Add Skill
        </button>
      </div>

      <div className='flex flex-wrap gap-2'>
        {skills.map((skill) => (
          <span
            key={skill}
            className='inline-flex items-center gap-2 px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full'
          >
            {skill}
            <button className='hover:text-purple-200'>
              <X className='w-4 h-4' />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
}

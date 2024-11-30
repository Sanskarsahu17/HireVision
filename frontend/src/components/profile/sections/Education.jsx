import React from "react";
import { Plus, GraduationCap } from "lucide-react";

export default function Education() {
  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex justify-between items-center mb-6'>
        <h2 className='text-xl font-semibold text-white'>Education</h2>
        <button className='inline-flex items-center gap-2 text-purple-400 hover:text-purple-300'>
          <Plus className='w-4 h-4' />
          Add Education
        </button>
      </div>

      <div className='space-y-6'>
        <div className='flex gap-4 p-4 bg-slate-700/30 rounded-lg'>
          <div className='p-3 bg-purple-500/20 rounded-lg h-fit'>
            <GraduationCap className='w-6 h-6 text-purple-400' />
          </div>
          <div>
            <h3 className='text-lg font-medium text-white'>
              Bachelor of Design
            </h3>
            <p className='text-slate-400'>Design University</p>
            <p className='text-sm text-slate-500'>2016 - 2020</p>
          </div>
        </div>
      </div>
    </div>
  );
}

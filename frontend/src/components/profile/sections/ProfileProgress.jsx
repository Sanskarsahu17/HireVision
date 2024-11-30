import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function ProfileProgress() {
  const progress = 70;

  return (
    <div className='bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl p-6 text-white'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-xl font-semibold'>Profile Completion</h2>
        <span className='text-2xl font-bold'>{progress}%</span>
      </div>

      <div className='h-2 bg-white/20 rounded-full mb-4'>
        <div
          className='h-full bg-white rounded-full transition-all duration-500'
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className='space-y-3'>
        <p className='text-purple-100'>
          Complete your profile to stand out! Here's what's missing:
        </p>
        <ul className='space-y-2'>
          <li className='flex items-center gap-2 text-sm'>
            <CheckCircle2 className='w-4 h-4' />
            Add your work experience
          </li>
          <li className='flex items-center gap-2 text-sm'>
            <CheckCircle2 className='w-4 h-4' />
            Upload your resume
          </li>
        </ul>
      </div>

      <button className='mt-6 w-full bg-white text-purple-600 py-2 rounded-lg font-medium hover:bg-purple-50 transition-colors'>
        Complete Profile
      </button>
    </div>
  );
}

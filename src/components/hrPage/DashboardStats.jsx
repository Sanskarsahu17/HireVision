import React from "react";
import { Users, FileText } from "lucide-react";

export default function DashboardStats({ stats }) {
  return (
    <div className='grid grid-cols-2 gap-6'>
      <div className='bg-blue-500/10 rounded-xl p-6'>
        <div className='flex items-center gap-4'>
          <div className='p-3 bg-blue-500/20 rounded-lg'>
            <Users className='w-6 h-6 text-blue-400' />
          </div>
          <div>
            <h3 className='text-sm text-slate-400'>Interview Scheduled</h3>
            <p className='text-2xl font-bold text-white'>
              {stats.interviewsScheduled}
            </p>
          </div>
        </div>
      </div>

      <div className='bg-purple-500/10 rounded-xl p-6'>
        <div className='flex items-center gap-4'>
          <div className='p-3 bg-purple-500/20 rounded-lg'>
            <FileText className='w-6 h-6 text-purple-400' />
          </div>
          <div>
            <h3 className='text-sm text-slate-400'>Resume submitted</h3>
            <p className='text-2xl font-bold text-white'>
              {stats.resumesSubmitted}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { BarChart2, TrendingUp, Award } from "lucide-react";

export default function Analytics({ stats }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
      <div className='bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-6'>
        <div className='flex items-center gap-4'>
          <div className='p-3 bg-purple-500/20 rounded-lg'>
            <BarChart2 className='w-6 h-6 text-purple-400' />
          </div>
          <div>
            <p className='text-sm text-slate-400'>Total Applications</p>
            <h3 className='text-2xl font-bold text-white'>
              {stats.totalApplications}
            </h3>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-xl p-6'>
        <div className='flex items-center gap-4'>
          <div className='p-3 bg-blue-500/20 rounded-lg'>
            <TrendingUp className='w-6 h-6 text-blue-400' />
          </div>
          <div>
            <p className='text-sm text-slate-400'>Interview Success Rate</p>
            <h3 className='text-2xl font-bold text-white'>
              {stats.successRate}%
            </h3>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 rounded-xl p-6'>
        <div className='flex items-center gap-4'>
          <div className='p-3 bg-emerald-500/20 rounded-lg'>
            <Award className='w-6 h-6 text-emerald-400' />
          </div>
          <div>
            <p className='text-sm text-slate-400'>Offers Received</p>
            <h3 className='text-2xl font-bold text-white'>
              {stats.offersReceived}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

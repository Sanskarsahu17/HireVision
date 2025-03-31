import React from "react";
import {  TrendingUp, Clock, Users } from "lucide-react";
import Sidebar from "../SideBar";


const mockMetrics = [
  {
    title: "Time to Hire",
    value: "18 days",
    change: "-2 days",
    trend: "positive",
    icon: Clock,
  },
  {
    title: "Offer Acceptance Rate",
    value: "85%",
    change: "+5%",
    trend: "positive",
    icon: TrendingUp,
  },
  {
    title: "Active Candidates",
    value: "156",
    change: "+12",
    trend: "positive",
    icon: Users,
  },
];

export default function Reports() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <div className='max-w-5xl mx-auto'>
          <h1 className='text-3xl font-bold text-white mb-8'>
            Recruitment Reports
          </h1>

          <div className='grid grid-cols-3 gap-6 mb-8'>
            {mockMetrics.map((metric) => {
              const Icon = metric.icon;
              return (
                <div
                  key={metric.title}
                  className='bg-slate-800/30 rounded-lg p-6'
                >
                  <div className='flex items-center gap-4 mb-4'>
                    <div className='p-3 bg-purple-500/20 rounded-lg'>
                      <Icon className='w-6 h-6 text-purple-400' />
                    </div>
                    <h3 className='text-lg font-medium text-white'>
                      {metric.title}
                    </h3>
                  </div>
                  <div className='flex items-end justify-between'>
                    <p className='text-2xl font-bold text-white'>
                      {metric.value}
                    </p>
                    <span
                      className={`text-sm ${
                        metric.trend === "positive"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {metric.change}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className='bg-slate-800/30 rounded-lg p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h2 className='text-xl font-semibold text-white'>
                Recruitment Pipeline Overview
              </h2>
              <select className='bg-slate-700 text-slate-300 px-4 py-2 rounded-lg'>
                <option>Last 30 days</option>
                <option>Last 90 days</option>
                <option>Last 6 months</option>
              </select>
            </div>
            <div className='h-64 flex items-end justify-between gap-4'>
              {/* Placeholder for chart */}
              <div className='flex-1 bg-purple-500/20 rounded-t-lg h-[70%]'></div>
              <div className='flex-1 bg-purple-500/20 rounded-t-lg h-[85%]'></div>
              <div className='flex-1 bg-purple-500/20 rounded-t-lg h-[45%]'></div>
              <div className='flex-1 bg-purple-500/20 rounded-t-lg h-[60%]'></div>
              <div className='flex-1 bg-purple-500/20 rounded-t-lg h-[30%]'></div>
            </div>
            <div className='flex justify-between mt-4 text-sm text-slate-400'>
              <span>Applied</span>
              <span>Screened</span>
              <span>Interviewed</span>
              <span>Offered</span>
              <span>Hired</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

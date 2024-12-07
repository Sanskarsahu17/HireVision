import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import Sidebar from "../../components/hrPage/SideBar";
import AnalyticsOverview from "../../components/hrPage/dashboard/AnalyticsOverview";
import UpcomingInterviews from "../../components/hrPage/dashboard/UpcomingInterviews";
import TeamTasks from "../../components/hrPage/dashboard/TeamTasks";
import RecentActivity from "../../components/hrPage/dashboard/RecentActivity";

export default function HRDashboard() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Toaster position='top-right' />
      <Sidebar />

      <div className='ml-64 p-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className='mb-8'
        >
          <h1 className='text-3xl font-bold text-white'>HR Dashboard</h1>
          <p className='text-slate-400'>
            Overview of recruitment activities and team performance
          </p>
        </motion.div>

        <div className='space-y-8'>
          <AnalyticsOverview />

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <UpcomingInterviews />
            <TeamTasks />
          </div>

          <RecentActivity />
        </div>
      </div>
    </div>
  );
}

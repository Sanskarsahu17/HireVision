import React from "react";
import { motion } from "framer-motion";
import { Toaster } from "sonner";
import Sidebar from "../../components/candidatePage/Sidebar";
import Analytics from "../../components/candidatePage/dashboard/Analytics";
import SkillsInDemand from "../../components/candidatePage/dashboard/SkillsInDemand";
import TechArticles from "../../components/candidatePage/dashboard/TestArticles";
import {
  dashboardStats,
  skillsInDemand,
  techArticles,
} from "../../data/dashboardData";
import { mockUser } from "../../data/mockdata.js";
import { Avatar } from "../../components/ui/Avatar";

export default function CandidateDashboard() {
  return (
    <div className='bg-slate-900 min-h-screen'>
      <Toaster position='top-right' />
      <Sidebar />

      <div className='ml-64'>
        <div className='max-w-7xl mx-auto px-4 py-8'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className='flex items-center gap-4 mb-8'
          >
            <Avatar name={mockUser.name} src={mockUser.avatar} size='lg' />
            <div>
              <h1 className='text-3xl font-bold text-white'>
                Welcome back, {mockUser.name}
              </h1>
              <p className='text-slate-400'>{mockUser.role}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Analytics stats={dashboardStats} />
          </motion.div>

          <div className='grid md:grid-cols-2 gap-8'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <SkillsInDemand skills={skillsInDemand} />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <TechArticles articles={techArticles} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

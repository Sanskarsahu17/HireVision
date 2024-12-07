import React from "react";
import { motion } from "framer-motion";
import { FileText, UserCheck, Calendar, MessageSquare } from "lucide-react";

const ActivityItem = ({ activity, index }) => {
  const iconMap = {
    application: FileText,
    shortlist: UserCheck,
    interview: Calendar,
    message: MessageSquare,
  };

  const Icon = iconMap[activity.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className='flex items-start gap-4 p-4 bg-slate-700/30 rounded-lg'
    >
      <div className='p-2 bg-purple-500/20 rounded-lg'>
        <Icon className='w-4 h-4 text-purple-400' />
      </div>
      <div>
        <p className='text-white'>{activity.description}</p>
        <p className='text-sm text-slate-400'>{activity.time}</p>
      </div>
    </motion.div>
  );
};

export default function RecentActivity() {
  const activities = [
    {
      id: 1,
      type: "application",
      description: "New application received for Senior Frontend Developer",
      time: "5 minutes ago",
    },
    {
      id: 2,
      type: "shortlist",
      description: "Sarah Johnson shortlisted for Technical Interview",
      time: "1 hour ago",
    },
    {
      id: 3,
      type: "interview",
      description: "Interview scheduled with Michael Chen",
      time: "2 hours ago",
    },
    {
      id: 4,
      type: "message",
      description: "New message from candidate David Wilson",
      time: "3 hours ago",
    },
  ];

  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <h2 className='text-xl font-semibold text-white mb-6'>Recent Activity</h2>
      <div className='space-y-4'>
        {activities.map((activity, index) => (
          <ActivityItem key={activity.id} activity={activity} index={index} />
        ))}
      </div>
    </div>
  );
}

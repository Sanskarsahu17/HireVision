import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Clock, AlertCircle } from "lucide-react";

const TaskCard = ({ task, index }) => {
  const statusColors = {
    pending: "text-yellow-400",
    completed: "text-green-400",
    urgent: "text-red-400",
  };

  const StatusIcon = {
    pending: Clock,
    completed: CheckCircle2,
    urgent: AlertCircle,
  }[task.status];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className='bg-slate-700/30 rounded-lg p-4'
    >
      <div className='flex items-start justify-between'>
        <div>
          <h3 className='font-medium text-white'>{task.title}</h3>
          <p className='text-sm text-slate-400'>{task.description}</p>
          <div className='flex items-center gap-2 mt-2'>
            <span className='text-sm text-slate-400'>Assigned to:</span>
            <span className='text-sm text-slate-300'>{task.assignee}</span>
          </div>
        </div>
        <div className={`flex items-center gap-1 ${statusColors[task.status]}`}>
          <StatusIcon className='w-4 h-4' />
          <span className='text-sm'>{task.status}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default function TeamTasks() {
  const tasks = [
    {
      id: 1,
      title: "Review Frontend Developer Applications",
      description: "Screen and shortlist candidates for the frontend position",
      assignee: "John Doe",
      status: "urgent",
    },
    {
      id: 2,
      title: "Schedule Technical Interviews",
      description: "Coordinate with the tech team for upcoming interviews",
      assignee: "Sarah Smith",
      status: "pending",
    },
    {
      id: 3,
      title: "Update Job Descriptions",
      description: "Review and update job postings for new positions",
      assignee: "Mike Johnson",
      status: "completed",
    },
  ];

  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <div className='flex items-center justify-between mb-6'>
        <h2 className='text-xl font-semibold text-white'>Team Tasks</h2>
        <button className='text-purple-400 hover:text-purple-300'>
          Add Task
        </button>
      </div>

      <div className='space-y-4'>
        {tasks.map((task, index) => (
          <TaskCard key={task.id} task={task} index={index} />
        ))}
      </div>
    </div>
  );
}

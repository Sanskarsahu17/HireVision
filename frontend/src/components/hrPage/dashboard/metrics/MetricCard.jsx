import React from "react";
import { motion } from "framer-motion";

export default function MetricCard({ icon: Icon, label, value, trend, color }) {
  const bgColorClass = `bg-${color}-500/10`;
  const iconBgClass = `bg-${color}-500/20`;
  const iconColorClass = `text-${color}-400`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`${bgColorClass} rounded-xl p-6`}
    >
      <div className='flex items-center gap-4'>
        <div className={`p-3 ${iconBgClass} rounded-lg`}>
          <Icon className={`w-6 h-6 ${iconColorClass}`} />
        </div>
        <div>
          <p className='text-sm text-slate-400'>{label}</p>
          <div className='flex items-center gap-2'>
            <p className='text-2xl font-bold text-white'>{value}</p>
            {trend !== undefined && (
              <span
                className={`text-sm ${
                  trend > 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                {trend > 0 ? "+" : ""}
                {trend}%
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

import React from "react";
import { Info, AlertTriangle, CheckCircle2 } from "lucide-react";

export default function Reminders({ reminders }) {
  const getIcon = (type) => {
    switch (type) {
      case "info":
        return <Info className='w-5 h-5 text-blue-400' />;
      case "warning":
        return <AlertTriangle className='w-5 h-5 text-yellow-400' />;
      case "success":
        return <CheckCircle2 className='w-5 h-5 text-emerald-400' />;
      default:
        return null;
    }
  };

  return (
    <div className='bg-slate-800/30 rounded-xl p-6'>
      <h3 className='text-xl font-semibold text-white mb-4'>Reminders</h3>
      <div className='space-y-4'>
        {reminders.map((reminder) => (
          <div
            key={reminder.id}
            className='flex items-start gap-3 p-3 rounded-lg bg-slate-800/50'
          >
            {getIcon(reminder.type)}
            <p className='text-slate-300'>{reminder.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

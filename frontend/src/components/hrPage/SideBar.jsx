import React from "react";
import { Link , useLocation} from "react-router-dom";

import {
  LayoutDashboard,
  Users,
  Briefcase,
  MessageSquare,
  Calendar,
  BarChart2,
  Settings,
} from "lucide-react";

const navItems = [
  { icon: <LayoutDashboard />, label: "Dashboard", path: "/recruiter/dashboard" },
  { icon: <Users />, label: "Candidates", path: "/recruiter/candidates" },
  { icon: <Briefcase />, label: "Job Postings", path: "/recruiter/jobpostings" },
  // {
  //   icon: <MessageSquare />,
  //   label: "Messages",
  //   path: "/hr/messages",
  //   badge: 3,
  // },
  { icon: <Calendar />, label: "Interviews", path: "/recruiter/interviews" },
  // { icon: <BarChart2 />, label: "Reports", path: "/hr/reports" },
  // { icon: <Settings />, label: "Settings", path: "/hr/settings" },
];

export default function Sidebar() {
  const location = useLocation();
  return (
    <aside className='w-64 bg-slate-800/30 h-screen fixed left-0 top-0 p-4'>
      <h1 className='text-2xl font-bold text-white mb-8'>HR Portal</h1>

      <nav className='space-y-2'>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-700/30 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-slate-700/30 text-white"
                : ""
            }`}
          >
            <div className='w-5 h-5'>{item.icon}</div>
            <span>{item.label}</span>
            {item.badge && (
              <span className='ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full'>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

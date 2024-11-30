import React from "react";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  MessageSquare,
  Calendar,
  Settings,
  BookOpen,
  Award,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/" },
  { icon: FileText, label: "Applications", path: "/applications" },
  { icon: BookOpen, label: "Assessments", path: "/assessments" },
  { icon: Calendar, label: "Interviews", path: "/interviews" },
  { icon: MessageSquare, label: "Messages", path: "/messages", badge: 3 },
  { icon: Award, label: "Offers", path: "/offers" },
  { icon: Settings, label: "Settings", path: "/settings" },
];

function Sidebar() {
  return (
    <aside className='w-64 bg-slate-800/30 h-screen fixed left-0 top-0 p-4'>
      <div className='flex items-center gap-3 mb-8'>
        <div className='w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center'>
          <span className='text-white font-bold'>N</span>
        </div>
        <h1 className='text-xl font-bold text-white'>Nexus_AI</h1>
      </div>

      <nav className='space-y-2'>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className='flex items-center gap-3 text-slate-300 hover:text-white hover:bg-slate-700/30 px-4 py-3 rounded-lg transition-colors'
          >
            <item.icon className='w-5 h-5' />
            <span>{item.label}</span>
            {item.badge && (
              <span className='ml-auto bg-purple-500 text-white text-xs px-2 py-1 rounded-full'>
                {item.badge}
              </span>
            )}
          </Link>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;

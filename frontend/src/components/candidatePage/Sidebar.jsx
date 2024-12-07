import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  FileText,
  Calendar,
  MessageSquare,
} from "lucide-react";

const navItems = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/candidate/dashboard",
  },
  {
    icon: FileText,
    label: "Applications",
    path: "/candidate/applications",
  },
  {
    icon: Calendar,
    label: "Interviews",
    path: "/candidate/scheduledinterviews",
  },
  {
    icon: MessageSquare,
    label: "Messages",
    path: "/candidate/messages",
    badge: 3,
  },
];

function Sidebar() {
  const location = useLocation();

  return (
    <aside className='w-64 bg-slate-800/30 h-screen fixed left-0 top-10 p-4'>
      <div className='flex items-center gap-3 mb-8'></div>

      <nav className='space-y-2'>
        {navItems.map((item) => (
          <Link
            key={item.label}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
              location.pathname === item.path
                ? "bg-purple-500/20 text-white"
                : "text-slate-300 hover:text-white hover:bg-slate-700/30"
            }`}
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

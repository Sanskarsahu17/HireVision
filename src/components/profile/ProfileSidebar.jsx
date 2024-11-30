import React from "react";
import {
  User,
  Briefcase,
  Code,
  GraduationCap,
  FileText,
  AlertCircle,
} from "lucide-react";

const sections = [
  { icon: User, label: "Personal Info", complete: true },
  { icon: Briefcase, label: "Experience", complete: false },
  { icon: Code, label: "Skills", complete: true },
  { icon: GraduationCap, label: "Education", complete: true },
  { icon: FileText, label: "Resume", complete: false },
];

export default function ProfileSidebar() {
  return (
    <nav className='space-y-2'>
      {sections.map(({ icon: Icon, label, complete }) => (
        <button
          key={label}
          className='w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left text-slate-300 hover:bg-slate-800/50 hover:text-white transition-colors'
        >
          <Icon className='w-5 h-5' />
          <span>{label}</span>
          {!complete && (
            <AlertCircle className='w-4 h-4 text-yellow-400 ml-auto' />
          )}
        </button>
      ))}
    </nav>
  );
}

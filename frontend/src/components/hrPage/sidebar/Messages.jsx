import React from "react";
import { Mail, Search } from "lucide-react";
import Sidebar from "../SideBar";


const mockMessages = [
  {
    id: 1,
    sender: "John Smith",
    subject: "Interview Confirmation",
    preview: "Thank you for considering my application...",
    timestamp: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    sender: "Sarah Johnson",
    subject: "Application Update",
    preview: "I wanted to follow up on my application...",
    timestamp: "1 day ago",
    unread: false,
  },
];

export default function Messages() {
  return (
    <div className='min-h-screen bg-slate-900'>
      <Sidebar />
      <main className='ml-64 p-8'>
        <div className='max-w-4xl mx-auto'>
          <h1 className='text-3xl font-bold text-white mb-8'>Messages</h1>

          <div className='mb-6 relative'>
            <Search className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
            <input
              type='text'
              placeholder='Search messages...'
              className='w-full pl-10 pr-4 py-2 bg-slate-800/30 rounded-lg text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />
          </div>

          <div className='space-y-4'>
            {mockMessages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg ${
                  message.unread ? "bg-slate-800/50" : "bg-slate-800/30"
                } hover:bg-slate-800/70 transition-colors cursor-pointer`}
              >
                <div className='flex items-center justify-between mb-2'>
                  <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center'>
                      <Mail className='w-5 h-5 text-purple-400' />
                    </div>
                    <div>
                      <h3 className='font-medium text-white'>
                        {message.sender}
                      </h3>
                      <p className='text-sm text-slate-400'>
                        {message.subject}
                      </p>
                    </div>
                  </div>
                  <span className='text-sm text-slate-400'>
                    {message.timestamp}
                  </span>
                </div>
                <p className='text-slate-300 pl-13'>{message.preview}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

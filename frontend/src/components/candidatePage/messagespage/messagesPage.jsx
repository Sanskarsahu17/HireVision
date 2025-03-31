import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Search, X } from "lucide-react";
import Draggable from "react-draggable";
import Sidebar from "../Sidebar";
import { Avatar } from "../../ui/Avatar";

const messages = [
  {
    id: 1,
    sender: "Sarah Thompson",
    company: "TechCorp",
    role: "HR Manager",
    message:
      "Thank you for your application. We would like to schedule an interview for the Senior Frontend Developer position. Please let us know your availability for next week.",
    timestamp: "2 hours ago",
    unread: true,
    thread: [
      {
        id: 1,
        sender: "Sarah Thompson",
        message: "Hello! Thank you for applying to TechCorp.",
        timestamp: "2 days ago",
      },
      {
        id: 2,
        sender: "You",
        message: "Thank you for considering my application!",
        timestamp: "2 days ago",
      },
    ],
  },
  {
    id: 2,
    sender: "Michael Chen",
    company: "InnovateCo",
    role: "Technical Recruiter",
    message:
      "Your technical assessment results have been reviewed. We're impressed with your performance and would like to proceed with the next round.",
    timestamp: "1 day ago",
    unread: false,
    thread: [],
  },
];

export default function MessagesPage() {
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSendReply = () => {
    if (!replyText.trim()) return;

    // In a real app, this would send the message to an API
    console.log("Sending reply:", replyText);
    setReplyText("");
  };

  return (
    <div className='bg-slate-900 min-h-screen relative'>
      <Sidebar />

      <div className='ml-64 grid grid-cols-[1fr,auto] h-screen relative'>
        {/* Messages List */}
        <div className='border-r border-slate-700 relative'>
          <div className='p-4'>
            <div className='relative mb-6'>
              <Search className='absolute left-3 top-3 w-5 h-5 text-slate-400' />
              <input
                type='text'
                placeholder='Search messages...'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className='w-full pl-10 pr-4 py-2 bg-slate-800/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            <div className='space-y-4'>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedMessage?.id === message.id
                      ? "bg-purple-500/20"
                      : "bg-slate-800/30 hover:bg-slate-800/50"
                  } ${message.unread ? "border-l-4 border-purple-500" : ""}`}
                  onClick={() => setSelectedMessage(message)}
                >
                  <div className='flex items-start gap-4'>
                    <Avatar name={message.sender} size='md' />
                    <div className='flex-1 min-w-0'>
                      <div className='flex items-center justify-between mb-1'>
                        <h3 className='font-medium text-white'>
                          {message.sender}
                        </h3>
                        <span className='text-sm text-slate-400'>
                          {message.timestamp}
                        </span>
                      </div>
                      <p className='text-sm text-slate-400 mb-1'>
                        {message.company}
                      </p>
                      <p className='text-sm text-slate-300 truncate'>
                        {message.message}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Thread */}
        {selectedMessage ? (
          <Draggable handle='.drag-handle'>
            <div className='w-[500px] border border-slate-700 flex flex-col absolute right-0 top-20 bg-gray-800 rounded-lg shadow-lg'>
              <div className='p-2 border-b border-slate-700 drag-handle cursor-move'>
                <div className='flex items-center justify-between '>
                  <div className='flex items-center gap-4'>
                    <Avatar name={selectedMessage.sender} size='md' />
                    <div className='flex   gap-1 justify-between items-baseline'>
                      <h2 className='text-xl font-semibold text-white'>
                        {selectedMessage.sender}
                      </h2>
                      <p className='text-slate-400'>{selectedMessage.role}</p>
                      <p className='text-sm text-slate-500'>
                        {selectedMessage.company}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedMessage(null)}
                    className='text-slate-400 hover:text-white'
                  >
                    <X className='w-5 h-5' />
                  </button>
                </div>
              </div>

              <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                {selectedMessage.thread.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${
                      msg.sender === "You" ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        msg.sender === "You"
                          ? "bg-purple-500/20 text-white"
                          : "bg-slate-800/50 text-slate-300"
                      }`}
                    >
                      <p className='text-sm mb-1'>{msg.message}</p>
                      <span className='text-xs text-slate-400'>
                        {msg.timestamp}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className='p-2 border-t border-slate-700'>
                <div className='flex items-center gap-1'>
                  <input
                    type='text'
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder='Type your message...'
                    className='flex-1 px-4 py-2 bg-slate-800/50 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500'
                    onKeyPress={(e) => e.key === "Enter" && handleSendReply()}
                  />
                  <button
                    onClick={handleSendReply}
                    className='p-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors'
                  >
                    <Send className='w-5 h-5' />
                  </button>
                </div>
              </div>
            </div>
          </Draggable>
        ) : null}
      </div>
    </div>
  );
}

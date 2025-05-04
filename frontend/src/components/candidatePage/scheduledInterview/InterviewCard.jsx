// InterviewCard.jsx
import React from "react";
import { Calendar, Clock, Building2, Video, Users, CheckCircle2, AlertCircle, Bot, User2 } from "lucide-react";
import { motion } from "framer-motion";
import { Avatar } from "../../ui/Avatar";

export default function InterviewCard({ interview, onViewDetails, isSelected }) {
    const isAI = interview.type.toLowerCase().includes("ai");

    const containerStyle = isAI
        ? "bg-gradient-to-r from-indigo-900 via-indigo-700 to-indigo-500"
        : "bg-gradient-to-r from-slate-800 via-slate-700 to-slate-600";

    const labelStyle = isAI ? "bg-indigo-300/20 text-indigo-300" : "bg-purple-500/20 text-purple-300";

    const statusStyle = isAI ? "text-indigo-300" : "text-yellow-400";
    const statusIcon = isAI ? <Bot className='w-4 h-4' /> : <AlertCircle className='w-4 h-4' />;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`rounded-xl p-6 ${containerStyle}`}
        >
            <div className='flex items-start justify-between'>
                <div className='space-y-4'>
                    <div>
                        <h3 className='text-xl font-semibold text-white mb-2'>
                            {interview.position}
                        </h3>
                        <div className='flex items-center gap-4 text-slate-200'>
                            <div className='flex items-center gap-2'>
                                <Building2 className='w-4 h-4' />
                                {interview.company}
                            </div>
                            <div className='flex items-center gap-2'>
                                <Calendar className='w-4 h-4' />
                                {interview.date}
                            </div>
                            <div className='flex items-center gap-2'>
                                <Clock className='w-4 h-4' />
                                {interview.time} ({interview.duration})
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center gap-4'>
                        <span className={`px-4 py-2 ${labelStyle} rounded-lg`}>
                            {interview.type}
                        </span>
                        {interview.status === "upcoming" && (
                            <span className={`flex items-center gap-2 ${statusStyle}`}>
                                {statusIcon}
                                Upcoming
                            </span>
                        )}
                    </div>

                    <div>
                        <h4 className='text-white font-medium mb-2'>Interviewers:</h4>
                        <div className='flex items-center gap-4'>
                            {interview.interviewers.map((interviewer, i) => (
                                <div key={i} className='flex items-center gap-2'>
                                    <Avatar name={interviewer.name} size='sm' />
                                    <div>
                                        <p className='text-sm text-white'>{interviewer.name}</p>
                                        <p className='text-xs text-slate-300'>{interviewer.role}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* {isAI ? 
        () : ()} */}

                <div className='flex flex-col gap-3'>
                    {isAI ? (
                        <button
                                
                                className='inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-white to-slate-100 text-black font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-105 transform transition duration-300 ease-in-out'

                            >
                                <Users className='w-4 h-4' />
                                Start Now
                            </button>
                    ) : (
                        <>
                            <a
                                href={interview.meetingLink}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-300 rounded-lg hover:bg-emerald-500/30 transition-colors'
                            >
                                <Video className='w-4 h-4' />
                                Join Meeting
                            </a>
                            <button
                                onClick={onViewDetails}
                                className='inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors'
                            >
                                <Users className='w-4 h-4' />
                                View Details
                            </button>
                        </>
                    )}

                </div>
            </div>

            {isSelected && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className='mt-6 pt-6 border-t border-white/20'
                >
                    <h4 className='text-white font-medium mb-3'>Preparation Checklist:</h4>
                    <ul className='space-y-2'>
                        {interview.preparation.map((item, i) => (
                            <li key={i} className='flex items-center gap-2 text-white/80'>
                                <CheckCircle2 className='w-4 h-4 text-emerald-400' />
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>
            )}
        </motion.div>
    );
}

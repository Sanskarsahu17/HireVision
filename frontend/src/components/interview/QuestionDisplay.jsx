import React from "react";
import { useInterview } from "../../context/InterviewContext";

export default function QuestionDisplay() {
  const { currentQuestion, isLoading } = useInterview();

  if (isLoading) {
    return (
      <div className='animate-pulse'>
        <div className='h-6 bg-slate-700 rounded w-3/4 mb-2'></div>
        <div className='h-6 bg-slate-700 rounded w-1/2'></div>
      </div>
    );
  }

  return (
    <div className='space-y-2'>
      <h2 className='text-xl font-semibold text-white'>{currentQuestion}</h2>
    </div>
  );
}

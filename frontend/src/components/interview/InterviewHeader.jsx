import React from "react";
import { useInterview } from "../../context/InterviewContext";

export default function InterviewHeader() {
  const { currentQuestionIndex, totalQuestions } = useInterview();

  return (
    <div className='text-center space-y-4'>
      <h1 className='text-3xl font-bold text-white'>Virtual Interview</h1>
      <p className='text-slate-400'>
        Answer the questions with clarity and confidence.
      </p>
      <div className='inline-block px-4 py-2 bg-slate-800/50 rounded-lg'>
        <p className='text-slate-300'>
          Question {currentQuestionIndex + 1} of {totalQuestions}
        </p>
      </div>
    </div>
  );
}

import React from "react";
import InterviewHeader from "../../components/interview/InterviewHeader";
import QuestionDisplay from "../../components/interview/QuestionDisplay";
import RecordingControls from "../../components/interview/RecordingControls";
import ResponseArea from "../../components/interview/ResponseArea";
import ActionButtons from "../../components/interview/ActionButtons";
import { InterviewProvider } from "../../context/InterviewContext";

export default function InterviewPage() {
  return (
    <InterviewProvider>
      <div className='min-h-screen bg-slate-900 p-6 mt-5'>
        <div className='max-w-4xl mx-auto space-y-8'>
          <InterviewHeader />
          <div className='bg-slate-800/30 rounded-xl p-8 space-y-8'>
            <QuestionDisplay />
            <RecordingControls />
            <ResponseArea />
            <ActionButtons />
          </div>
        </div>
      </div>
    </InterviewProvider>
  );
}

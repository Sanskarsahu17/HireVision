import React from "react";
import { useInterview } from "../../context/InterviewContext";

export default function ResponseArea() {
  const { currentResponse, updateResponse, isRecording } = useInterview();

  return (
    <div className='space-y-2'>
      <label
        htmlFor='response'
        className='block text-sm font-medium text-slate-400'
      >
        Your Response
      </label>
      <textarea
        id='response'
        value={currentResponse}
        onChange={(e) => updateResponse(e.target.value)}
        placeholder='Your transcription will appear here...'
        className='w-full h-40 px-4 py-3 bg-slate-700/50 text-white rounded-lg placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500'
        disabled={isRecording}
      />
    </div>
  );
}

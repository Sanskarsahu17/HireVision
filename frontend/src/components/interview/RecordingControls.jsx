import React from "react";
import { Mic, Square } from "lucide-react";
import { useInterview } from "../../context/InterviewContext";

export default function RecordingControls() {
  const { isRecording, startRecording, stopRecording } = useInterview();

  return (
    <div className='flex justify-center gap-4'>
      {!isRecording ? (
        <button
          onClick={startRecording}
          className='flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors'
          title='Click to start recording your response'
        >
          <Mic className='w-5 h-5' />
          Start Recording
        </button>
      ) : (
        <button
          onClick={stopRecording}
          className='flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors animate-pulse'
          title='Click to stop and review your response'
        >
          <Square className='w-5 h-5' />
          Stop Recording
        </button>
      )}
    </div>
  );
}

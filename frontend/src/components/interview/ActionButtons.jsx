import React from "react";
import { ArrowRight, Send } from "lucide-react";
import { useInterview } from "../../context/InterviewContext";

export default function ActionButtons() {
  const { nextQuestion, submitResponses, isLastQuestion } = useInterview();

  return (
    <div className='flex justify-between'>
      {!isLastQuestion ? (
        <button
          onClick={nextQuestion}
          className='flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors'
        >
          Next Question
          <ArrowRight className='w-5 h-5' />
        </button>
      ) : (
        <button
          onClick={submitResponses}
          className='flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors'
        >
          Submit All Responses
          <Send className='w-5 h-5' />
        </button>
      )}
    </div>
  );
}

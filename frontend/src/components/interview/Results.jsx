import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Loader2, AlertCircle, ArrowLeft } from "lucide-react";
import { api } from "../../utils/InterviewApi";


export default function Results() {
  const [answers, setAnswers] = useState({});
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    async function loadResults() {
      try {
        console.log("Loading results...");

        // 1. Get questions and answers in parallel
        const [fetchedQuestions, fetchedAnswers] = await Promise.all([
          api.getQuestions(),
          api.getAnswers(),
        ]);

        console.log("Questions:", fetchedQuestions);
        console.log("Answers:", fetchedAnswers);

        // 2. Map answers to questions
        const formattedAnswers = fetchedQuestions.reduce((acc, question) => {
          acc[question.id] =
            fetchedAnswers[question.id] || "No answer recorded";
          return acc;
        }, {});

        console.log("Formatted answers:", formattedAnswers);

        setQuestions(fetchedQuestions);
        setAnswers(formattedAnswers);
        setIsLoading(false);
      } catch (err) {
        console.error("Load results error:", err);
        setError("Failed to load results");
        setIsLoading(false);
      }
    }

    loadResults();
  }, []); // Empty array = run once on mount

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
        <div className='flex items-center gap-3'>
          <Loader2 className='animate-spin' size={24} />
          <span>Loading results...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
        <div className='bg-red-500/20 p-4 rounded-lg flex items-center gap-3'>
          <AlertCircle className='text-red-500' size={24} />
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-900 text-white'>
      <div className='container mx-auto p-6 pt-24  w-2/3'>
        {/* Summary Header */}
        <div className='bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-600/30 mb-6'>
          <h2 className='text-2xl font-bold mb-4'>Interview Summary</h2>
          <div className='flex gap-4 text-sm'>
            <div className='px-3 py-1 rounded-full bg-purple-500/20 text-purple-300'>
              {questions.length} Questions Completed
            </div>
            <div className='px-3 py-1 rounded-full bg-blue-500/20 text-blue-300'>
              Completed on {new Date().toLocaleDateString()}
            </div>
          </div>
        </div>

        {/* Results Grid */}
        <div className='space-y-6'>
          {questions.map((question) => (
            <div
              key={question.id}
              className='bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-600/30'
            >
              <div className='flex items-center gap-3 mb-4'>
                <span className='px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm'>
                  {question.category}
                </span>
                <span className='px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                  {question.difficulty}
                </span>
              </div>

              <div className='space-y-4'>
                <div>
                  <h3 className='text-lg font-semibold mb-2'>
                    Question {question.id}
                  </h3>
                  <p className='text-gray-300'>{question.text}</p>
                </div>

                <div className='bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg'>
                  <h4 className='text-sm text-purple-400 mb-3'>Your Answer</h4>
                  <p className='text-gray-200 leading-relaxed'>
                    {answers[question.id]}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* return to dashbaord button */}

        <div className=' flex justify-center items-center mt-8  rounded   '>
          <div className=' bg-slate-500 text-black flex gap-2 p-4 rounded-md group '>
            <button
              onClick={() => navigate("/candidate/dashboard")}
              className='bg-slate-500 text-white px-6 py-3 rounded-md flex items-center gap-2 hover:bg-slate-600 transition-colors'
            >
              <ArrowLeft className='w-6 h-6' />
              Return to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

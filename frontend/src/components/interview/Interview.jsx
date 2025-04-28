/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Play,
  Pause,
  Bot,
  ChevronRight,
  Check,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { api } from "../../utils/InterviewApi";

// import { useAudioVisualization } from '../../hooks/useAudioVisualization';

export default function Interview() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDone, setRecordingDone] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  // const audioLevels = useAudioVisualization(isRecording);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioChunks, setAudioChunks] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const loadQuestions = async () => {
      try {
        const fetchedQuestions = await api.getQuestions();
        setQuestions(fetchedQuestions);
        setTimeLeft(fetchedQuestions[0].timeLimit);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to load interview questions");
        setIsLoading(false);
      }
    };
    loadQuestions();
  }, []);

  useEffect(() => {
    let mediaStream;
    let recorder;

    async function setupRecording() {
      try {
        mediaStream = await navigator.mediaDevices.getUserMedia({
          audio: true,
        });
        recorder = new MediaRecorder(mediaStream);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioChunks((chunks) => [...chunks, event.data]);
          }
        };

        // Add onstop event handler
        recorder.onstop = () => {
          console.log("Recording stopped, chunks:", audioChunks);
        };

        setMediaRecorder(recorder);
      } catch (error) {
        console.error("Error accessing microphone:", error);
        setError("Could not access microphone");
      }
    }

    setupRecording();

    // Cleanup function
    return () => {
      if (recorder) {
        recorder.stream?.getTracks().forEach((track) => track.stop());
        if (recorder.state !== "inactive") {
          recorder.stop();
        }
      }
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [currentQuestionIndex]); // Re-initialize for each question

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      setIsRecording(false);

      // Wait a moment for the last chunks to be processed
      await new Promise((resolve) => setTimeout(resolve, 100));

      // Create audio blob from chunks
      const audioBlob = new Blob(audioChunks, { type: "audio/webm" });
      console.log("Submitting audio blob of size:", audioBlob.size, "bytes");

      // Get transcription from Assembly AI
      const result = await api.submitAnswer(
        questions[currentQuestionIndex].id,
        audioBlob
      );

      // Store the transcription
      await api.storeAnswer(
        questions[currentQuestionIndex].id,
        result.transcript
      );

      setHasSubmitted(true);
      setAudioChunks([]);
    } catch (error) {
      setError("Failed to submit answer");
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      navigate("results");
    } else {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      // Reset states for next question
      setHasSubmitted(false);
      setIsRecording(false);
      setAudioChunks([]);
      setTimeLeft(questions[currentQuestionIndex + 1].timeLimit);
      setError("");
    }
  };

  const handleEndInterview = () => {
    if (window.confirm("Are you sure you want to end the interview?")) {
      navigate("/candidate/dashboard"); // Use navigate to go to candidate dashboard
    }
  };

  if (isLoading) {
    return (
      <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
        <div className='flex items-center gap-3'>
          <Loader2 className='animate-spin' size={24} />
          <span>Loading interview...</span>
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

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  const startRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "inactive") {
      setAudioChunks([]);
      // Start recording with a timeslice to get data periodically
      mediaRecorder.start(1000); // Get data every second
      setIsRecording(true);
      console.log("Recording started for question", currentQuestionIndex + 1);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state === "recording") {
      mediaRecorder.stop();
      setIsRecording(false);
      console.log("Recording stopped for question", currentQuestionIndex + 1);
    }
  };

  return (
    <div className='min-h-screen bg-gray-900 text-white mt-5'>
      <div className='bg-gray-800/50 backdrop-blur-sm p-4  border-b border-purple-600/30 '>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center gap-2'>
            <Bot className='text-purple-500' size={24} />
            <h1 className='text-xl font-bold'>HireVision AI</h1>
          </div>
          <div className='flex items-center gap-4'>
            <button
              onClick={handleEndInterview}
              className='px-4 py-2 rounded-lg bg-gray-700 hover:bg-gray-600 border border-gray-600 cursor-pointer transition-colors duration-200 flex items-center gap-2'
            >
              End Interview
            </button>
          </div>
        </div>
      </div>

      <div className='container mx-auto p-6 pt-24 grid grid-cols-3 gap-6'>
        {/* Main Content - Questions */}
        <div className='col-span-2 space-y-6'>
          <div className='bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-600/30'>
            <div className='flex items-center gap-3 mb-4'>
              <span className='px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-sm'>
                {currentQuestion.category}
              </span>
              <span className='px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm'>
                {currentQuestion.difficulty}
              </span>
            </div>
            <h2 className='text-2xl font-bold mb-6'>
              Question {currentQuestionIndex + 1}
            </h2>
            <div className='bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg mb-6'>
              <p className='text-lg'>{currentQuestion.text}</p>
            </div>
          </div>

          {/* Audio Visualization */}
          <div className='bg-gray-800/50 backdrop-blur-sm rounded-lg p-6 border border-purple-600/30'>
            {isRecording ? (
              /* <div className="h-24 flex items-center justify-center gap-1">
                {audioLevels.map((level, index) => (
                  <div
                    key={index}
                    className="w-2 bg-gradient-to-t from-purple-600 to-purple-400 rounded-full transition-all duration-100"
                    style={{ height: `${level}%` }}
                  ></div>
                ))}
              </div> */

              <p>recording started</p>
            ) : (
              <div className='h-24 flex items-center justify-center text-gray-400'>
                {hasSubmitted
                  ? "Answer submitted successfully"
                  : "Click 'Start Recording' to begin your answer"}
              </div>
            )}

            {/* Recording Controls */}
            <div className='mt-8 flex justify-center gap-6'>
              {!hasSubmitted && (
                <>
                  {!isSubmitting ? (
                    <button
                      onClick={() =>
                        isRecording ? stopRecording() : startRecording()
                      }
                      disabled={timeLeft === 0 || isSubmitting}
                      className={`px-6 py-3 rounded-full flex items-center gap-2 ${
                        isRecording
                          ? "bg-red-600 hover:bg-red-700"
                          : timeLeft === 0
                          ? "bg-gray-700 cursor-not-allowed"
                          : "bg-purple-600 hover:bg-purple-700"
                      } transition-colors`}
                    >
                      {isRecording ? <Pause size={20} /> : <Play size={20} />}
                      {isRecording ? "Stop Recording" : "Start Recording"}
                    </button>
                  ) : (
                    <div className='flex items-center gap-2 text-gray-400'>
                      <Loader2 className='animate-spin' size={20} />
                      <span>Processing recording...</span>
                    </div>
                  )}
                  {isRecording && (
                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className='px-6 py-3 rounded-full flex items-center gap-2 bg-green-600 hover:bg-green-700 transition-colors'
                    >
                      {isSubmitting ? (
                        <Loader2 className='animate-spin' size={20} />
                      ) : (
                        <Check size={20} />
                      )}
                      {isSubmitting ? "Processing..." : "Submit Answer"}
                    </button>
                  )}
                </>
              )}
              {hasSubmitted && (
                <button
                  onClick={handleNextQuestion}
                  className='px-6 py-3 rounded-full flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-colors'
                >
                  {isLastQuestion ? "View Results" : "Next Question"}
                  <ChevronRight size={20} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          {/* Video Preview */}
          <div className='bg-gray-800/50 backdrop-blur-sm aspect-video rounded-lg overflow-hidden border border-purple-600/30 relative'>
            <video
              className='w-full h-full object-cover'
              autoPlay
              muted
              playsInline
            />
            <div className='absolute bottom-4 left-4 px-3 py-1 rounded-full bg-red-500 text-sm flex items-center gap-2'>
              <div className='w-2 h-2 rounded-full bg-white animate-pulse'></div>
              Recording
            </div>
          </div>

          {/* Interview Progress */}
          {/* <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-purple-600/30">
            <h3 className="text-sm text-purple-400 mb-4">Interview Progress</h3>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span>Question {currentQuestionIndex + 1} of {questions.length}</span>
                <span className="text-purple-400">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-700/50 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-purple-600 to-purple-400 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

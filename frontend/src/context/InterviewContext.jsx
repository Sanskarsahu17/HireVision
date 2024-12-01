import React, { createContext, useContext, useState, useEffect } from "react";
import { fetchQuestion, simulateTranscription } from "../utils/InterviewApi";

const InterviewContext = createContext();

export function InterviewProvider({ children }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadQuestions();
  }, []);

  const loadQuestions = async () => {
    try {
      const loadedQuestions = await Promise.all(
        [1, 2, 3, 4, 5].map(fetchQuestion)
      );
      setQuestions(loadedQuestions);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading questions:", error);
    }
  };

  const startRecording = () => {
    setIsRecording(true);
    simulateTranscription((text) => {
      setResponses((prev) => {
        const newResponses = [...prev];
        newResponses[currentQuestionIndex] = text;
        return newResponses;
      });
    });
  };

  const stopRecording = () => {
    setIsRecording(false);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  const submitResponses = () => {
    console.log("All responses:", responses);
    alert("Interview completed! Check console for responses.");
  };

  const updateResponse = (text) => {
    setResponses((prev) => {
      const newResponses = [...prev];
      newResponses[currentQuestionIndex] = text;
      return newResponses;
    });
  };

  return (
    <InterviewContext.Provider
      value={{
        currentQuestionIndex,
        totalQuestions: questions.length,
        currentQuestion: questions[currentQuestionIndex]?.title || "",
        currentResponse: responses[currentQuestionIndex] || "",
        isRecording,
        isLoading,
        isLastQuestion: currentQuestionIndex === questions.length - 1,
        startRecording,
        stopRecording,
        nextQuestion,
        submitResponses,
        updateResponse,
      }}
    >
      {children}
    </InterviewContext.Provider>
  );
}

export function useInterview() {
  const context = useContext(InterviewContext);
  if (!context) {
    throw new Error("useInterview must be used within an InterviewProvider");
  }
  return context;
}

import React, { useState, useEffect, useRef } from "react";
import { Mic, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLocation, useSearchParams } from "react-router-dom";
import axios from "axios";

const VirtualInterviewPage = () => {
  const [messages, setMessages] = useState([
    { role: "Interviewer", text: "Welcome! Let's begin your virtual interview. Tell me about yourself." },
  ]);
  const [listening, setListening] = useState(false);
  const recognitionRef = useRef(null);
  const [searchParams] = useSearchParams();
  const job_id = searchParams.get("job_id");
  const job_position = searchParams.get("job_position");
  const company_name = searchParams.get("company_name");
  const isSendingRef = useRef(false);

  const sendToBackend = async (updatedMessages) => {
    console.log("Backend c_logs: ",messages);
    try {
      const response = await axios.post(
        "http://localhost:5000/api/virtualInterview/getQuestions",
        {
          jobId: job_id,
          conversationLogs: updatedMessages,
        },
        { withCredentials: true }
      );
      const reply = response.data.response_data.question || "Thank you for your answer.";
      setMessages(prev => [...prev, { role: "Interviewer", text: reply }]);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const finishInterview = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/virtualInterview/getScoreInterview",
        {
          jobId: job_id,
          conversationLogs: messages,
        },
        { withCredentials: true }
      );
      alert("Interview evaluation complete!");
    } catch (error) {
      console.error("Error scoring interview:", error);
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Your browser doesn't support Speech Recognition. Try Chrome.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript) {
    handleSend(transcript); // only call once here
  }
    };

    recognitionRef.current = recognition;
    return () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
  };
  }, []);

  const startListening = () => {
    if (recognitionRef.current) recognitionRef.current.start();
  };

const handleSend = async (text) => {
  if (!text.trim() || isSendingRef.current) return;
  isSendingRef.current = true;

  try {
    // Update UI immediately with user message
    setMessages(prev => [...prev, { role: "Candidate", text }]);
    
    // Get updated messages including the new one
    const updatedMessages = [...messages, { role: "Candidate", text }];
    
    await sendToBackend(updatedMessages);
  } catch (err) {
    console.error("Error in handleSend:", err);
  } finally {
    isSendingRef.current = false;
  }
};


  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-[#0f172a] text-white font-sans px-4">
      <h1 className="text-3xl font-bold mb-6">Virtual AI Interviewer</h1>

      <div className="w-full max-w-4xl h-[60vh] bg-[#1e293b] rounded-xl shadow-xl p-6 overflow-hidden flex flex-col justify-between">
        <div className="space-y-4 overflow-auto flex-1 pr-2">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "Interviewer" ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`px-4 py-3 rounded-2xl max-w-[70%] text-sm ${
                  msg.role === "Interviewer"
                    ? "bg-blue-900 text-left"
                    : "bg-green-700 text-right"
                }`}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button
          onClick={startListening}
          className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition"
        >
          <Mic className="h-5 w-5" />
          {listening ? "Listening..." : "Answer with Voice"}
          {listening && <Loader2 className="h-4 w-4 animate-spin ml-2" />}
        </button>

        <button
          onClick={finishInterview}
          className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition"
        >
          Finish Interview
        </button>
      </div>
    </div>
  );
};

export default VirtualInterviewPage;

// src/components/Quiz.js

import React, { useState } from "react";
import questions from "../../data/quizQuestions";
import Sidebar from "./Sidebar";

const Quiz = () => {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [timeLeft,setTimeLeft] = useState(questions.length*60);

  const handleOptionClick = (option) => {
    setSelected(option);
  };

  const handleNext = () => {
    if (selected === questions[currentQ].answer) {
      setScore(score + 1);
    }

    setSelected(null);

    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleJumpTo = (index) => {
    setCurrentQ(index);
    setSelected(null);
    
  };

  return (
    <div className="flex  justify-between w-full ">
    <div style={{ width: "50%", margin: "0 auto", paddingTop: "20px" }}>
      {showScore ? (
        <div>
          <h2>Quiz Completed!</h2>
          <p>Your Score: {score} / {questions.length}</p>
        </div>
      ) : (
        <div>
          <h3>Q{currentQ + 1}: {questions[currentQ].question}</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {questions[currentQ].options.map((option, i) => (
              <li key={i} style={{ marginBottom: "10px" }}>
                <button
                  onClick={() => handleOptionClick(option)}
                  style={{
                    color: "black",
                    padding: "10px",
                    width: "100%",
                    backgroundColor: selected === option ? "#add8e6" : "#f0f0f0",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={handleNext}
            disabled={!selected}
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              marginTop: "20px"
            }}
          >
            {currentQ === questions.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      )}
    </div>
    <Sidebar
        questions={questions}
        currentQ={currentQ}
        handleJumpTo={handleJumpTo}
       
      />
    </div>
  );
};

export default Quiz;

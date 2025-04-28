// src/App.js

import React from "react";
import Quiz from "../../components/mcqQuiz/Quiz";

function MCQ() {
  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>MCQ Quiz Platform</h1>
      <Quiz />
    </div>
  );
}

export default MCQ;

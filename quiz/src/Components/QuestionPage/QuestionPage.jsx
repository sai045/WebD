import React, { useState } from "react";
import { Question } from "./Question";
import "./QuestionPage.css";
import ProgressBar from "@ramonak/react-progress-bar";

const QuestionPage = ({ score, setScore }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const questions = [
    {
      Question: "What is 2+2?",
      A: "3",
      B: "4",
      C: "5",
      D: "6",
      Answer: "B"
    },
    {
      Question: "What is 5+9?",
      A: "3",
      B: "4",
      C: "5",
      D: "14",
      Answer: "D"
    },
    {
      Question: "What is 1+34?",
      A: "3",
      B: "4",
      C: "35",
      D: "6",
      Answer: "C"
    },
    {
      Question: "What is 44+72?",
      A: "3",
      B: "116",
      C: "5",
      D: "6",
      Answer: "B"
    }
  ];
  return (
    <div className="questionPage">
      <div className="progressBar">
        <div className="Bar">
          <ProgressBar
            completed={(questionNumber * 100) / questions.length}
            customLabel={`${questionNumber}/${questions.length}`}
          />
        </div>
        <div className="score">
          <h3>Score</h3>
          <h2>{score}</h2>
        </div>
      </div>
      <Question
        questionNumber={questionNumber}
        question={questions[questionNumber]}
        setQuestionNumber={setQuestionNumber}
        setScore={setScore}
        score={score}
        maxQuestions={questions.length}
      />
    </div>
  );
};

export default QuestionPage;

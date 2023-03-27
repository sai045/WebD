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
      Question: "What is 2+2?feq3wd",
      A: "3",
      B: "4",
      C: "5",
      D: "6",
      Answer: "B"
    },
    {
      Question: "What is 2+2?",
      A: "3",
      B: "4",
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

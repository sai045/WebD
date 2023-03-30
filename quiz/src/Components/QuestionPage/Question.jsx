import React from "react";
import { useNavigate } from "react-router";

export const Question = ({
  question,
  setScore,
  score,
  setQuestionNumber,
  questionNumber,
  maxQuestions
}) => {
  const navigate = useNavigate();

  const checkAnswer = (guess) => {
    if (guess === question["Answer"]) {
      setScore(score + 1);
    }
    if (questionNumber + 1 === maxQuestions) {
      navigate("/endpage");
      return;
    } else {
      setQuestionNumber(questionNumber + 1);
    }
  };
  return (
    <div>
      <h2 className="question">{question["Question"]}</h2>
      <div className="options">
        <button onClick={() => checkAnswer("A")}>A</button>
        <p>{question.A}</p>
      </div>
      <div className="options">
        <button onClick={() => checkAnswer("B")}>B</button>
        <p>{question["B"]}</p>
      </div>
      <div className="options">
        <button onClick={() => checkAnswer("C")}>C</button>
        <p>{question["C"]}</p>
      </div>
      <div className="options">
        <button onClick={() => checkAnswer("D")}>D</button>
        <p>{question["D"]}</p>
      </div>
    </div>
  );
};

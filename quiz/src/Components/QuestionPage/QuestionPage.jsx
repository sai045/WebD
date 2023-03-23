import React from "react";
import "./QuestionPage.css";

const QuestionPage = () => {
  return (
    <div className="questionPage">
      <h2 className="question">Question</h2>
      <div className="options">
        <button>A</button>
        <p>Apple</p>
      </div>
      <div className="options">
        <button>B</button>
        <p>Banana</p>
      </div>
      <div className="options">
        <button>C</button>
        <p>Cow</p>
      </div>
      <div className="options">
        <button>D</button>
        <p>Donkey</p>
      </div>
    </div>
  );
};

export default QuestionPage;

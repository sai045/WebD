import React from "react";
import "./HighScore.css";

const HighScore = () => {
  return (
    <>
      <div className="highScore">
        <h2>High Score</h2>
        <p>{localStorage.getItem("highScore")}</p>
      </div>
    </>
  );
};

export default HighScore;

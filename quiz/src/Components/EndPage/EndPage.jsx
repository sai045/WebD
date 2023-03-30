import React, { useState } from "react";
import "./EndPage.css";
import { useNavigate } from "react-router";

const EndPage = ({ score, setScore }) => {
  const [name, setName] = useState("");
  const navigate = useNavigate();
  return (
    <div className="endPage">
      <h2>{score}</h2>
      <input
        type="text"
        placeholder="username"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      <button
        onClick={() => {
          var localScore = localStorage.getItem("highScore");
          if (localScore < score) {
            localStorage.setItem("highScore", score);
          }
        }}
      >
        Save
      </button>
      <br />
      <button
        onClick={() => {
          setScore(0);
          navigate("/question");
        }}
      >
        Play Again
      </button>
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go Home
      </button>
    </div>
  );
};

export default EndPage;

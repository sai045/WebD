import React from "react";
import { useNavigate } from "react-router";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home">
        <h2>Quiz App</h2>
        <button
          onClick={() => {
            navigate("/question");
          }}
        >
          Quiz
        </button>
        <br />
        <button
          onClick={() => {
            navigate("/highScore");
          }}
        >
          High Score
        </button>
      </div>
    </>
  );
};

export default Home;

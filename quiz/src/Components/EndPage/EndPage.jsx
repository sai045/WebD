import React from "react";
import "./EndPage.css";

const EndPage = ({ score }) => {
  return (
    <div className="endPage">
      <h2>{score}</h2>
      <input type="text" placeholder="username" />
      <br />
      <button>Save</button>
      <br />
      <button>Play Again</button>
      <br />
      <button>Go Home</button>
    </div>
  );
};

export default EndPage;

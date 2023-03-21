import React from "react";
import "./Button.css";

const Button = ({ value, getValue }) => {
  const handleClick = () => {
    getValue(value);
  };
  document.addEventListener("keydown", (event) => {
    if (
      event.key in [1, 2, 3, "/", 4, 5, 6, "-", 7, 8, 9, "*", "<", 0, "=", "+"]
    ) {
      getValue(event.key);
    }
  });
  return (
    <>
      <div className="calculatorButton">
        <button onClick={handleClick}>{value}</button>
      </div>
    </>
  );
};
export default Button;

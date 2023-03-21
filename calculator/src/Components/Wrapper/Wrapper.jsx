import React, { useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import "./Wrapper.css";

const Wrapper = () => {
  const numbers = [1, 2, 3, "/", 4, 5, 6, "-", 7, 8, 9, "*", "<", 0, "=", "+"];
  const [operation, setOperation] = useState(null);
  const [state, setState] = useState(0);
  const [firstValue, setFirstValue] = useState(null);
  const getValue = (value) => {
    var res;
    if (parseInt(value) === value) {
      setState(state * 10 + value);
    } else if (value === "<") {
      setState(parseInt(state / 10));
    } else if (value === "+") {
      setOperation("+");
    } else if (value === "-") {
      setOperation("-");
    } else if (value === "*") {
      setOperation("*");
    } else if (value === "/") {
      setOperation("/");
    } else if (value === "=") {
      switch (operation) {
        case "+":
          break;
        case "-":
          break;
        case "*":
          break;
        case "/":
          break;
        default:
          setState(state);
      }
    }
  };
  return (
    <>
      <div className="calculatorWrapper">
        <Display state={state} />
        {numbers.map((button) => {
          return <Button value={button} getValue={getValue} />;
        })}
      </div>
    </>
  );
};
export default Wrapper;

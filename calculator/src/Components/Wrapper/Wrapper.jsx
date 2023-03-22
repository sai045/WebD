import React, { useState } from "react";
import Button from "../Button/Button";
import Display from "../Display/Display";
import "./Wrapper.css";

const Wrapper = () => {
  const numbers = [1, 2, 3, "/", 4, 5, 6, "-", 7, 8, 9, "*", "<", 0, "=", "+"];
  const [operation, setOperation] = useState(null);
  const [state, setState] = useState(0);
  const [firstValue, setFirstValue] = useState(null);

  const cal = (number1, operand, number2) => {
    switch (operand) {
      case "+":
        return number1 + number2;
      case "-":
        return number1 - number2;
      case "*":
        return number1 * number2;
      case "/":
        return number1 / number2;
      default:
        return state;
    }
  };
  const getValue = (value) => {
    var res;
    if (parseInt(value) === value) {
      setState(state * 10 + value);
    } else if (value === "<") {
      setState(parseInt(state / 10));
    } else if (value === "+") {
      if (operation == null) {
        setFirstValue(state);
        setOperation("+");
        setState(0);
      } else {
        setOperation("+");
        setState(cal(firstValue, operation, state));
        setFirstValue(cal(firstValue, operation, state));
        setState(0);
      }
    } else if (value === "-") {
      if (operation === null) {
        setFirstValue(state);
        setOperation("-");
        setState(0);
      } else {
        setOperation("-");
        setState(cal(firstValue, operation, state));
        setFirstValue(cal(firstValue, operation, state));
        setState(0);
      }
    } else if (value === "*") {
      if (operation === null) {
        setFirstValue(state);
        setOperation("*");
        setState(0);
      } else {
        setOperation("*");
        setState(cal(firstValue, operation, state));
        setFirstValue(cal(firstValue, operation, state));
        setState(0);
      }
    } else if (value === "/") {
      if (operation === null) {
        setFirstValue(state);
        setOperation("/");
        setState(0);
      } else {
        setOperation("/");
        setState(cal(firstValue, operation, state));
        setFirstValue(cal(firstValue, operation, state));
        setState(0);
      }
    } else if (value === "=") {
      switch (operation) {
        case "+":
          setState(firstValue + state);
          res = firstValue + state;
          setFirstValue(res);
          break;
        case "-":
          setState(firstValue - state);
          break;
        case "*":
          setState(firstValue * state);
          break;
        case "/":
          setState(firstValue / state);
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

import React, { useState } from "react";
import "./Display.css";

const Display = ({ state }) => {
  
  return (
    <>
      <div className="calculatorDisplay">
        <p>{state}</p>
      </div>
    </>
  );
};

export default Display;

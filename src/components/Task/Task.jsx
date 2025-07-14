import React, { useState } from "react";
import "./Task.css";

function Task() {
  const [value1, setValue1] = useState();
  const [value2, setValue2] = useState();
  const [result, setResult] = useState();

  const plus = () => {
    setResult((+value1) + (+value2));
  };

  const minus = () => {
    setResult((+value1) - (+value2));
  };

  const multiply = () => {
    setResult((+value1) * (+value2));
  }

  const division = () => {
    setResult((+value1) / (+value2));
  }

  return (
    <div className="task">
      <input className="input-default"
        onChange={(e) => setValue1(e.target.value)}
        type="number"
        placeholder="Number 1"
      />
      <input className="input-default"
        onChange={(e) => setValue2(e.target.value)}
        type="number"
        placeholder="Number 2"
      />

      <div className="btn-block">
        <button className="btn-default btn-darkMode h-10 w-10 " onClick={plus}>+</button>
        <button className="btn-default btn-darkMode h-10 w-10 " onClick={minus}>-</button>
        <button className="btn-default btn-darkMode h-10 w-10 " onClick={multiply}>*</button>
        <button className="btn-default btn-darkMode h-10 w-10 " onClick={division}>/</button>
      </div>

      <h2>{result}</h2>
    </div>
  );
}

export default Task;

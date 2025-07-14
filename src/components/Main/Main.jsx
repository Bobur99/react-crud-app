import React, { useState } from "react";
import "./Main.css";
import HomeWork from "../HomeWork/HomeWork";

function Main() {
  const [inputValue, setInputValue] = useState("");
  const [color, setColor] = useState("");

  const [count, setCount] = useState(0);

  let getValueInput = (e) => {
    setInputValue(e.target.value);
  };

  let resultColor = () => {
    setColor(inputValue);
    console.log(inputValue);
  };


  return (
    <div className="main">
      <HomeWork/>
      <div className="card-input">
        <input
          onChange={getValueInput}
          type="text"
          placeholder="Enter color..."
        />
        <button onClick={resultColor}>send</button>
      </div>

      <div className="container">
        <div className="card" style={{ background: `${color}` }}></div>
      </div>

      <div className="increment-block">
        <button onClick={() => count > 0 && setCount(count - 1)}>-</button>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <h4>
        {count > 0
          ? count > 10
            ? "количество много"
            : count >= 5
            ? "количество достаточно"
            : "количество недостаточно"
          : null}
      </h4>
    </div>
  );
}

export default Main;

import React, { useState } from "react";
import "./Task_1.css";
import { nanoid } from "nanoid";

function Task_1() {
  const [orders, setOrders] = useState([]);
  const [model, setModel] = useState();
  const [color, setColor] = useState();
  const [count, setCount] = useState();
  const [id, setId] = useState(0);


  const orderFunc = (e) => {
    e.preventDefault();

    if (!model || !color || !count) {
      alert("Пожалуйста, заполните все поля.");
      return;
    }
  
    let order = {
      model: model,
      color: color,
      count: count,
      id: nanoid(5),
    };
  
    setOrders((prev) => [...prev, order]);
  
    // Очистка формы
    setModel('');
    setColor('');
    setCount('');
  };

  let deleteFunc = (id) => {
    let filltered = orders.filter((item) => item.id !== id)
    setOrders(filltered)
  }

  return (
    <div className="order-block">
      <form className="order-request">
        <select value={model} required onChange={(e) => setModel(e.target.value)} className="models border-black dark:border-white border-1 rounded-[5px]">
          <option value="">...</option>
          <option value="kia">kia</option>
          <option value="byd">byd</option>
          <option value="chevrolet">chevrolet</option>
        </select>
        <select value={color} required onChange={(e) => setColor(e.target.value)} className="colors border-black dark:border-white border-1 rounded-[5px]">
        <option value="">...</option>
          <option value="qora">qora</option>
          <option value="oq">oq</option>
          <option value="qizil">qizil</option>
        </select>
        <input value={count} required
        className="input-default"
          onChange={(e) => setCount(e.target.value)}
          type="number"
          placeholder="count..."
        />
        <button className="btn-default btn-darkMode " onClick={orderFunc}>send</button>
      </form>

      <div className="cards-block">
        {orders.length > 0
          ? orders.map((item) => (
              <div key={item.id} className="order-card">
                <h4>Order - {item.id}</h4>
                <h5>Model: {item.model}</h5>
                <h5>Color: {item.color}</h5>
                <h5>Count: {item.count}</h5>
                <button onClick={()=>deleteFunc(item.id)} className="btn-del">delete</button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Task_1;

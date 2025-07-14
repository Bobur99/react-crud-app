import React, { useState } from "react";
import "./HomeWork.css";
import { nanoid } from "nanoid";

function HomeWork() {
  const [product, setProduct] = useState([]);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [link, setLink] = useState("");

  const [showBtn, setShowBtn] = useState(false)


  const enter = () => {
    const newProduct = {
      name: name,
      price: price,
      link: link,
      id: nanoid(5),
    };

    setProduct((prev) => [...prev, newProduct]);
    setName('')
    setPrice('')
    setLink('')
  };

  const deleteFunc = (id) => {
    let filtered = product.filter(item => item.id !== id)
    setProduct(filtered)
  }

  console.log(product);

    let showBox = () => {
        setShowBtn(!showBtn)
    }


  return (
    <div>
      <div className="container">
        <div className="wrapper">
            <button onClick={showBox}>Toggle Btn</button>
            {showBtn ? <div className="box"></div> : null}
        </div>
        <div className="wrapper-1">
          <input
            value={name}
            onChange={(e) => setName(e.target.value.trim())}
            type="text"
            placeholder="Наименование продукта..."
          />
          <input
          value={price}
            onChange={(e) => setPrice(e.target.value.trim())}
            type="text"
            placeholder="Цена"
          />
          <input
          value={link}
            onChange={(e) => setLink(e.target.value.trim())}
            type="text"
            placeholder="Ссылка на продукта"
          />
          <button onClick={enter}>Отправить</button>
        </div>

        <div className="wrapper-2">
          {product.map((item) => (
            <div key={item.id} className="card-product">
              <div className="images">
                <img src={item.link} alt={item.name} />
              </div>
              <h3>Product: {item.name}</h3>
              <h4>Price: {item.price}</h4>
              <button className="delete-btn" onClick={() => deleteFunc(item.id)}>Удалить</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeWork;

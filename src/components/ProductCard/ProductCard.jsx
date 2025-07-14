import React from "react";

function ProductCard({item, addToBasket}) {
  return (
    <div key={item.id} className="card">
      <div className="img-wrapper">
        <img src={item.image} alt={item.title} />
      </div>
      <h3>Title: {item.title}</h3>
      <p>Price: {item.price}$</p>
      <button onClick={()=>addToBasket(item)} className=" dark:bg-slate-500 dark:hover:bg-slate-600 add__basket-btn bg-gray-300 hover:bg-gray-400">add</button>
    </div>
  );
}

export default ProductCard;

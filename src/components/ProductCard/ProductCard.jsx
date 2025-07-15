import React from "react";

function ProductCard({ item, addToBasket }) {
  return (
    <div key={item.id} className=" w-full sm:w-[350px] border flex border-black p-[25px] rounded-[10px]">
      <div className="h-[250px] w-[250px] mb-[5px] mr-5">
        <img className="w-full h-full object-contain" src={item.image} alt={item.title} />
      </div>
      <div className="card_content w-full flex flex-col justify-between sm:w-auto">
        <h3>Title: {item.title}</h3>
        <p>Price: {item.price}$</p>
        <button
          onClick={() => addToBasket(item)}
          className="cursor-pointer dark:bg-slate-500 dark:hover:bg-slate-600 bg-gray-300 hover:bg-gray-400 w-full mx-auto mt-4 mb-0 px-[20px] py-[8px] rounded-[12px] border-none"
        >
          add
        </button>
      </div>
    </div>
  );
}

export default ProductCard;

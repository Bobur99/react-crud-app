import React, { useContext, useState } from "react";
import "./Basket.css";
import StateContext from "../../context/context";
import {
  decreaseItemCountAction,
  deleteSelectedItemsAction,
  increaseItemCountAction,
  removeFromBasketAction,
} from "../../reducer/basketReducer/basketAction";

function Basket() {
  const { basketState, basketDispatch } = useContext(StateContext);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleSelect = (itemId) => {
    setSelectedItems((prevSlected) =>
      prevSlected.includes(itemId)
        ? prevSlected.filter((id) => id !== itemId)
        : [...prevSlected, itemId]
    );
  };

  const handleDeleteSelected = () => {
    basketDispatch(deleteSelectedItemsAction(selectedItems));
    setSelectedItems([]);
  };

  const handlerRemove = (itemId) => {
    basketDispatch(decreaseItemCountAction(itemId));
  };

  const handlerAdd = (itemId) => {
    basketDispatch(increaseItemCountAction(itemId));
  };

  const handlerDelete = (itemId) => {
    basketDispatch(removeFromBasketAction(itemId));
    // setBasketItems((order) => order.filter((product) => product.id !== itemId));
  };

  const getTotalPrice = () => {
    return basketState.basketItems.reduce(
      (acc, item) => acc + item.price * item.count,
      0
    );
  };

  return (
    <div className="baskets__container-wrapper min-h-screen">
      <h1 className="dark:text-white">Basket</h1>
      <div className="container  basket-container dark:text-white !pb-[50px]">
        {basketState.basketItems.length > 0 ? (
          <div className="basket-block">
            <div className="basket__cards">
              <button
                onClick={handleDeleteSelected}
                className="delete__btn-selected"
              >
                Delete Selected {selectedItems.length}
              </button>
              {basketState.basketItems.map((el) => {
                return (
                  <div key={el.id} className="basket__card-wrapper">
                    <input
                      type="checkbox"
                      checked={selectedItems.includes(el.id)}
                      onChange={() => toggleSelect(el.id)}
                    />
                    <div key={el.id} className="basket__card">
                      <div className="img-wrapper">
                        <img src={el.image} alt={el.title} />
                      </div>

                      <div className="card-content">
                        <h3>{el.title}</h3>
                        <h5>{el.price}$</h5>
                        <div className="count-btns flex items-center">
                          <button
                            disabled={el.count === 1 ? true : false}
                            onClick={() => handlerRemove(el.id)}
                            className="dark:text-black countRemove bg-gray-200 h-8 w-8 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span>{el.count}</span>
                          <button
                            onClick={() => handlerAdd(el.id)}
                            className=" dark:text-black countAdd bg-gray-200 h-8 w-8 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handlerDelete(el.id)}
                          className="card-deleteBtn"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* //// */}
            </div>

            <div className="basket__total-infoBlock">
              <h2>Total price: {getTotalPrice().toFixed(2)}$</h2>
            </div>
          </div>
        ) : (
          <h1>The basket is empty!</h1>
        )}
      </div>
    </div>
  );
}

export default Basket;

import React, { useContext, useState } from "react";
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
      <div className="container flex dark:text-white !pb-[50px]">
        {basketState.basketItems.length > 0 ? (
          <div className="w-full sm:flex justify-between">
            <div className="flex flex-col border border-black dark:border-white w-full sm:w-[70%] p-[10px] rounded-[16px]">
              <button
                onClick={handleDeleteSelected}
                className="text-white bg-[#dc3545] border-none px-6 py-2 rounded-[10px]"
              >
                Delete Selected {selectedItems.length}
              </button>
              {basketState.basketItems.map((el) => {
                return (
                  <div key={el.id} className="flex items-center">
                    <input
                      className="mr-5"
                      type="checkbox"
                      checked={selectedItems.includes(el.id)}
                      onChange={() => toggleSelect(el.id)}
                    />
                    <div key={el.id} className=" border dark:border-white border-black p-5 rounded-[16px] flex my-[15px]">
                      <div className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] mr-[15px]">
                        <img className="w-full h-full object-contain" src={el.image} alt={el.title} />
                      </div>

                      <div className="w-[90%] py-[20px]">
                        <h3 className="text-[16px] sm:text-2xl mb-[10px]">{el.title}</h3>
                        <h5 className="text-[15px] sm:text-xl mb-[20px]">{el.price}$</h5>
                        <div className="mb-5 flex items-center">
                          <button
                            disabled={el.count === 1 ? true : false}
                            onClick={() => handlerRemove(el.id)}
                            className="dark:text-black p-[8px_10px] rounded-[5px] border-none bg-gray-200 h-8 w-8 flex items-center justify-center"
                          >
                            -
                          </button>
                          <span className="mx-[10px]">{el.count}</span>
                          <button
                            onClick={() => handlerAdd(el.id)}
                            className=" dark:text-black rounded-[5px] border-none p-[8px] bg-gray-200 h-8 w-8 flex items-center justify-center"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => handlerDelete(el.id)}
                          className="text-white bg-[#dc3545] border-none px-6 py-2 rounded-[10px]"
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

            <div className="w-full mt-5 sm:mt-0 sm:w-[28%] border border-black dark:border-white rounded-[16px] p-[10px]">
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

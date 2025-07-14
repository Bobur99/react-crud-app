import React, { useContext } from "react";
import "./Product.css";
import { products } from "../../Products";
import ProductCard from "../../components/ProductCard/Productcard";
import { toast } from "react-toastify";
import StateContext from "../../context/context";
import { addToBasketAction } from "../../reducer/basketReducer/basketAction";

function Product() {
  const { basketState, basketDispatch } = useContext(StateContext);
  console.log(basketState);

  const addToBasket = (chosenItem) => {
    const hasProductInBasket = basketState.basketItems.some(
      (el) => el.id === chosenItem.id
    );

    if (hasProductInBasket) {
      toast.warn("Product already exist in basket!");
      return;
    }
    basketDispatch(addToBasketAction(chosenItem));
    // setBasketItems((prev) => [...prev, chosenItem]);
    toast.success("Product added successfuly!");
  };

  return (
    <div className="container min-h-screen dark:text-white">
      <h1>Product page</h1>
      <div className="product-container">
        {products.map((item) => (
          <ProductCard key={item.id} addToBasket={addToBasket} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Product;

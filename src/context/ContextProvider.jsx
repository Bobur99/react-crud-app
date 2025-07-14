import React, { useReducer } from "react";
import StateContext from "./context";
import { basketReducer, initialBasketState } from "../reducer/basketReducer/basketReducer";
import { initialUserState, userReducer } from "../reducer/userReducer/userReducer";

function ContextProvider({ children }) {
   const [basketState, basketDispatch] = useReducer(basketReducer, initialBasketState)
   const [userState, userDispatch] = useReducer(userReducer, initialUserState)
  


  return <StateContext.Provider value={{basketState, basketDispatch, userState, userDispatch}}>{children}</StateContext.Provider>;
}

export default ContextProvider;

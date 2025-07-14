import { ADD_TO_BASKET, DECREASE_ITEM_COUNT, DELETE_SELECTED_ITEMS, INCREASE_ITEM_COUNT, REMOVE_FROM_BASKET } from "./basketType";

const addToBasketAction = (payload) =>  ({
    type: ADD_TO_BASKET,
    payload
})

const removeFromBasketAction = (payload) =>  ({
    type: REMOVE_FROM_BASKET,
    payload
})

const decreaseItemCountAction = (payload) => ({
    type: DECREASE_ITEM_COUNT,
    payload
})

const increaseItemCountAction = (payload) => ({
    type: INCREASE_ITEM_COUNT,
    payload
})

const deleteSelectedItemsAction = (payload) => ({
    type: DELETE_SELECTED_ITEMS,
    payload
})

export {addToBasketAction, removeFromBasketAction, decreaseItemCountAction, increaseItemCountAction, deleteSelectedItemsAction}
import { ADD_TO_BASKET, DECREASE_ITEM_COUNT, DELETE_SELECTED_ITEMS, INCREASE_ITEM_COUNT, REMOVE_FROM_BASKET } from "./basketType"

const initialBasketState = {
    basketItems:[]
}

const basketReducer = (state, action) =>{
    const {type, payload} = action

    switch (type) {
        case ADD_TO_BASKET: {
            return state = {
                ...state,
                basketItems:[...state.basketItems, payload]
            }
        }
        case REMOVE_FROM_BASKET: {
            const filtered = state.basketItems.filter((product) => product.id !== payload)
            return state = {
                ...state,
                basketItems:filtered
            }
        }

        case INCREASE_ITEM_COUNT: {
            return state = {
                ...state,
                basketItems: state.basketItems.map(product => product.id == payload ? {...product, count:product.count + 1} : product)
            }
        }

        case DECREASE_ITEM_COUNT: {
            return state = {
                ...state,
                basketItems: state.basketItems.map(product => product.id == payload ? {...product, count: product.count - 1} : product).filter(product => product.count > 0)
            }
        }
        
        case DELETE_SELECTED_ITEMS: {
            return state = {
                ...state,
                basketItems: state.basketItems.filter(product => !payload.includes(product.id))
            }
        }
    
       
    }
}

export {basketReducer, initialBasketState}
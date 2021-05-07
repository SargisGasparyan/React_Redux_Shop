import {ADD_PRODUCT_IN_CART,REMOVE_PRODUCT_FROM_CART} from '../types'

export const changeCart=(state={cartItems:JSON.parse(localStorage.getItem("cartItems") || "[]")},action)=>{
    switch(action.type){
        case ADD_PRODUCT_IN_CART:
            return {cartItems: action.payload.cartItems}
        case REMOVE_PRODUCT_FROM_CART:
            return {cartItems: action.payload.cartItems}
        default:
            return state
    }
}
import initialState from "../initialState"
export const REQUEST_ADD_TO_CART = "@@cart/ADD_TO_CART"
export const REQUEST_ADD_TO_CART_FAILURE = "@@cart/REQUEST_ADD_TO_CART_FAILURE"
export const REQUEST_ADD_TO_CART_SUCCESS = "@@cart/REQUEST_ADD_TO_CART_SUCCESS"


export default function itemReducer(state = initialState.items, action = {}) {
  switch(action.type) {
    case REQUEST_ADD_TO_CART:
       
     
      
    default:
      return state
  }
}

export const Actions = {}

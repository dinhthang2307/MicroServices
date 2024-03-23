import initialState from "../initialState"
export const REQUEST_ADD_TO_CART = "@@cart/ADD_TO_CART"
export const REQUEST_MARK_ITEM_AS_ADD_TO_CART = "@@cart/REQUEST_MARK_ITEM_AS_ADD_TO_CART"
export const REQUEST_INCREASE_QUANTITY = "@@cart/REQUEST_INCREASE_QUANTITY"
export const REQUEST_DES_QUANTITY = "@@cart/REQUEST_DES_QUANTITY"
export const REQUEST_OPEN_CART = "@@cart/REQUEST_OPEN_CART"
export const REQUEST_CLOSE_CART = "@@cart/REQUEST_CLOSE_CART"
export const REQUEST_INCREASE_CART_QUANTITY = "@@cart/REQUEST_INCREASE_CART_QUANTITY"
export const REQUEST_DES_CART_QUANTITY = "@@cart/REQUEST_DES_CART_QUANTITY"
export const REQUEST_REMOVE_FROM_CART = "@@cart/REQUEST_REMOVE_FROM_CART"
export const REQUEST_MARK_ITEM_AS_REMOVE_FROM_CART = "@@cart/REQUEST_MARK_ITEM_AS_REMOVE_FROM_CART"


export default function itemReducer(state = initialState.items, action = {}) {
  switch(action.type) {
    case REQUEST_ADD_TO_CART:
      return {
       ...state,
       cart: [...state.cart, action.product],
      }  
    case REQUEST_MARK_ITEM_AS_REMOVE_FROM_CART:
      var tempitems = state.items.map((item)=>{
        if (item.id == action.productid){
          return {...item, inCart: false}
        }
        return item
      });
      return {...state, items: tempitems }
  case REQUEST_MARK_ITEM_AS_ADD_TO_CART:
    var tempitems = state.items.map((item)=>{
      if (item.id == action.product.id){
        return {...item, inCart: true}
      }
      return item
    });

    var tempcard =state.cart.map((item) => {
      if (item.id === action.product.id) {
        return {...item, inCart: true}
      }
      return item
    }) 

    return {...state, items: tempitems, cart: tempcard }
     case REQUEST_INCREASE_QUANTITY:
        var tempcart = state.items.map((item) => {
          if (item.id === action.productid) {
              return { ...item, quantity: item.quantity + 1 };
          }
          return item;
      });
      return {
        ...state,
      items: tempcart};
      case REQUEST_DES_QUANTITY:
        var  newcart = state.items.map((item) => {
          if (item.id === action.productid) {
              return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
          }
          return item;
      });
      return {
        ...state,
      items: newcart};
      case REQUEST_OPEN_CART:
        return{
          ...state,
          isCartOpen: true
        }
       case REQUEST_CLOSE_CART:
         return{
           ...state,
           isCartOpen: false
         }
         case REQUEST_INCREASE_CART_QUANTITY:
          var tempcart = state.cart.map((item) => {
            if (item.id === action.productid) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        return {
          ...state,
        cart: tempcart};
        case REQUEST_DES_CART_QUANTITY:
          var newcart = state.cart.map((item) => {
            if (item.id === action.productid) {
                return { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 };
            }
            return item;
        });
        return {
          ...state,
          cart: newcart
        };
        case REQUEST_REMOVE_FROM_CART:
          var newcart = state.cart.filter(item => item.id !=action.productid);
          return {...state,cart:newcart}
    default:
      return state
  }
}

export const Actions = {}
Actions.requestIncQuantity = ({productid})=>{
  return async (dispatch) =>{
    dispatch({ type: REQUEST_INCREASE_QUANTITY, productid:productid  })

  }
}
Actions.requestDesQuantity = ({productid})=>{
  return async (dispatch) =>{
    dispatch({ type: REQUEST_DES_QUANTITY, productid:productid  })

  }
}

Actions.requestAddItemToCard = ({product})=>{
  return async (dispatch) =>{
    dispatch({ type: REQUEST_ADD_TO_CART, product: product})
    dispatch({type: REQUEST_MARK_ITEM_AS_ADD_TO_CART, product: product})
  }
}

Actions.requestOpenCart = ()=>{
  return async (dispatch) => {
    dispatch({type: REQUEST_OPEN_CART})
  }
}


Actions.requestCloseCart = ()=>{
  return async (dispatch) => {
    dispatch({type: REQUEST_CLOSE_CART})
  }
}

Actions.requestIncCartQuantity = ({productid})=>{
  return async (dispatch) =>{
    dispatch({ type: REQUEST_INCREASE_CART_QUANTITY, productid:productid  })

  }
}

Actions.requestDesCartQuantity = ({productid})=>{
  return async (dispatch) =>{
    dispatch({ type: REQUEST_DES_CART_QUANTITY, productid:productid  })
  }
}

Actions.requestRemoveFromCart = ({productid})=>{
  return async (dispatch) =>{
    dispatch({ type: REQUEST_REMOVE_FROM_CART, productid: productid})
    dispatch({type: REQUEST_MARK_ITEM_AS_REMOVE_FROM_CART, productid: productid})
  }
}
import API from "./mockAPI";

export default {
    auth: {
      isLoading: false,
      error: false,
      user: {},
    }, 
    items: {
      items: API,
      cart: [],
      isCartOpen: false
    }
  }
  
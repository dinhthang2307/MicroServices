import React from "react"
import { Helmet } from "react-helmet"
import Navbar from "./Navbar"
import { connect } from "react-redux"
import CartDetail from "./product/CartDetail"
const Layout = ({ children, cart,  cartOpen}) => {
  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Order Food</title>
      </Helmet>
          <Navbar />
          <CartDetail
            open={cartOpen}
            cart={cart}
            cartCountTotal={cartCountTotal}
          />

          {children}
    </React.Fragment>
  )
}
const mapStateToProps = (state) => ({
  listItem: state.items.items,
  cartOpen: state.items.isCartOpen,
  cart: state.items.cart
})
 
export default connect(mapStateToProps, null)(Layout)

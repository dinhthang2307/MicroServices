import React from "react";
import styled from "styled-components";
import  ListedItems  from "./product/ListedItems";
import { connect } from "react-redux";
import { GlobalStyles } from "./product/GlobalStyles";
import CartDetails  from "./product/CartDetail";
import { FixedCart } from "./product/FixedCard";
import { Actions as itemActions } from "../redux/item/action";
function ListItems({listItem, cartOpen, cart}) {

  const cartCountTotal = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
    <GlobalStyles/>
    <CartDetails
        open={cartOpen}
        cart={cart}
        // increaseQ={increaseQuantity.inCart}
        // decreaseQ={decreaseQuantity.inCart}
        cartCountTotal={cartCountTotal}
        // removeFromCart={removeFromCart}
      />

    {/* <FixedCart onOpen={() => onOpenCartClick()} cartItems={cartCountTotal} /> */}

      <Wrapper>
        <H1>Shopping Cart App</H1>
        <ListedItems
          listItem={listItem}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  padding: 75px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
`;
const H1 = styled.h1`
  padding: 0 10px 50px 10px;
  text-align: center;
`;

const mapDispatchToProps=(dispatch)=>({
  requestOpenCart: ()=> dispatch(itemActions.requestOpenCart()),
  requestCloseCart: ()=> dispatch(itemActions.requestCloseCard())
})

const mapStateToProps = (state) => ({
    listItem: state.items.items,
    cartOpen: state.items.isCartOpen,
    cart: state.items.cart
  })
   
export default connect(mapStateToProps, mapDispatchToProps)(ListItems)
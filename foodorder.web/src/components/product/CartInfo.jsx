import React from "react";
import styled from "styled-components";
import { numberFormat } from "./numberFormat";
import { Button } from "./Button";
import { P } from "./P";
import { Arrow } from "./Arrow";
import { VerticalBar } from "./VerticalBar";
import { CartButtons } from "./CartButtons";
import { connect } from "react-redux";
import { Actions as itemActions } from "../../redux/item/action";
import { useNavigate } from "react-router-dom";

const CartInfo = ({ cart, requestIncCartQuantity, requestDesCartQuantity, requestRemoveFromCart }) =>{ 
  const increaseQuantity =(productid)=> {
    let action = requestIncCartQuantity({productid});
  };

  const desQuantity =(productid) =>{
    let action = requestDesCartQuantity({productid});
  }

  const removeFromCart = (productid) => {
    let action = requestRemoveFromCart({productid});
  }
  const navigate = useNavigate();

  const createInvoice = () => {
    navigate("/create-invoice");
  };
  
  return (
  <>
    {cart.map((item, i) => (
      <DetailColumn key={item.name}>
        <P>
          {item.name} <VerticalBar /> {item.quantity} x {item.price} vnd <Arrow />{" "}
          {numberFormat(item.price * item.quantity) } vnd
        </P>

        <CartButtons
          increaseQ={() => increaseQuantity(item.id)}
          decreaseQ={() => desQuantity(item.id)}
          removeFromCart={() => removeFromCart(item.id)}
        />
      </DetailColumn>
    ))}
    <CheckoutButton onClick={createInvoice}>Checkout</CheckoutButton>

  </>
);
}

const mapDispatchToProps=(dispatch)=>({
  requestIncCartQuantity: ({productid})=> dispatch(itemActions.requestIncCartQuantity({productid})),
  requestDesCartQuantity: ({productid})=> dispatch(itemActions.requestDesCartQuantity({productid})),
  requestRemoveFromCart: ({productid})=> dispatch(itemActions.requestRemoveFromCart({productid})) 
})

export default connect(null, mapDispatchToProps)(CartInfo);
const DetailColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  padding: 5px 0;
  width: 95%;
  border-bottom: 1px solid black;
`;

const CheckoutButton = styled(Button).attrs(() => ({
  backgroundColor: "darkblue"
}))`
  margin-top: 15px;
  margin-bottom: 15px;
`;

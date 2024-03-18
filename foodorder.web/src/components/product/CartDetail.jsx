import React, { useEffect } from "react";
import styled from "styled-components";
import { CloseButton } from "./CloseButton";
import { P } from "./P";
import { CartTotals } from "./CartTotals";
import CartInfo from "./CartInfo";
import { lightGray } from "./GlobalStyles";
import { Actions as itemActions } from "../../redux/item/action";
import { connect } from "react-redux";
import Modal from 'react-modal';
const CartDetail = ({
  cart,
  increaseQ,
  decreaseQ,
  cartCountTotal,
  removeFromCart,
  open,
  requestCloseCart
}) => {
    const handleCloseClick = () =>{
        var action = requestCloseCart();
    } 
  return (
    <Modal isOpen={open}>
      <CloseButton onClick={handleCloseClick} />
      <Wrapper>
        {!cart.length && <P>Cart is empty please go shopping at product tab</P>}
        {!!cart.length && (
          <>
            <CartTotals cart={cart} cartCountTotal={cartCountTotal} />
            <CartInfo
              cart={cart}
              increaseQ={increaseQ}
              decreaseQ={decreaseQ}
              removeFromCart={removeFromCart}
            />
          </>
        )}
      </Wrapper>
    </Modal>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const Wrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const mapDispatchToProps=(dispatch)=>({
    requestCloseCart: ()=> dispatch(itemActions.requestCloseCart()),
  })
  
export default connect(null, mapDispatchToProps)(CartDetail)
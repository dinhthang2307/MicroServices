import React, { useEffect } from "react";
import styled from "styled-components";
import { P } from "../components/product/P";
import { CartTotals } from "../components/product/CartTotals";
import CartInfo from "../components/product/CartInfo";
import { connect } from "react-redux";


const CartDetailPage = ({
  cart,
  cartCountTotal
}) => {
  return (
      <Wrapper>
        {!cart.length && <P>Cart is empty please go shopping at product tab</P>}
        {!!cart.length && (
          <>
            <CartTotals cart={cart} cartCountTotal={cartCountTotal} />
            <CartInfo
              cart={cart}
            />
          </>
        )}
      </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 5px 15px;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
`;

const mapStateToProps = (state) => ({
    listItem: state.items.items,
    cartOpen: state.items.isCartOpen,
    cart: state.items.cart
  })
export default connect(mapStateToProps, null)(CartDetailPage)
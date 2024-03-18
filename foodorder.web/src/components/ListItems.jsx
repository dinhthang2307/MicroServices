import React from "react";
import styled from "styled-components";
import  ListedItems  from "./product/ListedItems";
import { connect } from "react-redux";
import { GlobalStyles } from "./product/GlobalStyles";
function ListItems({listItem, cartOpen, cart}) {
  return (
    <>
    <GlobalStyles/>
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


const mapStateToProps = (state) => ({
    listItem: state.items.items,
    cartOpen: state.items.isCartOpen,
    cart: state.items.cart
  })
   
export default connect(mapStateToProps, null)(ListItems)
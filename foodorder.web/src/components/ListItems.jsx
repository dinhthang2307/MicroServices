import React from "react";
import styled from "styled-components";
import  ListedItems  from "./product/ListedItems";
import { connect } from "react-redux";
import { GlobalStyles } from "./product/GlobalStyles";
function ListItems({listItem}) {
  return (
    <>
    <GlobalStyles/>
      <Wrapper>
        <H1> Product List </H1>
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
  color: white;
`;

const mapStateToProps = (state) => ({
    listItem: state.items.items,
  })
   
export default connect(mapStateToProps, null)(ListItems)
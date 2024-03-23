import React, { useEffect } from "react";
import { Button } from "./Button";
import { AddButton, SubtractButton } from "./AddSubtractButton";
import { P } from "./P";
import { lightGray } from "./GlobalStyles";
import styled from "styled-components";
import { connect } from "react-redux";
import { Actions as itemActions } from "../../redux/item/action";

const ListedItems = ({
  listItem,
  requestIncQuantity,
  requestDesQuantity,
  requestAddToCart
}) =>{
  useEffect(()=>{console.log("Listed Items Rendered", listItem)},[])

  const increaseQuantity =(productid)=> {
    let action = requestIncQuantity({productid});
  };

  const desQuantity =(productid) =>{
    let action = requestDesQuantity({productid});
  }

  const addItemToCard = (product) => {
    let action = requestAddToCart({product});
  }
  return (
  <Wrapper>
    {listItem.map((item) => (
      <Column key={item.name}>
        <H4>{item.name}</H4>
        <P>{item.price} vnd</P>

        {!item.inCart && (
          <div>
            <AddButton onClick={() => increaseQuantity(item.id)} />
            <span>{item.quantity}</span>
            <SubtractButton onClick={()=>desQuantity(item.id)} />
          </div>
        )}

        <IMG src={item.src} alt={item.name} />
        {!item.inCart && (
          <Button onClick={()=>addItemToCard(item)}>Add to Cart</Button>
          )}
        {item.inCart && <P>Added!</P>}
      </Column>
    ))}
  </Wrapper>)
  }
;

const Column = styled.article`
  display: flex;
  flex-flow: column;
  align-items: center;
  border: 0.5px solid #999999;
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  padding: 12px 20px;
  border-radius: 10px;
  margin: 8px;
  background-color: ${lightGray};
`;
const Wrapper = styled.div`
  max-width: 1100px;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: flex-start;
`;
const IMG = styled.img`
  padding: 10px;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;
const H4 = styled.h4`
  padding: 5px 0;
  font-size: 18px;
`;
const mapDispatchToProps=(dispatch)=>({
  requestIncQuantity: ({productid})=> dispatch(itemActions.requestIncQuantity({productid})),
  requestDesQuantity: ({productid})=> dispatch(itemActions.requestDesQuantity({productid})),
  requestAddToCart: ({product})=> dispatch(itemActions.requestAddItemToCard({product}))
})


export default connect(null, mapDispatchToProps)(ListedItems)
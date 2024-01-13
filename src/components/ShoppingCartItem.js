import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CardContext } from "../context/CardContextProvider";

const Item = (props) => {
  const {removeItem} = useContext(CardContext);

  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <p> Count: {props.count}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;

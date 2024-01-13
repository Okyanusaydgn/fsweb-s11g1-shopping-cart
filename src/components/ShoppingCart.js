import React, { useContext } from "react";
import { ScCartCheckout } from "./scParts";

// Components
import Item from "./ShoppingCartItem";
import { CardContext } from "../context/CardContextProvider";

const ShoppingCart = () => {
  const { cards } = useContext(CardContext);

  const getCartTotal = () => {
    return cards
      .reduce((acc, value) => {
        return acc + value.price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div>
      {cards.map((cardItem) => (
        <Item key={cardItem.id} {...cardItem.item} count={cardItem.count} />
      ))}

      <ScCartCheckout>
        <p>Total: ${getCartTotal()}</p>
        <button>Checkout</button>
      </ScCartCheckout>
    </div>
  );
};

export default ShoppingCart;

import React from "react";

import { productType } from "../App";

export const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.description}</p>
      <p>{item.price}</p>
      <hr />
      <button onClick={() => handleAddToCart(item)}>add to cart</button>
    </div>
  );
};

type Props = {
  item: productType;
  handleAddToCart: (clickedItem: productType) => void;
};

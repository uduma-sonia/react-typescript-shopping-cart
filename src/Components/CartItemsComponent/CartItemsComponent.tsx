import React from "react";
import { Features } from "../Features/Features";
import "./CartItemComponent.styles.css";
import { SingleCard } from "./SingleCard";
import { productType } from "../../Pages/Home/Home";

export const CartItemsComponent: React.FC<Props> = ({
  item,
  handleAddToCart,
}) => {
  return (
    <div className="width-3-4 cart-items-container">
      <div className="m-2">
        <Features />

        <div className="items-container mt-4 pb-4 full-width">
          {item?.map((item: productType, index: number) => (
            <SingleCard
              item={item}
              key={index}
              handleAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

type Props = {
  item: any;
  handleAddToCart: (clickedItem: productType) => void;
};

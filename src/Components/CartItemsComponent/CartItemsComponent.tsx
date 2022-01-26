import React from "react";
import { Features } from "../Features/Features";
import "./CartItemComponent.styles.css";

export const CartItemsComponent: React.FC<{}> = () => {
  return (
    <div className="border width-3-4 cart-item-container">
      <div className="m-2">
        <Features />
      </div>
    </div>
  );
};

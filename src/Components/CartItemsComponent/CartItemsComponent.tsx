import React from "react";
import { Features } from "../Features/Features";
import "./CartItemComponent.styles.css";
import { SingleCard } from "./SingleCard";

export const CartItemsComponent: React.FC<{}> = () => {
  return (
    <div className="width-3-4 cart-items-container">
      <div className="m-2">
        <Features />

        <div className="items-container mt-4">
          <SingleCard />
          <SingleCard />
          <SingleCard />
        </div>
      </div>
    </div>
  );
};

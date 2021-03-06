import React from "react";
import { Features } from "../Features/Features";
import "./ProductItemComponent.styles.css";
import { SingleCard } from "./SingleCard";
import { productType } from "../../Pages/Home/Home";

export const CartItemsComponent: React.FC<Props> = ({
  item,
  handleAddToCart,
  loading,
}) => {
  return (
    <div className="width-3-4 cart-items-container">
      <div className="m-2">
        <Features />

        {loading ? (
          <div className="height-10 full-width center">
            <div className="text-center">
              <div className="loader1">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        ) : null}

        <div className="items-container mt-4 mb-4 full-width">
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
  loading: boolean;
};

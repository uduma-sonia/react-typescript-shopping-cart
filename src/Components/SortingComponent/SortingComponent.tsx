import React from "react";
import "./SortingComponent.styles.css";

export const SortingComponent: React.FC<{}> = () => {
  return (
    <div className="width-1-4 sorting-container">
      <div className="m-2 py-3 px-3">
        <p className="color-gray fw-semibold fs-sm-2 mb-3">Filter Items</p>

        <ul className="fw-light fs-sm">
          <li>Lowest to highest price</li>
          <li>Highest to Lowest price</li>
          <li>Higest rating</li>
          <li>Men</li>
          <li>Women</li>
        </ul>
      </div>
    </div>
  );
};

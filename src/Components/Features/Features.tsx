import React from "react";
import "./Features.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBiking,
  faShoppingBag,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export const Features: React.FC<{}> = () => {
  return (
    <div className="features-container">
      <ul className="flex j-between color-gray fw-medium fs-sm-2">
        <li>
          <span className="icon-container">
            <FontAwesomeIcon icon={faBiking} />
          </span>
          Free Delivery
        </li>

        <li>
          <span className="icon-container">
            <FontAwesomeIcon icon={faShoppingBag} />
          </span>
          Pickup
        </li>

        <li>
          <span className="icon-container">
            <FontAwesomeIcon icon={faMoneyBill} />
          </span>
          Massive Discounts
        </li>
      </ul>
    </div>
  );
};

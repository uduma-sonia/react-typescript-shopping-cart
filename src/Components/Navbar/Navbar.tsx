import React from "react";
import "./Navbar.styles.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const Navbar: React.FC<{}> = () => {
  return (
    <div className="navbar-container">
      <div className="container mx-auto px-5 full-height flex j-between items-center">
        <h1 className="color-main fw-medium fs-md logo">Tap House</h1>

        <div className="flex j-between fs-sm fw-semibold uppercase navbar-category">
          <p>men</p>
          <p>women</p>
          <p>electronics</p>
        </div>

        <div className="width-8 flex j-between profile">
          <button className="border-0 fs-sm-2 fw-semibold user-name">
            Hi, Sonia
          </button>

          <Link to="/cart">
            <button className="border-0">
              <FontAwesomeIcon icon={faShoppingBasket} size="lg" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import React, { useEffect, useState } from "react";
import "./Navbar.styles.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const Navbar: React.FC<{}> = () => {
  const navigate = useNavigate();
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (window !== undefined) {
      if (localStorage.getItem("_name") === null) {
        navigate("/login");
      } else {
        const userName = JSON.parse(window.localStorage.getItem("_name") || "");
        setName(userName);
      }
    }
  }, []);

  return (
    <div className="navbar-container full-width-screen">
      <div className="container mx-auto px-5 full-height flex j-between items-center">
        <h1 className="color-main fw-medium fs-md logo">Tap House</h1>

        <div className="flex j-between fs-sm fw-semibold uppercase navbar-category">
          <p>men</p>
          <p>women</p>
          <p>electronics</p>
        </div>

        <div className="width-auto  flex j-between profile">
          <button className="border-0 fs-sm-2 mr-4 fw-semibold user-name">
            Hi, <span className="capitalize">{name}</span>
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

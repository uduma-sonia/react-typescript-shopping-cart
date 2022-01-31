import React from "react";
import { CartCard } from "../../Components/CartPage/CartCard";
import { CartNavbar } from "../../Components/CartPage/CartNavbar";
import { HomeTopBar } from "../../Components/HomeTopBar/HomeTopBar";
import "./Cart.styles.css";

export const Cart: React.FC<{}> = () => {
  return (
    <div className="cart-page-container full-width-screen bg-gray">
      <HomeTopBar />
      <CartNavbar />
      <CartCard />
    </div>
  );
};

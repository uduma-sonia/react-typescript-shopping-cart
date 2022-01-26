import React from "react";
import { CartItemsComponent } from "../../Components/CartItemsComponent/CartItemsComponent";
import { HomeTopBar } from "../../Components/HomeTopBar/HomeTopBar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { SortingComponent } from "../../Components/SortingComponent/SortingComponent";
import "./Home.styles.css";

export const Home: React.FC<{}> = () => {
  return (
    <div className="home-container">
      <HomeTopBar />
      <Navbar />

      <div className="flex container mx-auto px-5 mt-4">
        <SortingComponent />
        <CartItemsComponent />
      </div>
    </div>
  );
};

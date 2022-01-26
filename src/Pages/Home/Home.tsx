import React from "react";
import { HomeTopBar } from "../../Components/HomeTopBar/HomeTopBar";
import { Navbar } from "../../Components/Navbar/Navbar";
import "./Home.styles.css";

export const Home: React.FC<{}> = () => {
  return (
    <div className="home-container">
      <HomeTopBar />
      <Navbar />
    </div>
  );
};

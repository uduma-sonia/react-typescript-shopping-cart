import React from "react";
import { HomeTopBar } from "../../Components/HomeTopBar/HomeTopBar";
import "./Home.styles.css";

export const Home: React.FC<{}> = () => {
  return (
    <div className="home-container">
      <HomeTopBar />
    </div>
  );
};

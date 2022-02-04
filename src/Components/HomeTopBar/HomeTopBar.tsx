import React from "react";
import "./HomeTopBar.styles.css";

export const HomeTopBar: React.FC<{}> = () => {
  return (
    <div className="topbar-container center no-scrollbar color-peace fw-semibold fs-sm capitalize full-width-scree">
      <p>Schedule a pickup and delivery at your convenience</p>
    </div>
  );
};

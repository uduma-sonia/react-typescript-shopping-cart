import React from "react";
import "./HomeTopBar.styles.css";

export const HomeTopBar: React.FC<{}> = () => {
  return (
    <div className="topbar-container center no-scrollbar color-peace fw-semibold fs-sm capitalize full-width-scree">
      {/* <div>
        <p className="item-1">
          enjoy free deliver throughout the month of february
        </p>

        <p className="item-2">
          upto 50% discount on prices on the last day of every month
        </p>

        <p className="item-3">
          Schedule a pickup and delivery at your convenience
        </p>
      </div> */}
      <p>Schedule a pickup and delivery at your convenience</p>
    </div>
  );
};

import React from "react";
import "./CartPage.styles.css";
import teflar from "../../teflar.jpg";

export const CartCard: React.FC<{}> = () => {
  return (
    <div className="mx-auto mt- cart-card">
      <h4 className="fw-semibold fs-md">Your cart (3 items)</h4>

      <div className="flex border">
        {/* image and name */}
        <div className="border flex width-1-37 items-center">
          <div
            className="width-1-30 cart-image-container"
            style={{
              backgroundImage: `url(${teflar})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />

          <div className="width-1-70 p-2">
            <p className="fs-sm fw-medium ">Ralph lauren shirt for men</p>
          </div>
        </div>

        {/* plus and addition  */}
        <div className="border width-1-4">2</div>

        {/* total and subtotal */}
        <div className="border width-1-37">3</div>
      </div>
    </div>
  );
};

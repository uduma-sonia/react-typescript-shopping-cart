import React from "react";
import "./CartPage.styles.css";
import teflar from "../../teflar.jpg";

export const CartCard: React.FC<{}> = () => {
  return (
    <div className="mx-auto mt- cart-card">
      <h4 className="fw-semibold fs-sm-2 mb-3">Your cart (3 items)</h4>

      <div className="flex pb-3 mb-2 single-cart-card">
        {/* image and name */}
        <div className="flex width-1-37 items-center">
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
        <div className="width-1-4 center">
          <div>
            <button className="px-2 py-1 fw-bold fs-sm rounded-circle border-0 math-btn">
              -
            </button>

            <span className="mx-4">2</span>

            <button className="px-2 py-1 fw-bold fs-sm rounded-circle border-0 math-btn">
              +
            </button>
          </div>
        </div>

        {/* total and subtotal */}
        <div className="width-1-37 center">
          <div className="flex text-center">
            <div className="mr-4">
              <p className="fw-light fs-xs">Unit price</p>

              <p className="fw-semibold color-gray fs-sm mt-2">$200</p>
            </div>

            <div>
              <p className="fw-light fs-xs">Subtotal</p>

              <p className="fw-semibold color-gray fs-sm mt-2">$400</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex pb-3 mb-2 single-cart-card">
        {/* image and name */}
        <div className="flex width-1-37 items-center">
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
        <div className="width-1-4 center">
          <div>
            <button className="px-2 py-1 fw-bold fs-sm rounded-circle border-0 math-btn">
              -
            </button>

            <span className="mx-4">2</span>

            <button className="px-2 py-1 fw-bold fs-sm rounded-circle border-0 math-btn">
              +
            </button>
          </div>
        </div>

        {/* total and subtotal */}
        <div className="width-1-37 center">
          <div className="flex text-center">
            <div className="mr-4">
              <p className="fw-light fs-xs">Unit price</p>

              <p className="fw-semibold color-gray fs-sm mt-2">$200</p>
            </div>

            <div>
              <p className="fw-light fs-xs">Subtotal</p>

              <p className="fw-semibold color-gray fs-sm mt-2">$400</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

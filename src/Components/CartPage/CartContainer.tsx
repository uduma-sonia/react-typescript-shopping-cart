import React from "react";
import "./CartPage.styles.css";
import teflar from "../../teflar.jpg";

export const CartContainer: React.FC<{}> = () => {
  return (
    <div className="mt-5">
      <div className="cart-card flex flex-col height-6">
        <div className="height-1-2 flex">
          {/* image  */}
          <div
            className="width-4"
            style={{
              backgroundImage: `url(${teflar})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
          <div className="flex-grow items-self-center flex items-center j-between">
            <div className="mx-3">
              <button className="rounded-circle px-2 py-1 fw-bold fs-sm">
                -
              </button>

              <button className="border-0 mx-3 no-cursor-pointer">2</button>

              <button className="rounded-circle px-2 py-1 fw-bold fs-sm">
                +
              </button>
            </div>

            <div className="flex text-center mr-3">
              <div className="mr-4">
                <p className="fw-light fs-xs">Unit price</p>

                <p className="fw-semibold color-gray fs-xs mt-2">$200</p>
              </div>

              <div>
                <p className="fw-light fs-xs">Subtotal</p>

                <p className="fw-semibold color-gray fs-xs mt-2">$400</p>
              </div>
            </div>
          </div>
        </div>

        <div className="height-1-2 pt-2">
          <p className="fs-sm fw-medium">Solid Gold Petite Micropave</p>

          <small>men's clothing</small>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex j-between">
          <div>
            <input placeholder="Enter Coupon" className="coupon-input" />
          </div>

          <p className="fw-semibold fs-sm-2">Total: $200</p>
        </div>

        <div className="mt-4">
          <button className="full-width py-2 border-0 fs-sm fw-semibold rounded checkout-btn">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

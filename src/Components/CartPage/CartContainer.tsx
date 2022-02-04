import React from "react";
import "./CartPage.styles.css";
import { productType } from "../../Pages/Home/Home";

export const CartContainer: React.FC<Props> = ({
  cartItems,
  removeFromCart,
  addToCart,
  closeCart,
}) => {
  return (
    <div className="mt-5">
      {cartItems.length <= 0 ? (
        <div className="text-center">
          <p className="fs-xs fw-semibold">
            Ooops! you have no item in your cart
          </p>

          <button
            className="border-0 color-main fw-semibold"
            onClick={() => closeCart()}
          >
            Continue shopping
          </button>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div className="cart-card flex flex-col height-6" key={item.id}>
              <div className="height-1-2 flex">
                {/* image  */}
                <div
                  className="width-4"
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                />
                <div className="flex-grow items-self-center flex items-center j-between">
                  <div className="mx-3 btns-container">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="rounded-circle px-2 py-1 fw-bold fs-sm"
                    >
                      -
                    </button>

                    <button className="border-0 mx-3 no-cursor-pointer amount-btn">
                      {item.amount}
                    </button>

                    <button
                      onClick={() => addToCart(item)}
                      className="rounded-circle px-2 py-1 fw-bold fs-sm"
                    >
                      +
                    </button>
                  </div>

                  <div className="flex text-center mr-3">
                    <div className="mr-4">
                      <p className="fw-light fs-xs">Unit price</p>

                      <p className="fw-semibold color-gray fs-xs mt-2">
                        ${item.price}
                      </p>
                    </div>

                    <div>
                      <p className="fw-light fs-xs">Subtotal</p>

                      <p className="fw-semibold color-gray fs-xs mt-2">
                        ${item.amount * item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="height-1-2 pt-2">
                <p className="fs-sm fw-medium">{item.title}</p>

                <small>{item.category}</small>
              </div>
            </div>
          ))}

          <div className="mt-4 mb-5">
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
        </>
      )}
    </div>
  );
};

type Props = {
  cartItems: productType[];
  addToCart: (clickedItem: productType) => void;
  removeFromCart: (id: number) => void;
  closeCart: () => void;
};

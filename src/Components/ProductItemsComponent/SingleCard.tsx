import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { productType } from "../../Pages/Home/Home";

export const SingleCard: React.FC<Props> = ({ item, handleAddToCart }) => {
  const notify = () =>
    toast("Product added to cart", {
      position: "bottom-center",
    });
  const addToCart = (item: productType) => {
    notify();
    handleAddToCart(item);
  };

  return (
    <div className="rounded item-card flex flex-col p-2">
      <Toaster />
      <div
        className="item-card-image-container"
        style={{
          backgroundImage: `url(${item.image})`,
          backgroundPosition: "top",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="mt-2 color-gray">
        <p className="fs-sm title">
          {item.title.length > 30 ? (
            <span>
              {item.title.substring(0, 28)}
              {"..."}
            </span>
          ) : (
            item.title
          )}
        </p>
        <small>{item.category}</small>

        <p className="fw-semibold mt-2 mb-2 price">${item.price}</p>

        <div>
          <small>{item.rating.rate}/5 ratings</small>
        </div>

        <div className="flex j-end">
          <FontAwesomeIcon
            color="#ff9900"
            className="cursor-pointer add-cart-btn"
            icon={faShoppingBasket}
            onClick={() => addToCart(item)}
          />
        </div>
      </div>
    </div>
  );
};

type Props = {
  item: productType;
  handleAddToCart: (clickedItem: productType) => void;
};

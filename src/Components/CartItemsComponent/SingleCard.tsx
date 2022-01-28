import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { productType } from "../../Pages/Home/Home";

export const SingleCard: React.FC<Props> = ({ item, handleAddToCart }) => {
  return (
    <div className="rounded item-card flex flex-col p-2">
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
        <p className="fs-sm title">Fjallraven - Foldsack</p>
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
            // onClick={() => handleAddToCart(item)}
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <td className="pr-3">{item.body.substring(0, 65)}...</td> */
}

type Props = {
  item: productType;
  handleAddToCart: (clickedItem: productType) => void;
};

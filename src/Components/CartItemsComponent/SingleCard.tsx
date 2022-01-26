import React from "react";
import dummyImg from "../../teflar.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";

export const SingleCard: React.FC<{}> = () => {
  return (
    <div className="rounded item-card flex flex-col p-2">
      <div
        className="border item-card-image-container"
        style={{
          backgroundImage: `url(${dummyImg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="mt-2 color-gray">
        <p className="fs-sm">Fjallraven - Foldsack No. 1 Backpack</p>
        <small>men's clothing</small>

        <p className="fw-semibold mt-2 mb-2">$109.00</p>

        <div>
          <FontAwesomeIcon size="xs" icon={faStar} />
          <FontAwesomeIcon size="xs" icon={faStar} />
          <FontAwesomeIcon size="xs" icon={faStar} />
          <small className="pl-2">(120 ratings)</small>
        </div>

        <div className="flex j-end">
          <FontAwesomeIcon
            color="#ff9900"
            className="cursor-pointer add-cart-btn"
            icon={faShoppingBasket}
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <td className="pr-3">{item.body.substring(0, 65)}...</td> */
}

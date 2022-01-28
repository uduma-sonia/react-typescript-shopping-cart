import React, { useState } from "react";
import "./SortingComponent.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

export const SortingComponent: React.FC<Props> = ({
  sortLowPrice,
  sortHighPrice,
  sortHighRate,
  sortMen,
  sortWomen,
  sortJewelery,
  sortElectronics,
}) => {
  const [showList, setShowList] = useState<boolean>(false);

  return (
    <div className="width-1-4 sorting-container color-gray">
      <div className="m-2 py-3 px-3">
        <button className="color-gray fw-semibold fs-sm-2 mb-3 border-0 sort-by-btn-1">
          Sort by
        </button>

        <div className="text-right">
          <button
            className="border-0 sort-by-btn-2"
            onClick={() => setShowList(!showList)}
          >
            <span className="mr-2">Sort by</span>
            <FontAwesomeIcon icon={faChevronDown} size="xs" />
          </button>
        </div>

        {/* for mobile  */}
        <ul
          className="fw-light fs-sm mobile-list rounded"
          style={showList ? { display: "flex" } : { display: "none" }}
          onClick={() => setShowList(false)}
        >
          <li onClick={() => sortLowPrice()}>Lowest to highest price</li>

          <li onClick={() => sortHighPrice()}>Highest to Lowest price</li>

          <li onClick={() => sortHighRate()}>Higest rating</li>

          <li onClick={() => sortMen()}>Men</li>

          <li onClick={() => sortWomen()}>Women</li>

          <li onClick={() => sortJewelery()}>Jewelery</li>

          <li onClick={() => sortElectronics()}>Electronics</li>
        </ul>

        {/* for desktop  */}
        <ul className="fw-light fs-sm desktop-list">
          <li onClick={() => sortLowPrice()}>Lowest to highest price</li>

          <li onClick={() => sortHighPrice()}>Highest to Lowest price</li>

          <li onClick={() => sortHighRate()}>Higest rating</li>

          <li onClick={() => sortMen()}>Men</li>

          <li onClick={() => sortWomen()}>Women</li>

          <li onClick={() => sortJewelery()}>Jewelery</li>

          <li onClick={() => sortElectronics()}>Electronics</li>
        </ul>
      </div>
    </div>
  );
};

type Props = {
  sortLowPrice: () => void;
  sortHighPrice: () => void;
  sortHighRate: () => void;
  sortMen: () => void;
  sortWomen: () => void;
  sortJewelery: () => void;
  sortElectronics: () => void;
};

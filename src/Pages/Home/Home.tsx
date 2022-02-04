import React, { useState, useEffect } from "react";
import { CartItemsComponent } from "../../Components/ProductItemsComponent/ProductItemsComponent";
import { HomeTopBar } from "../../Components/HomeTopBar/HomeTopBar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { SortingComponent } from "../../Components/SortingComponent/SortingComponent";
import "./Home.styles.css";
import { useQuery } from "react-query";
import { CartContainer } from "../../Components/CartPage/CartContainer";

// types
export type productType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: any;
};
const allProducts = async (): Promise<productType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

export const Home: React.FC<{}> = () => {
  const { data, isLoading, error } = useQuery<productType[]>(
    "products",
    allProducts
  );

  let getLocal;

  if (localStorage.getItem("_cart_item")) {
    getLocal = JSON.parse(localStorage.getItem("_cart_item") || "");
  }

  const [cartItems, setCartItems] = useState<productType[]>(getLocal);
  const [products, setProducts] = useState(data);
  const [openCart, setOpenCart] = useState<boolean>(false);

  const getTotalItems = (items: productType[]) =>
    items.reduce((a: number, items) => a + items.amount, 0);

  // ADD TO CART FUNCTION
  const handleAddToCart = (clickedItem: productType) => {
    setCartItems((prev) => {
      // 1. Is the item already added in the cart?
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }
      // First time the item is added
      return [...prev, { ...clickedItem, amount: 1 }];
    });
    localStorage.setItem("_cart_item", JSON.stringify(cartItems));
  };

  useEffect(() => {
    localStorage.setItem("_cart_item", JSON.stringify(cartItems));
  }, [cartItems]);

  // REMOVE FROM CART
  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as productType[])
    );
  };

  // SORTING FUNCTIONS
  const sortLowPrice = () => {
    const sorted: any = data?.sort((a, b) => a.price - b.price);
    setProducts([...sorted]);
  };
  const sortHighPrice = () => {
    const sorted: any = data?.sort((a, b) => b.price - a.price);
    setProducts([...sorted]);
  };
  const sortHighRate = () => {
    const sorted: any = data?.sort((a, b) => b.rating.rate - a.rating.rate);
    setProducts([...sorted]);
  };
  const sortMen = () => {
    const sorted: any = data?.filter(
      (item) => item.category === "men's clothing"
    );
    setProducts([...sorted]);
  };
  const sortWomen = () => {
    const sorted: any = data?.filter(
      (item) => item.category === "women's clothing"
    );
    setProducts([...sorted]);
  };
  const sortJewelery = () => {
    const sorted: any = data?.filter((item) => item.category === "jewelery");
    setProducts([...sorted]);
  };
  const sortElectronics = () => {
    const sorted: any = data?.filter((item) => item.category === "electronics");
    setProducts([...sorted]);
  };

  const handleOpenCart = () => {
    setOpenCart(!openCart);
  };

  useEffect(() => {
    setProducts(data);
  }, [data]);

  return (
    <div className="home-container full-width-screen">
      <HomeTopBar />
      <Navbar
        openCart={handleOpenCart}
        cartCount={getTotalItems}
        cart={cartItems}
      />

      <div className="flex container mx-auto px-5 mt-4 main-body ">
        <SortingComponent
          sortLowPrice={sortLowPrice}
          sortHighPrice={sortHighPrice}
          sortHighRate={sortHighRate}
          sortMen={sortMen}
          sortWomen={sortWomen}
          sortJewelery={sortJewelery}
          sortElectronics={sortElectronics}
        />

        <CartItemsComponent
          item={products}
          handleAddToCart={handleAddToCart}
          loading={isLoading}
        />
      </div>

      {openCart ? (
        <div className="cart-container">
          <div className="color-gray cart-container-inner p-3">
            <div className="flex j-between items-center mb-3">
              <p className="fs-sm-2 fw-medium">Your cart</p>
              <button
                className="fw-semibold fs-md border-0"
                onClick={() => handleOpenCart()}
              >
                X
              </button>
            </div>

            <p className="">3 items</p>

            <CartContainer />
          </div>
        </div>
      ) : null}
    </div>
  );
};

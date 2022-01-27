import React, { useState } from "react";
import { CartItemsComponent } from "../../Components/CartItemsComponent/CartItemsComponent";
import { HomeTopBar } from "../../Components/HomeTopBar/HomeTopBar";
import { Navbar } from "../../Components/Navbar/Navbar";
import { SortingComponent } from "../../Components/SortingComponent/SortingComponent";
import "./Home.styles.css";
import { useQuery } from "react-query";

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
  const [cartItems, setCartItems] = useState([] as productType[]);
  const { data, isLoading, error } = useQuery<productType[]>(
    "products",
    allProducts
  );

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
  };

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

  return (
    <div className="home-container full-width-screen">
      <HomeTopBar />
      <Navbar />

      <div className="flex container mx-auto px-5 mt-4 main-body">
        <SortingComponent />
        <CartItemsComponent item={data} handleAddToCart={handleAddToCart} />
      </div>
    </div>
  );
};

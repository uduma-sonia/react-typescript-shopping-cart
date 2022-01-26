import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Cart } from "./Pages/Cart/Cart";
import "./Styles/Global.css";

import { useState } from "react";
import { useQuery } from "react-query";
// import Cart from "./Cart/Cart";
import { Item } from "./Item/Item";

export type productType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  rating: object;
};

const allProducts = async (): Promise<productType[]> =>
  await (await fetch("https://fakestoreapi.com/products")).json();

const App = () => {
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

  // if (error) return <div>SOMETHING WENT WRONG</div>;

  // if (isLoading) return <div>LOADING</div>;

  return (
    <BrowserRouter>
      {/* <div>
        cart counter
        <button>{getTotalItems(cartItems)}</button>
      </div>
      {data?.map((item) => (
        <Item item={item} handleAddToCart={handleAddToCart} />
      ))}

      <div>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </div> */}
      {/* <Route path='/' component={Home}> */}
      {/* <Login /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

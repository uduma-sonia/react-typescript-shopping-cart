import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { Cart } from "./Pages/Cart/Cart";
import "./Styles/Global.css";

import { useState } from "react";
import { useQuery } from "react-query";
// import Cart from "./Cart/Cart";

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

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

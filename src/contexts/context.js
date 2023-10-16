import React, { createContext, useState } from "react";
import { PRODUCTS } from "../PRODUCTS";

export const ShopContextAPI = createContext();
const initialValue = () => {
  let cart = {};
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export default function Provider({ children }) {
  const [cartItem, setCartItem] = useState(initialValue());
  const addToCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    setCartItem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const values = { cartItem, addToCart, removeFromCart };
  return (
    <ShopContextAPI.Provider value={values}>{children}</ShopContextAPI.Provider>
  );
}

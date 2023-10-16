import React, { useContext } from "react";
import { PRODUCTS } from "../../PRODUCTS";
import { ShopContextAPI } from "../../contexts/context";
import CartItem from "./cartItem";
import "./cart.css";

export default function Cart() {
  const { cartItem } = useContext(ShopContextAPI);
  return (
    <div className="cart">
      <h1>Your Cart Items :</h1>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItem[product.id] > 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  );
}

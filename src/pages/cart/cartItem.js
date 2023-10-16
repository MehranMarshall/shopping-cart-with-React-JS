import React, { useContext } from "react";
import { ShopContextAPI } from "../../contexts/context";
import { ShoppingCart } from "phosphor-react";

export default function CartItem({ data }) {
  const { id, text, price, productImage } = data;
  const { removeFromCart, cartItem, addToCart } = useContext(ShopContextAPI);
  const cartItemsAmount = cartItem[id];
  return (
    <div className="cartItem">
      <img src={productImage} width="350px" />
      <div className="cartDesc">
        <h2>{text}</h2>
        <p>${price.toFixed(1)}</p>
        <button onClick={() => removeFromCart(id)}>-</button>
        {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
        <button onClick={() => addToCart(id)}>+</button>
      </div>
    </div>
  );
}

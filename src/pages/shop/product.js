import React, { useContext } from "react";
import { ShopContextAPI } from "../../contexts/context";
import { ShoppingCart } from "phosphor-react";

export default function Product({ data }) {
  const { id, text, price, productImage } = data;
  const { cartItem, addToCart } = useContext(ShopContextAPI);
  const cartItemsAmount = cartItem[id];
  return (
    <div className="product">
      <img src={productImage} width="350px" />
      <div className="shopDesc">
        <h2>{text}</h2>
        <p>${price.toFixed(1)}</p>
      </div>
      <button className="addToCartBtn" onClick={() => addToCart(id)}>
        Add to{<ShoppingCart className="cartIco" size={20} />}{" "}
        {cartItemsAmount > 0 && <>({cartItemsAmount})</>}
      </button>
    </div>
  );
}

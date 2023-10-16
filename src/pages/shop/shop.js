import React from "react";
import { PRODUCTS } from "../../PRODUCTS";
import Product from "./product";
import "./shop.css";

export default function Shop() {
  return (
    <div className="shop">
      <h1 className="shopHeader">Shopping</h1>
      <div className="products">
        {PRODUCTS.map((product) => {
          return <Product data={product} />;
        })}
      </div>
    </div>
  );
}

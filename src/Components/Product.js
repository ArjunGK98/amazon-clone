import React from "react";
import "./Product.css";

function Product({ id, title, price, rating, image }) {
  console.log("Product component called");
  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="Product_pricing">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
      </div>
      <img src={image}></img>
      <button>Add to basket</button>
    </div>
  );
}

export default Product;

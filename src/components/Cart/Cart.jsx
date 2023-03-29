import React from "react";
import "./Cart.css";

const Cart = (props) => {
  return (
    <div className="cart">
      <h3>Under add to cart</h3>
      {props.cart.map((item) => (
        <p>{item.strMeal}</p>
      ))}
    </div>
  );
};

export default Cart;

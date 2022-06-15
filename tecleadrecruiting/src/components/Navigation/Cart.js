import React from "react";
import Basket from "./Basket";

const Cart = (props) => {
  return (
    <div>
      <Basket cart={props.cart} />
    </div>
  );
};

export default Cart;

/* === GENERAL IMPORT === */
import React from "react";
import { useState } from "react";

/* === COMPONENT IMPORT === */
import Basket from "./Basket";

/* === STYLE IMPORT === */
import "../../style/components/Navigation.scss";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navigation = (props) => {
  const { searchHandler, cart, deleteCart } = props;

  const [show, setShow] = useState(false);

  /* == OPENING THE CART === */
  const openCart = () => {
    setShow(true);
  };

/* == CLOSING THE CART === */
  const closeCart = () => {
    setShow(false);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          <form action="/" method="get" className="nav-search-form">
            <input
              type="text"
              id="header-search"
              placeholder="Search..."
              name="s"
              onChange={searchHandler}
            />
          </form>
          <button id="openBtn" onClick={openCart}>
            <ShoppingCartIcon id="nav-shopping-icon" />
            <span id="cartAmount">{cart.length}</span>
          </button>
          <Basket
            cart={cart}
            show={show}
            hideCart={closeCart}
            deleteCart={deleteCart}
          />
        </div>
      </div>
    </>
  );
};

export default Navigation;

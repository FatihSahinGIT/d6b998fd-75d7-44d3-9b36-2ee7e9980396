/* === GENERAL IMPORT === */
import React from "react";

/* === STYLE IMPORT === */
import "../../style/components/Basket.scss";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Basket = (props) => {
  const { show, cart, deleteCart, hideCart } = props;

  return (
    <div className="basket">
      {show && (
        <div className="basket-container">
          <h5 id="basket-header">Your Events</h5>
          {cart.map((basketItem) => {
            return (
              <li key={basketItem._id} className="basket-content">
                <h4 id="basket-content-header">{basketItem.title}</h4>
                <img src={basketItem.illustration} alt="Fyler"></img>
              </li>
            );
          })}

          <button onClick={deleteCart} id="deleteBtn">
            <DeleteOutlineIcon id="deleteIcon" />
          </button>
          <button id="closeBtn" onClick={hideCart}>
            Close Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default Basket;

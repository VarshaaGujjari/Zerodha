
import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);

  const handleSellClick = async () => {
    try {
      const token = localStorage.getItem("token");

      // User not logged in
      if (!token) {
        alert("Please login first.");
        return;
      }

      if (Number(stockQuantity) <= 0 || Number(stockPrice) <= 0) {
          alert("Please enter a valid quantity and price.");
          return;
      }

      const response = await axios.post(
        // "http://localhost:3002/orders",
        // "https://zerodha-ky1a.onrender.com/orders",
        `${process.env.REACT_APP_BACKEND_URL}/orders`,
        {
          name: uid,
          qty: Number(stockQuantity),
          price: Number(stockPrice),
          mode: "SELL",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);

      generalContext.closeSellWindow();
    } catch (err) {
      console.log(err);

      alert(
        err.response?.data?.message ||
          "Something went wrong while selling the order."
      );
    }
  };

  const handleCancelClick = () => {
    generalContext.closeSellWindow();
  };


  return (
    <div className="container" id="sell-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>

            <input
              type="number"
              value={stockQuantity}
              min="1"
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>

            <input
              type="number"
              step="0.05"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>
          Margin required ₹
          {(stockQuantity * stockPrice).toFixed(2)}
        </span>

        <div>
          <button
            className="btn btn-blue"
            onClick={handleSellClick}
          >
            Sell
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;
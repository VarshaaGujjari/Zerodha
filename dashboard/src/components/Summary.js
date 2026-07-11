

import React, { useEffect, useState } from "react";
import axios from "axios";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    axios
      .get(
        // "http://localhost:3002/holdings",
         "https://zerodha-ky1a.onrender.com/holdings", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setHoldings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const investment = holdings.reduce(
    (sum, stock) => sum + stock.avg * stock.qty,
    0
  );

  const currentValue = holdings.reduce(
    (sum, stock) => sum + stock.price * stock.qty,
    0
  );

  const pnl = currentValue - investment;

  const pnlPercent =
    investment === 0 ? 0 : (pnl / investment) * 100;

  return (
    <>
      <div className="username">
        <h6>
          Hi, {user ? user.name : "User"}!
        </h6>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹{currentValue.toFixed(2)}</h3>
            <p>Current Value</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Investment
              <span> ₹{investment.toFixed(2)}</span>
            </p>

            <p>
              Holdings
              <span> {holdings.length}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Portfolio</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={pnl >= 0 ? "profit" : "loss"}>
              ₹{pnl.toFixed(2)}

              <small>
                {" "}
                ({pnlPercent.toFixed(2)}%)
              </small>
            </h3>

            <p>Total P&L</p>
          </div>

          <hr />

          <div className="second">
            <p>
              Current Value
              <span> ₹{currentValue.toFixed(2)}</span>
            </p>

            <p>
              Investment
              <span> ₹{investment.toFixed(2)}</span>
            </p>
          </div>
        </div>

        <hr className="divider" />

       
      </div>
    </>
  );
};

export default Summary;
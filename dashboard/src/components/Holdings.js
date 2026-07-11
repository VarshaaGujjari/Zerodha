import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHoldings = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please login first.");
          return;
        }

        const res = await axios.get(
          // "http://localhost:3002/holdings",
          "https://zerodha-ky1a.onrender.com/holdings",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setAllHoldings(res.data);
      } catch (err) {
        console.log(err);
        alert(
          err.response?.data?.message ||
            "Failed to fetch holdings."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchHoldings();
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(255,99,132,0.5)",
      },
    ],
  };

  if (loading) {
    return <h3>Loading Holdings...</h3>;
  }

  return (
    <>
      <h3 className="title">
        Holdings ({allHoldings.length})
      </h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. Cost</th>
              <th>LTP</th>
              <th>Current Value</th>
              <th>P&amp;L</th>
              <th>Net Chg.</th>
              <th>Day Chg.</th>
            </tr>
          </thead>

          <tbody>
            {allHoldings.map((stock, index) => {
              const currentValue = stock.price * stock.qty;
              const investment = stock.avg * stock.qty;
              const pnl = currentValue - investment;

              const profitClass =
                pnl >= 0 ? "profit" : "loss";

              const dayClass =
                stock.day?.includes("-")
                  ? "loss"
                  : "profit";

              return (
                <tr key={index}>
                  <td>{stock.name}</td>

                  <td>{stock.qty}</td>

                  <td>{stock.avg.toFixed(2)}</td>

                  <td>{stock.price.toFixed(2)}</td>

                  <td>{currentValue.toFixed(2)}</td>

                  <td className={profitClass}>
                    {pnl.toFixed(2)}
                  </td>

                  <td className={profitClass}>
                    {stock.net}
                  </td>

                  <td className={dayClass}>
                    {stock.day}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            {allHoldings
              .reduce(
                (sum, stock) =>
                  sum + stock.avg * stock.qty,
                0
              )
              .toFixed(2)}
          </h5>

          <p>Total Investment</p>
        </div>

        <div className="col">
          <h5>
            {allHoldings
              .reduce(
                (sum, stock) =>
                  sum + stock.price * stock.qty,
                0
              )
              .toFixed(2)}
          </h5>

          <p>Current Value</p>
        </div>

        <div className="col">
          <h5>
            {(
              allHoldings.reduce(
                (sum, stock) =>
                  sum + stock.price * stock.qty,
                0
              ) -
              allHoldings.reduce(
                (sum, stock) =>
                  sum + stock.avg * stock.qty,
                0
              )
            ).toFixed(2)}
          </h5>

          <p>Total P&amp;L</p>
        </div>
      </div>

      {allHoldings.length > 0 && (
        <VerticalGraph data={data} />
      )}
    </>
  );
};

export default Holdings;


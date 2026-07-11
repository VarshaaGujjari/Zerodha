import React from "react";

const StockInfo = ({ stock, onClose }) => {
  if (!stock) return null;

  return (
    <div className="stock-info-overlay">
      <div className="stock-info-box">

        <h2>{stock.symbol}</h2>

        <hr />

        <p>
          <strong>Company:</strong> {stock.companyName}
        </p>

        <p>
          <strong>Sector:</strong> {stock.sector}
        </p>

        <p>
          <strong>Exchange:</strong> {stock.exchange}
        </p>

        <p>
          <strong>Current Price:</strong> ₹{stock.currentPrice.toLocaleString("en-IN")}
        </p>

        <p>
          <strong>Market Cap:</strong> ₹{stock.marketCap.toLocaleString("en-IN")}
        </p>

        <p>
          <strong>PE Ratio:</strong> {stock.peRatio}
        </p>

        <p>
          <strong>Dividend Yield:</strong> {stock.dividendYield}%
        </p>

        <p>
          <strong>52 Week High:</strong> ₹{stock.week52High.toLocaleString("en-IN")}
        </p>

        <p>
          <strong>52 Week Low:</strong> ₹{stock.week52Low.toLocaleString("en-IN")}
        </p>

        <p>
          <strong>Description:</strong>
        </p>

        <p>{stock.description}</p>

        <button onClick={onClose}>
          Close
        </button>

      </div>
    </div>
  );
};

export default StockInfo;
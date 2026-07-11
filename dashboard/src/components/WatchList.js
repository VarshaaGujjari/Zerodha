import React, { useState, useContext, useEffect } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import StockInfo from "./StockInfo";

import { Tooltip, Grow } from "@mui/material";

import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";

import { DoughnutChart } from "./DoughnoutChart";

const WatchList = () => {
  const [stocks, setStocks] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedStock, setSelectedStock] = useState(null);

  useEffect(() => {
    axios
      .get(
        // "http://localhost:3002/stocks",
        "https://zerodha-ky1a.onrender.com/stocks"
      )
      .then((res) => {
        setStocks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

   const filteredStocks = stocks.filter((stock) =>
   stock.symbol.toLowerCase().includes(search.toLowerCase()) ||
  stock.companyName.toLowerCase().includes(search.toLowerCase()) ||
  stock.sector.toLowerCase().includes(search.toLowerCase())
);

  // const labels = filteredStocks.map((stock) => stock.symbol);
  const labels = filteredStocks.map((stock) => stock.symbol);

  const data = {
    labels,
    datasets: [
      {
        label: "Price",
        // data: stocks.map((stock) => stock.currentPrice),
        data: filteredStocks.map((stock) => stock.currentPrice),
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

 

  return (
    <div className="watchlist-container">
      <div className="search-container">

        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: INFY, TCS, RELIANCE..."
          className="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <span className="counts">
          {filteredStocks.length}/ 50
        </span>
      </div>

      <ul className="list">
        {filteredStocks.map((stock) => (
          <WatchListItem
            stock={stock}
            key={stock._id}
            setSelectedStock={setSelectedStock}
          />
        ))}
      </ul>

      <DoughnutChart data={data} /> 
      
      <StockInfo
        stock={selectedStock}
        onClose={() => setSelectedStock(null)}
      />

    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock , setSelectedStock}) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  const isDown = stock.dayChange < 0;

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="item">
        <p className={isDown ? "down" : "up"}>
          {stock.symbol}
        </p>

        <div className="itemInfo">
          <span className="percent">
            {stock.dayChangePercent}%
          </span>

          {isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}

          <span className="price">
            ₹{stock.currentPrice}
          </span>
        </div>
      </div>

      {showWatchlistActions && (
        <WatchListActions  uid={stock.symbol}
    stock={stock}
    setSelectedStock={setSelectedStock} />
      )}
    </li>
  );
};

const WatchListActions = ({ uid ,stock, setSelectedStock}) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  const handleSellClick = () => {
  generalContext.openSellWindow(uid);
};

const handleAnalyticsClick = () => {
    window.open(
        `https://www.tradingview.com/symbols/NSE-${uid}/`,
        "_blank"
    );
};

const handleMoreClick = () => {
  // console.log(stock);
  setSelectedStock(stock);
};

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button 
          className="sell"
          onClick={handleSellClick}>
            Sell
          </button>
        </Tooltip>

        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action" onClick={handleAnalyticsClick}>
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>

        <Tooltip
          title="More"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action"  onClick={handleMoreClick}>
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
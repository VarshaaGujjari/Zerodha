const { Schema } = require("mongoose");

const StocksSchema = new Schema({
  symbol: {
    type: String,
    unique: true,
    required: true,
  },

  companyName: {
    type: String,
    required: true,
  },

  sector: String,

  exchange: {
    type: String,
    default: "NSE",
  },

  currentPrice: Number,

  dayChange: Number,

  dayChangePercent: Number,

  marketCap: Number,

  peRatio: Number,
  dividendYield: Number,
  week52High: Number,
  week52Low: Number,
  logo: String,
  description: String,
});

module.exports = { StocksSchema };
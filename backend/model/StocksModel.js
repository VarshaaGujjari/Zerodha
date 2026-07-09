const { model } = require("mongoose");

const { StocksSchema } = require("../schemas/StocksSchema");

const StocksModel = model("stocks", StocksSchema);

module.exports = { StocksModel };
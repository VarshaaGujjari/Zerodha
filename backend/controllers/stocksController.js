const { StocksModel } = require("../model/StocksModel");

const getAllStocks = async (req, res) => {
  try {
    const stocks = await StocksModel.find();

    res.status(200).json(stocks);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

module.exports = {
  getAllStocks,
};
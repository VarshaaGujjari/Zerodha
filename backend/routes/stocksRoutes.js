const express = require("express");

const router = express.Router();

const {
  getAllStocks,
} = require("../controllers/stocksController");

router.get("/", getAllStocks);

module.exports = router;
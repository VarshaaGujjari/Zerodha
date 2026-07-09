const express = require("express");

const router = express.Router();

const {
  seedStocks,
} = require("../controllers/seedController");

router.get("/stocks", seedStocks);

module.exports = router;
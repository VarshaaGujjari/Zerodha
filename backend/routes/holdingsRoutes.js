const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth");

const {
  getAllHoldings,
} = require("../controllers/holdingsController");

router.get(
  "/",
  authMiddleware,
  getAllHoldings
);

module.exports = router;
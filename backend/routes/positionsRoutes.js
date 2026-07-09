const express = require("express");

const router = express.Router();

const authMiddleware = require("../middleware/auth");

const {
  getAllPositions,
} = require("../controllers/positionsController");

router.get("/", authMiddleware, getAllPositions);

module.exports = router;
const express = require("express");
const router = express.Router();

const authMiddleware = require("../middleware/auth");

const {
    createOrder,
    getOrders,
} = require("../controllers/ordersController");

router.get(
    "/",
    authMiddleware,
    getOrders
);

router.post(
    "/",
    authMiddleware,
    createOrder
);

module.exports = router;
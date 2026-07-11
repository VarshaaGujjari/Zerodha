
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const holdingsRoutes = require("./routes/holdingsRoutes");
const positionsRoutes = require("./routes/positionsRoutes");
const ordersRoutes = require("./routes/ordersRoutes");
const stocksRoutes = require("./routes/stocksRoutes");
const seedRoutes = require("./routes/seedRoutes");
const { HoldingsModel } = require("./model/HoldingsModel");

const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");
const authRoutes = require("./routes/authRoutes");

const authMiddleware = require("./middleware/auth");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/holdings", holdingsRoutes);
app.use("/positions", positionsRoutes);
app.use("/orders", ordersRoutes);
app.use("/stocks", stocksRoutes);
app.use("/seed", seedRoutes);


app.listen(PORT, () => {
  console.log("App started!");
  mongoose.connect(uri);
  console.log("DB started!");
});
// app.get("/allHoldings", authMiddleware, async (req, res) => {
//   let allHoldings = await HoldingsModel.find({});
//   res.json(allHoldings);
// });

const { HoldingsModel } = require("../model/HoldingsModel");

const getAllHoldings = async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({
      userId: req.user.userId,
    });

    res.status(200).json(allHoldings);
  } catch (error) {
    res.status(500).json({
      message: "Error fetching holdings",
    });
  }
};

module.exports = {
  getAllHoldings,
};
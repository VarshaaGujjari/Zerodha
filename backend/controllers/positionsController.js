// app.get("/allPositions", async (req, res) => {
//   let allPositions = await PositionsModel.find({});
//   res.json(allPositions);
// });

const { PositionsModel } = require("../model/PositionsModel");

const getAllPositions = async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({
      userId: req.user.userId,
    });

    res.status(200).json(allPositions);
  } catch (err) {
    res.status(500).json({
      message: "Error fetching positions",
    });
  }
};

module.exports = {
  getAllPositions,
};


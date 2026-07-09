// const { model } = require("mongoose");

// const { PositionsSchema } = require("../schemas/PositionsSchema");

// const PositionsModel = new model("position", PositionsSchema);

// module.exports = { PositionsModel };

// const mongoose = require("mongoose");
// const { PositionsSchema } = require("./PositionsSchema");

// const PositionsModel = mongoose.model(
//     "positions",
//     PositionsSchema
// );

// module.exports = {
//     PositionsModel,
// };

const mongoose = require("mongoose");
// const { PositionsSchema } = require("..PositionsSchema/schemas/PositionsSchema");
const { PositionsSchema } = require("../schemas/PositionsSchema");

const PositionsModel = mongoose.model("positions", PositionsSchema);

module.exports = { PositionsModel };
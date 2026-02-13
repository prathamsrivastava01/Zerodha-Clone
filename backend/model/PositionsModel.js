const { model } = require("mongoose");

const { PositionSchema } = require("../schemas/PositionSchema");

const PositionsModel = new model("model", PositionSchema);

module.exports = { PositionsModel };


const mongoose = require("mongoose");
const mongodb = require("mongodb");
const Schema = mongoose.Schema;
const stateSchema = mongoose.Schema({
  stateName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
    default: true,
  },
});
const stateModel = mongoose.model("State", stateSchema);

module.exports = stateModel;

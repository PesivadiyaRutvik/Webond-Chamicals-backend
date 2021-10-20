const mongoose = require("mongoose");

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

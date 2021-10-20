const mongoose = require("mongoose");
const districtSchema = mongoose.Schema({
  stateId: {
    //reference to state document
    required: true,
    type: mongoose.Schema.Types.ObjectId,
    ref: "State",
  },
  districtName: {
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
const districtModel = mongoose.model("District", districtSchema);

module.exports = districtModel;

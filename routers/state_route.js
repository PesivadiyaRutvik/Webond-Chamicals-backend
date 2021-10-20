const express = require("express");
// const stateAdd = require("../controllers/state_controller");
const stateRouter = express.Router();
const {
  addState,
  deleteState,
  getAllState,
} = require("../controllers/state_controller");

stateRouter.route("/addState").post(addState);
stateRouter.route("/deleteState").delete(deleteState);
stateRouter.route("/getAllState").get(getAllState);

module.exports = stateRouter;

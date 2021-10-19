const express = require("express");
// const stateAdd = require("../controllers/state_controller");
const stateRouter = express.Router();
const {
  stateAdd,
  stateDelete,
  stateFetch,
} = require("../controllers/state_controller");

/**
 * @swagger
 *
 * /state/stateAdd:
 * get:
 *  description: hkjdhfjkah
 *  responses:
 *  '200':
 *      description:a sucess insert
 *
 *
 *
 */
stateRouter.route("/stateAdd").post(stateAdd);
stateRouter.route("/stateDelete").delete(stateDelete);
stateRouter.route("/stateFetch").delete(stateFetch);

module.exports = stateRouter;

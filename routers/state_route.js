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
 * /state/stateAdd:
 *    post:
 *        summary: testing api
 *        descriptin: test description
 *        requestBody:
 *            content:
 *               application/json:
 *                   schema:
 *                      type: object
 *                      properties:
 *                          stateName:
 *                               type: string
 *                          isVisible:
 *                               type: boolean
 *        responses:
 *            200:
 *                 description: this is description
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                stateName:
 *                                         type: string
 */
stateRouter.route("/stateAdd").post(stateAdd);
stateRouter.route("/stateDelete").delete(stateDelete);
stateRouter.route("/stateFetch").delete(stateFetch);

module.exports = stateRouter;

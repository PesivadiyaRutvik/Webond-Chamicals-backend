require("dotenv").config({ path: "./config/dev.env" });
require("./config/db");
const express = require("express");
const errorHandler = require("./middleware/error_handler_middleware");
const userRouter = require("./routers/user_route");
const stateRouter = require("./routers/state_route");
//for swagger
const swaggerUI = require("swagger-ui-express");
// const swaggerJsDoc = require("swagger");

const app = express();
const PORT = process.env.PORT || 3000;
const swaggerDocument = require("./config/swagger.json");
app.use(express.json());

app.use("/user", userRouter);
app.use("/state", stateRouter);

// const options = {
//   definition: {
//     openapi: "3.0.0",
//     info: {
//       title: "API",
//       version: "1.0.0",
//       description: "APIs develeoped by team work",
//     },
//     servers: [
//       {
//         url: "http://localhost:3000",
//       },
//     ],
//   },
//   //   apis: ["./routers/*.js"],
//   apis: ["./routers/state_route.js"],
// };

// const specs = swaggerJsDoc(options);

// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use(
  "/api-Docsp",
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument, { explorer: true })
);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running ona port:- PORT " + PORT);
});

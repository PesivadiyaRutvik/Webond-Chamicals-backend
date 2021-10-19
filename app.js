require("dotenv").config({ path: "./config/dev.env" });
require("./config/db");
const express = require("express");
const errorHandler = require("./middleware/error_handler_middleware");
const userRouter = require("./routers/user_route");
const stateRouter = require("./routers/state_route");
//for swagger
const swaggerUI = require("swagger-ui-express");
const swaggerJSDoc = require("swagger-jsdoc");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/user", userRouter);
app.use("/state", stateRouter);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API",
      version: "1.0.0",
      description: "APIs develeoped by team work",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routers/state_route.js"],
};

const specs = swaggerJSDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running ona port:- PORT " + PORT);
});

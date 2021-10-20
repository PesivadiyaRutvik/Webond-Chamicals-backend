require("dotenv").config({ path: "./config/dev.env" });
require("./config/db");
const express = require("express");
const errorHandler = require("./middleware/error_handler_middleware");
const userRouter = require("./routers/user_route");
const stateRouter = require("./routers/state_route");

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use("/user", userRouter);
app.use("/state", stateRouter);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log("Server running ona port:- PORT " + PORT);
});

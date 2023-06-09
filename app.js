const express = require("express");
const { rootRouter } = require("./routers");

const app = express();
app.use(express.json());

app.use("/", rootRouter);

app.use((err, req, res, next) => {
  console.log("err", JSON.stringify(err.message, null, 2));
  res.status(err.statusCode || 500).json({
    message: err.message || "Something went wrong, please try again later",
  });
});

module.exports = { app };

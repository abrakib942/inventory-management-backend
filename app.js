const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());

//routes
const productRouter = require("./routes/product.route");

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//posting database

app.use("/api/v1/product", productRouter);

module.exports = app;

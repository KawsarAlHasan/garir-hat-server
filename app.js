const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user.route");
const productRoute = require("./routes/product.route");
const upcommingRoute = require("./routes/upcomming.route");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/upcomming", upcommingRoute);

app.get("/", (req, res) => {
  res.send("Cars hat is working");
});

module.exports = app;

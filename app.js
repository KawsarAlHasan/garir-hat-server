const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

const userRoute = require("./routes/user.route");
const adminRoute = require("./routes/admin.route");
const vendorRoute = require("./routes/vendor.route");
const productRoute = require("./routes/product.route");
const subcriptionRoute = require("./routes/subcription.route");
const subcriptionNameRoute = require("./routes/subcription.name.route");

app.use("/api/v1/user", userRoute);
app.use("/api/v1/admin", adminRoute);
app.use("/api/v1/vendor", vendorRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/subcription", subcriptionRoute);
app.use("/api/v1/subcriptionName", subcriptionNameRoute);

app.get("/", (req, res) => {
  res.send("Cars hat is working");
});

module.exports = app;

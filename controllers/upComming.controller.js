const Upcomming = require("../models/upcomming.model");
// create Product
exports.upcommingEmail = async (req, res, next) => {
  try {
    const result = await Upcomming.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Thank You Sir",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Please provide valid email",
      error: error.message,
    });
  }
};

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UpcommingSchema = mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
    },
  },
  { timestams: true }
);

const Upcomming = mongoose.model("UpcommingEmail", UpcommingSchema);

module.exports = Upcomming;

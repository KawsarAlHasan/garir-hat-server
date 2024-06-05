const mongoose = require("mongoose");

const VendorSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First Name must be at least 3 characters."],
    maxLenght: [30, "First Name is too large"],
  },
  lastName: {
    type: String,
    minLength: [3, "First Name must be at least 3 characters."],
    maxLenght: [30, "First Name is too large"],
  },
});

const Vendor = mongoose.model("Vendors", VendorSchema);

module.exports = Vendor;

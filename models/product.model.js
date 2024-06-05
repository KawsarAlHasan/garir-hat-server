const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this product"],
      trim: true,
      minLength: [3, "Product name must be at least 3 characters."],
      maxLength: [30, "Product name is to large"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this product"],
      min: [0, "Price can't be negative"],
    },
    quantity: {
      type: Number,
      required: [true, "Please provide quantity for this product"],
      min: [0, "Quantity can't be negative"],
    },
    categories: [
      {
        name: {
          type: String,
        },
        // _id: mongoose.Schema.Types.ObjectId,
      },
    ],
    subcategories: { type: String },
    cities: { type: String },
    areas: { type: String },
    condition: {
      type: String,
      enum: {
        values: ["New", "Used", "Reconditioned"],
        message: "Condition can't be {VALUE}",
      },
    },
    brand: { type: String },
    model: { type: String },
    yearOfManufacture: { type: String },
    kmRun: { type: String },
    engineCapacity: { type: String },
    bodyType: { type: String },
    transmission: {
      type: String,
      enum: {
        values: ["Manual", "Automatic", "Other transmission"],
        message: "Transmission can't be {VALUE}",
      },
    },
    description: { type: String },
    status: {
      type: String,
      required: [true, "Status is required"],
      enum: {
        values: ["in-stock", "out-of-stock", "discontiued"],
        message: "Status can't be {VALUE}",
      },
    },
    supplier: {
      // type: mongoose.Schema.Types.ObjectId,
      type: String,
      ref: "Supplier",
    },
  },
  { timestams: true }
);

const Product = mongoose.model("Products", ProductSchema);
module.exports = Product;

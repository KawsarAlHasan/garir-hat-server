const Product = require("../models/product.model");

// create Product
exports.createProduct = async (req, res, next) => {
  try {
    const result = await Product.create(req.body);
    res.status(200).json({
      status: "Success",
      message: "Product create Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product create Unseccess",
      error: error.message,
    });
  }
};

// get all Products
exports.getAllProducts = async (req, res, next) => {
  try {
    const result = await Product.find({});
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get all products",
      error: error.message,
    });
  }
};

// get single Product
exports.getOneProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Product.findById(id);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the product",
      error: error.message,
    });
  }
};

// Product update
exports.updateProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    const result = await product.set(req.body).save();
    res.status(200).json({
      status: "Success",
      message: "Product Updated Successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Product updated unseccess",
      error: error.message,
    });
  }
};

// Product delete
exports.deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await Product.deleteOne({ _id: id });
    res.status(200).json({
      status: "Success",
      message: "Product Deleted Successfully",
      data: result,
    });
  } catch (error) {
    res.status(200).json({
      status: "Fail",
      message: "Product Delete Unsuccess",
      error: error.message,
    });
  }
};

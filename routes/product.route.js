const express = require("express");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const varifyToken = require("../middleware/varifyToken");
const router = express.Router();

router.post("/create", createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getOneProduct);
router.patch("/:id", varifyToken, updateProduct);
router.delete("/:id", varifyToken, deleteProduct);

module.exports = router;

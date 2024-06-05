const express = require("express");
const {
  createProduct,
  getAllProducts,
  getOneProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controller");
const router = express.Router();

router.post("/create", createProduct);
router.get("/all", getAllProducts);
router.get("/:id", getOneProduct);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;

import express from "express";
import {
  getAllProducts,
  getCategories,
  getProductById,
  getProductsByCategory,
} from "../controller/productController.js";
const router = express.Router();

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.get("/categories", getCategories);
router.get("/category/:category", getProductsByCategory);

export default router;

import {
  fetchCategories,
  fetchedAllProducts,
  fetchProductById,
  fetchProductsByCategory,
} from "../service/productService.js";

export const getAllProducts = async (req, res) => {
  const { limit, skip } = req.query;
  const data = await fetchedAllProducts(limit, skip);
  res.json(data);
};

export const getProductById = async (req, res) => {
  const data = await fetchProductById(req.params.id);
  res.json(data);
};

export const getCategories = async (req, res) => {
  const data = await fetchCategories();
  res.json(data);
};

export const getProductsByCategory = async (req, res) => {
  const data = await fetchProductsByCategory(req.params.category);
  res.json(data);
};

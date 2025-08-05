import axios from "axios";

import { getCache, setCache } from "../cache/cache.js";

const API_BASE = "https://dummyjson.com/products";
export const fetchedAllProducts = async (limit = 12, skip = 0) => {
  try {
    const cacheKey = `products?limit=${limit}&skip=${skip}`;
    const cached = getCache(cacheKey);
    if (cached) return cached;
    const res = await axios.get(`${API_BASE}?limit=${limit}&skip=${skip}`);
    setCache(cacheKey, res.data);
    return res.data;
  } catch (error) {
    console.error("Error", error);
  }
};
export const fetchProductById = async (id) => {
  try {
    const cacheKey = `product:${id}`;
    const cached = getCache(cacheKey);
    if (cached) return cached;

    const res = await axios.get(`${API_BASE}/${id}`);
    setCache(cacheKey, res.data);
    return res.data;
  } catch (error) {
    console.error("ERROR", error);
  }
};

export const fetchCategories = async () => {
  try {
    const cacheKey = `categories`;
    const cached = getCache(cacheKey);
    if (cached) return cached;
    const res = await axios.get(`${API_BASE}/categories`);
    setCache(cacheKey, res.data);
    return res.data;
  } catch (error) {
    console.error("ERROR", error);
  }
};

export const fetchProductsByCategory = async (category) => {
  try {
    const cacheKey = `category:${category}`;
    const cached = getCache(cacheKey);
    if (cached) return cached;
    const res = await axios.get(`${API_BASE}/category/${category}`);
    setCache(cacheKey, res.data);
    return res.data;
  } catch (error) {
    console.error("ERROR", error);
  }
};

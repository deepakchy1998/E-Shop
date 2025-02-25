import axios from "axios";

const API_URL = "https://fakestoreapi.com";

// Fetch all products
export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

// Fetch product by id
export const fetchProductById = async (id) => {
  const response = await axios.get(`${API_URL}/products/${id}`);
  return response.data;
};

// Fetch all categories
export const fetchCategories = async () => {
  const response = await axios.get(`${API_URL}/products/categories`);
  return response.data;
};

// Fetch products by category
export const fetchProductsByCategory = async (category) => {
  const response = await axios.get(
    `${API_URL}/products/category/${encodeURIComponent(category)}`
  );
  return response.data;
};

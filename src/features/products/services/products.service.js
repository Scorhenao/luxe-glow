import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_PATH || "https://luxe-glow-back.onrender.com/api";

export const fetchProducts = async () => {
  const response = await axios.get(`${API_URL}/products`);
  return response.data;
};

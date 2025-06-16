import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_PATH || "https://luxe-glow-back.onrender.com/api";

export const fetchCategories = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/categories`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
};


export const createCategory = async (categoryData, token) => {
  try {
    const response = await axios.post(`${API_URL}/categories`, categoryData, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating category:", error);
    throw error;
  }
};
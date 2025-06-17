import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_PATH || "https://luxe-glow-back.onrender.com/api";

// Obtener todas las categorías
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

// Obtener una categoría por ID
export const fetchCategoryById = async (id, token) => {
  try {
    const response = await axios.get(`${API_URL}/categories/${id}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      console.warn("Categoría no encontrada");
    }
    console.error("Error fetching category by ID:", error);
    throw error;
  }
};

// Crear una categoría
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

// Eliminar una categoría por ID
export const deleteCategory = async (id, token) => {
  try {
    await axios.delete(`${API_URL}/categories/${id}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  } catch (error) {
    console.error("Error deleting category:", error);
    throw error;
  }
};

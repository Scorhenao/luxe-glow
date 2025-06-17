import axios from "axios";

const API_URL =
  import.meta.env.VITE_API_PATH || "https://luxe-glow-back.onrender.com/api";

// Obtener todos los productos
export const fetchProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/products`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Obtener productos con su categoría
export const fetchProductsWithCategory = async () => {
  try {
    const response = await axios.get(`${API_URL}/products/with-category`);
    return response.data;
  } catch (error) {
    console.error("Error fetching products with category:", error);
    throw error;
  }
};

// Obtener un producto por ID (con categoría)
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    if (error.response?.status === 404) {
      console.warn("Producto no encontrado");
    }
    console.error("Error fetching product by ID:", error);
    throw error;
  }
};

// Crear un producto
export const createProduct = async (productData, token) => {
  try {
    const response = await axios.post(`${API_URL}/products`, productData, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Eliminar un producto por ID
export const deleteProduct = async (id, token) => {
  try {
    await axios.delete(`${API_URL}/products/${id}`, {
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  }
};

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

// Actualizar un producto por ID
export const updateProduct = async (id, updatedData, token) => {
  try {
    let headers = {
      Authorization: `Bearer ${token}`,
    };

    let dataToSend;

    // Si hay imagen -> multipart
    if (updatedData.image instanceof File) {
      const formData = new FormData();
      for (const key in updatedData) {
        if (key !== "image" && updatedData[key] !== undefined) {
          formData.append(key, updatedData[key]);
        }
      }
      formData.append("file", updatedData.image); // Campo esperado por el backend para imágenes
      dataToSend = formData;
      headers["Content-Type"] = "multipart/form-data";
    }
    // Sin imagen -> JSON
    else {
      dataToSend = { ...updatedData };
      delete dataToSend.image; // Eliminar campo innecesario
      headers["Content-Type"] = "application/json";
    }

    const response = await axios.patch(
      `${API_URL}/products/${id}`,
      dataToSend,
      { headers }
    );

    return response.data;
  } catch (error) {
    console.error("Error updating product:", error);
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

import axios from "axios";

const API_PATH =
  import.meta.env.VITE_API_PATH || "https://luxe-glow-back.onrender.com/api";

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${API_PATH}/auth/login`, {
      email,
      password,
    });

    const token = response.data.access_token;
    localStorage.setItem("token", token);

    return token;
  } catch (error) {
    console.error("Login error:", error);
    throw error.response?.data || { message: "Unknown error" };
  }
};

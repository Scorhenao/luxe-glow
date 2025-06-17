import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import {
  fetchProducts,
  createProduct,
  deleteProduct,
} from "../../products/services/products.service";
import { fetchCategories } from "../categories/services/categories.services";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    image: null,
    categoryId: "",
  });

  const loadProducts = () => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  };

  const loadCategories = () => {
    const token = localStorage.getItem("token");
    fetchCategories(token)
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error al cargar categorías:", error));
  };

  useEffect(() => {
    loadProducts();
    loadCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    // Validación antes de enviar
    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.stock ||
      !formData.image ||
      !formData.categoryId
    ) {
      Swal.fire(
        "Campos incompletos",
        "Por favor, complete todos los campos.",
        "warning"
      );
      return;
    }

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("description", formData.description);
      form.append("price", formData.price);
      form.append("stock", formData.stock);
      form.append("categoryId", formData.categoryId);
      form.append("file", formData.image); // <- asegúrate de que el backend espera "file"

      // Debug opcional
      console.log("Formulario a enviar:");
      for (let [key, value] of form.entries()) {
        console.log(`${key}:`, value);
      }

      await createProduct(form, token);
      Swal.fire("¡Éxito!", "Producto creado correctamente", "success");

      // Reset
      setFormData({
        name: "",
        description: "",
        price: "",
        stock: "",
        image: null,
        categoryId: "",
      });
      setIsModalOpen(false);
      loadProducts();
    } catch (error) {
      console.error("Error al crear producto:", error);
      Swal.fire("Error", "No se pudo crear el producto", "error");
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        await deleteProduct(id, token);
        Swal.fire("Eliminado", "El producto ha sido eliminado", "success");
        loadProducts();
      } catch (err) {
        console.error("Error al eliminar producto:", err);
        Swal.fire("Error", "No se pudo eliminar el producto", "error");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Listado de Productos</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Crear Producto
        </button>
      </div>

      <table className="min-w-full border border-collapse border-gray-300 table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Nombre</th>
            <th className="px-4 py-2 border border-gray-300">Descripción</th>
            <th className="px-4 py-2 border border-gray-300">Precio</th>
            <th className="px-4 py-2 border border-gray-300">Stock</th>
            <th className="px-4 py-2 border border-gray-300">Imagen</th>
            <th className="px-4 py-2 border border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((prod) => (
              <tr key={prod.id}>
                <td className="px-4 py-2 border">{prod.name}</td>
                <td className="px-4 py-2 border">{prod.description}</td>
                <td className="px-4 py-2 border">${prod.price.toFixed(2)}</td>
                <td className="px-4 py-2 border">{prod.stock}</td>
                <td className="px-4 py-2 border">
                  {prod.imageUrl ? (
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="object-cover w-16 h-16 rounded-md"
                    />
                  ) : (
                    <span className="text-gray-400">Sin imagen</span>
                  )}
                </td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center gap-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => {
                        // En un futuro puedes implementar esto para cargar los datos en el formulario
                        console.log("Editar producto:", prod.id);
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(prod.id)}
                    >
                      🗑️
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={6}
                className="px-4 py-4 text-center text-gray-500 border"
              >
                No hay productos disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Nuevo Producto</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Descripción"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="Precio"
                required
                step="0.01"
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <input
                type="number"
                name="stock"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Stock"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <input
                type="file"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded"
              />
              <select
                name="categoryId"
                value={formData.categoryId}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded"
              >
                <option value="">Seleccione una categoría</option>
                {categories.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

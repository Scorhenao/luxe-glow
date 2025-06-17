import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";
import {
  fetchCategories,
  createCategory,
  deleteCategory,
} from "./services/categories.services";

export const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", description: "" });

  const loadCategories = () => {
    const token = localStorage.getItem("token");
    fetchCategories(token)
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error al cargar categorías:", error));
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await createCategory(formData, token);
      Swal.fire({
        icon: "success",
        title: "Categoría creada",
        text: "La nueva categoría se ha agregado exitosamente.",
        confirmButtonColor: "#3085d6",
      });
      setFormData({ name: "", description: "" });
      setIsModalOpen(false);
      loadCategories();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text:
          error?.response?.status === 401
            ? "No autorizado. Por favor inicia sesión nuevamente."
            : "No se pudo crear la categoría. Inténtalo más tarde.",
        confirmButtonColor: "#d33",
      });
      console.error("Error al crear la categoría:", error);
    }
  };

  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "¿Eliminar categoría?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        const token = localStorage.getItem("token");
        await deleteCategory(id, token);
        Swal.fire("Eliminado", "La categoría ha sido eliminada", "success");
        loadCategories();
      } catch (err) {
        console.error("Error al eliminar categoría:", err);
        Swal.fire("Error", "No se pudo eliminar la categoría", "error");
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold">Listado de Categorías</h2>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Agregar Categoría
        </button>
      </div>

      <table className="min-w-full border border-collapse border-gray-300 table-auto">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border border-gray-300">Nombre</th>
            <th className="px-4 py-2 border border-gray-300">Descripción</th>
            <th className="px-4 py-2 border border-gray-300">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 ? (
            categories.map((cat) => (
              <tr key={cat.id}>
                <td className="px-4 py-2 border">{cat.name}</td>
                <td className="px-4 py-2 border">{cat.description}</td>
                <td className="px-4 py-2 border">
                  <div className="flex items-center gap-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => {
                        // En el futuro puedes cargar los datos al formulario
                        console.log("Editar categoría:", cat.id);
                      }}
                    >
                      ✏️
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDelete(cat.id)}
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
                colSpan={3}
                className="px-4 py-4 text-center text-gray-500 border"
              >
                No hay categorías disponibles.
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Nueva Categoría</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Descripción
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>
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

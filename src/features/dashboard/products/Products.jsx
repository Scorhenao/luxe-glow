import React, { useEffect, useState } from "react";
import { fetchProducts } from "../../products/services/products.service";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error al cargar productos:", error));
  }, []);

  return (
    <>
      <h2 className="mb-4 text-2xl font-semibold">Listado de Productos</h2>
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
                  <img
                    src={prod.imageUrl}
                    alt={prod.name}
                    className="object-cover w-16 h-16 rounded-md"
                  />
                </td>
                <td className="px-4 py-2 border">
                  <button className="text-blue-500 hover:underline">
                    Editar
                  </button>
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
    </>
  );
};

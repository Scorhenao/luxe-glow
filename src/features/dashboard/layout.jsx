import React from "react";
import { Link } from "react-router-dom";

const dashboardItems = [
  {
    title: "Usuarios",
    description: "Administra los usuarios del sistema.",
    to: "/dashboard/users",
  },
  {
    title: "Productos",
    description: "Gestiona los productos de la plataforma.",
    to: "/dashboard/products",
  },
  {
    title: "Categorías",
    description: "Administra las categorías de productos.",
    to: "/dashboard/categorias",
  },
];

export const Layout = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-[#f46b44] mb-2">
        Panel de Administración
      </h1>
      <p className="mb-8 text-gray-600">
        Bienvenido. Gestiona los módulos de la aplicación desde aquí.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
        {dashboardItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-between p-5 transition-all duration-300 bg-white shadow-md rounded-2xl hover:shadow-lg"
          >
            <div>
              <h3 className="text-lg font-semibold text-[#f46b44] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
            <Link
              to={item.to}
              className="mt-4 text-center bg-[#f99db7] hover:bg-[#ff5c8b] text-white font-medium py-2 rounded-lg transition-colors"
            >
              Ir a {item.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

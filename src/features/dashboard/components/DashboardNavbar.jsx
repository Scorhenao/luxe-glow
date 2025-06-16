import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../../public/assets/imgs/luxe-glow-logo.png";

const DashboardNavbar = () => {
  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-gray-700">
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          {/* Left: Logo + Toggle */}
          <div className="flex items-center gap-3">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-gray-600 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm.75 4.5a.75.75 0 000 1.5h7.5a.75.75 0 000-1.5H2.75z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo" className="w-12 h-13" />
              <span className="text-xl font-bold text-gray-800 dark:text-white">
                Luxe-glow
              </span>
            </a>
          </div>

          {/* Right: User Avatar */}
          <div className="flex items-center">
            <button
              type="button"
              className="relative w-8 h-8 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-600"
              data-dropdown-toggle="dropdown-user"
            >
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user"
                className="object-cover w-full h-full rounded-full"
              />
            </button>
            {/* Dropdown opcional aquí */}
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-slate-900 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/products"
                className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <span className="ml-3">Productos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/categories"
                className="flex items-center p-2 text-gray-700 rounded-lg dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-800"
              >
                <span className="ml-3">Categorías</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className="pt-16 pl-0 sm:pl-64 min-h-screen bg-[#f9f9fb]">
        <div className="p-6">
          <Outlet />{" "}
          {/* 👈 Aquí se cargan las vistas como Layout, Products, etc */}
        </div>
      </main>
    </>
  );
};

export default DashboardNavbar;

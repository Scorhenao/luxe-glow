import React from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../../../public/assets/imgs/luxe-glow-logo.png";

const DashboardNavbar = () => {
  return (
    <>
      <nav className="fixed top-0 z-50 w-full bg-[#fff4f8] border-b border-[#ffd3e9] dark:bg-[#ffd3e9] dark:border-[#ffbedc]">
        <div className="flex items-center justify-between px-4 py-3 lg:px-6">
          {/* Logo + Toggle */}
          <div className="flex items-center gap-3">
            <button
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-[#f46b44] rounded-lg sm:hidden hover:bg-[#ffe5ee] focus:outline-none focus:ring-2 focus:ring-[#f46b44]"
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
              <span className="text-xl font-bold text-[#f46b44] dark:text-[#f46b44]">
                Luxe-glow
              </span>
            </a>
          </div>

          {/* Avatar */}
          <div className="flex items-center">
            <button
              type="button"
              className="relative w-8 h-8 overflow-hidden bg-[#ffe1ee] rounded-full"
              data-dropdown-toggle="dropdown-user"
            >
              <img
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt="user"
                className="object-cover w-full h-full rounded-full"
              />
            </button>
          </div>
        </div>
      </nav>

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-16 transition-transform -translate-x-full bg-[#fff4f8] border-r border-[#ffd3e9] sm:translate-x-0 dark:bg-[#ffd3e9] dark:border-[#ffbedc]"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/dashboard"
                className="flex items-center p-2 text-[#f46b44] rounded-lg hover:bg-[#ffe5ee] hover:text-[#ff5c8b]"
              >
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/products"
                className="flex items-center p-2 text-[#f46b44] rounded-lg hover:bg-[#ffe5ee] hover:text-[#ff5c8b]"
              >
                <span className="ml-3">Productos</span>
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/categories"
                className="flex items-center p-2 text-[#f46b44] rounded-lg hover:bg-[#ffe5ee] hover:text-[#ff5c8b]"
              >
                <span className="ml-3">Categorías</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>

      <main className="pt-16 pl-0 sm:pl-64 min-h-screen bg-[#fff9fb]">
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default DashboardNavbar;

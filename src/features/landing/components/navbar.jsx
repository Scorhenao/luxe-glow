import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/assets/imgs/luxe-glow-logo.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#fff4f8] dark:bg-[#ffd3e9] p-6 shadow-md">
      <div className="flex items-center flex-shrink-0 text-[#f46b44] dark:text-[#f46b44] mr-6">
        <img src={logo} alt="Logo" className="w-12 h-13" />
        <span className="text-xl font-semibold tracking-tight">Luxe glow</span>
      </div>
      <div>
        <ul className="flex text-[#f46b44] dark:text-[#f46b44]">
          {[
            { path: "/", label: "Home" },
            { path: "/aboutUs", label: "About Us" },
            { path: "/products", label: "Products" },
            { path: "/login", label: "Login" },
          ].map((item) => (
            <li key={item.path} className="relative m-4 text-lg group">
              <Link
                to={item.path}
                className="transition-colors duration-200 group-hover:text-[#ff5c8b] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#ff5c8b] after:transition-all after:duration-300 group-hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

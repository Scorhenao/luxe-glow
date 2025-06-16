import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./utils/404";
import { Landing } from "../features/landing/Landing";
import { Login } from "../features/auth/Login";
import { Products } from "../features/dashboard/products/Products";
import { Layout } from "../features/dashboard/layout";
import { AboutUs } from "../features/landing/components/AboutUs";
import { ProductsCatalog } from "../features/products/ProductsCatalog";
import DashboardNavbar from "../features/dashboard/components/DashboardNavbar";

export const RoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/products" element={<ProductsCatalog />} />
      <Route path="/aboutUs" element={<AboutUs />} />
      <Route path="/login" element={<Login />} />

      <Route path="/dashboard" element={<DashboardNavbar/>}>
        <Route index element={<Layout />} /> {/* Pantalla principal */}
        <Route path="products" element={<Products />} />
        {/* <Route path="users" element={<Users />} /> */}
        {/* <Route path="view-users/:id" element={<ViewsUsers />} /> */}
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

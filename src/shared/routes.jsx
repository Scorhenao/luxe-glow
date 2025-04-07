import React from "react";
import { Route, Routes } from "react-router-dom";
import { NotFoundPage } from "./utils/404";
import { Landing } from "../features/landing/Landing";
import { Login } from "../features/auth/Login";

export const RoutesNav = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      {/* <Route path="/products" element={<ProductsHome />} /> */}
      <Route path="/login" element={<Login />} />

      {/* <Route path="/dashboard" element={<Layout />}> */}
        {/* <Route path="users" element={<Users />} /> */}
        {/* <Route path="view-users/:id" element={<ViewsUsers />} /> */}
        {/* <Route path="products" element={<Products />} /> */}
      {/* </Route> */}

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

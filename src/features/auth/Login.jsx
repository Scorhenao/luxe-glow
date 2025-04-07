import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../landing/components/navbar";

export const Login = () => {
  const navigate = useNavigate();

  const [dataAccess] = useState({
    email: "fercitacriollo@gmail.com",
    password: "1234",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === dataAccess.email && password === dataAccess.password) {
      navigate("/dashboard/products");
    } else {
      alert("Incorrect credentials");
    }
  };

  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center min-h-screen bg-[#fff4f8] dark:bg-[#fff4f8] transition-colors duration-300">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-2xl">
          <h2 className="text-2xl font-semibold text-center text-[#f46b44] dark:text-[#f99db7] mb-6">
            Sign in to your account
          </h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-[#fcf9f8]"
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white  text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f46b44]"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700 dark:text-[#fcf9f8]"
              >
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white  text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#f46b44]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-[#f99db7] hover:bg-[#ff5c8b] text-white font-bold rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

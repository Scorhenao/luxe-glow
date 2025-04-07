import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../landing/components/navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const navigate = useNavigate();

  const [dataAccess] = useState({
    email: "fercitacriollo@gmail.com",
    password: "1234",
  });

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
                className="block mb-2 text-sm font-medium text-gray-800 "
              >
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white  text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f46b44]"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f46b44] pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-[#f46b44] focus:outline-none"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-[#f99db7] hover:bg-[#ff5c8b] font-bold rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Login
            </button>
          </form>
        </div>
      </main>
    </>
  );
};

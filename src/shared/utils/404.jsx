import React from "react";
import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fff4f8] text-[#fcf9f8] dark:bg-[#ffd3e9] dark:text-[#fcf9f8] p-8">
      <h1 className="text-6xl font-extrabold mb-4 text-[#f46b44]">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-[#f99db7]">
        Page Not Found
      </h2>
      <p className="text-center max-w-md mb-6 text-[#f46b44]">
        Oops! The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="bg-[#f99db7] hover:bg-[#ff5c8b] text-white font-semibold py-2 px-4 rounded-2xl transition-all"
      >
        Go Home
      </Link>
    </div>
  );
}

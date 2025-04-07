import React from "react";

export const Welcome = () => {
  return (
    <section className="flex flex-col-reverse items-center justify-center gap-8 px-6 py-20 text-center bg-white md:flex-row">
      <div className="md:w-1/2">
        <h1 className="text-4xl font-bold mb-4 text-[#f46b44]">
          Welcome to LuxeGlow
        </h1>
        <p className="max-w-md text-center text-gray-700 textxt-lg ce md:mx-0">
          Discover a new level of beauty and wellness with our exclusive
          platform for beauty professionals and enthusiasts.
        </p>
      </div>

      <div className="md:w-1/2">
        <img
          src="/assets/imgs/welcome-beauty.jpg"
          alt="Welcome to LuxeGlow"
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

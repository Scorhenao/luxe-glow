import React from "react";
import { Navbar } from "./navbar";

export const AboutUs = () => {
  return (
    <>
      <Navbar />
      {/* Misión */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-[#bce1ff] to-gray-100">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-[#f46b44]">
            Our Mission
          </h2>
          <p className="text-gray-700 text-md ">
            To empower beauty professionals with innovative tools and
            visibility, while offering customers high-quality experiences and
            trusted services.
          </p>
        </div>
      </section>

      {/* Visión */}
      <section className="py-16 bg-gradient-to-r from-gray-100 via-[#f99db7] to-gray-100 text-white">
        <div className="max-w-5xl px-6 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-semibold">Our Vision</h2>
          <p className="text-gray-700 text-md">
            To become the leading platform in the beauty industry, transforming
            how services are discovered, booked, and enjoyed across the globe.
          </p>
        </div>
      </section>
    </>
  );
};

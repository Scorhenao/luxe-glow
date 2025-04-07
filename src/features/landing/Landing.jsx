import React from "react";
import { Navbar } from "./components/navbar";
import { Carrousel } from "./components/Carrousel";
import Footer from "./components/Footer";
import { Advertising } from "./components/advertising";
import { Welcome } from "./components/Welcome";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#fff4f8] text-gray-800 dark:bg-[#fff4f8] transition-colors duration-300">
        {/* Hero / Bienvenida */}
        <Welcome />

        {/* Misión */}
        <section className="py-16 bg-white dark:bg-[#3a3a3a]">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4 text-[#f46b44]">
              Our Mission
            </h2>
            <p className="text-md text-gray-700 dark:text-[#fcf9f8]">
              To empower beauty professionals with innovative tools and
              visibility, while offering customers high-quality experiences and
              trusted services.
            </p>
          </div>
        </section>

        {/* Visión */}
        <section className="py-16 bg-[#f99db7] text-white">
          <div className="max-w-5xl px-6 mx-auto text-center">
            <h2 className="mb-4 text-3xl font-semibold">Our Vision</h2>
            <p className="text-md">
              To become the leading platform in the beauty industry,
              transforming how services are discovered, booked, and enjoyed
              across the globe.
            </p>
          </div>
        </section>

        {/* Sección de contenido + publicidad */}
        <section className="py-16 bg-white dark:bg-[#fff4f8]">
          <div className="flex flex-col max-w-6xl gap-8 px-6 mx-auto md:flex-row">
            <div className="flex-1">
              {/* Aquí van las secciones como Visión o Patrocinadores */}
              <h2 className="text-3xl font-semibold text-[#f46b44] mb-6">
                Destacados
              </h2>
              <p className="text-md">
                Conoce las últimas novedades en belleza, bienestar y servicios.
              </p>
            </div>
            <Advertising />
          </div>
        </section>

        {/* Patrocinadores con Carrousel */}
        <section className="py-16 bg-white dark:bg-[#fff4f8]">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="text-3xl font-semibold text-center text-[#f46b44] mb-8">
              Our Sponsors
            </h2>
            <Carrousel />
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
};

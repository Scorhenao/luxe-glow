import React from "react";
import { Navbar } from "./components/navbar";
import { Carrousel } from "./components/Carrousel";
import Footer from "./components/Footer";
import { Welcome } from "./components/Welcome";
import { AdvertisingLanding } from "./components/Advertising";

export const Landing = () => {
  return (
    <>
      <Navbar />
      <main className="w-full min-h-screen bg-[#fff4f8] text-gray-800 dark:bg-[#fff4f8] transition-colors duration-300">
        {/* Hero / Bienvenida */}
        <Welcome />

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
            <AdvertisingLanding />
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

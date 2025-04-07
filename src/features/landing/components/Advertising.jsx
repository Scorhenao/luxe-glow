import React from "react";

export const Advertising = () => {
  return (
    <aside className="w-full p-4 mt-10 bg-white rounded-lg shadow-lg md:w-64 md:mt-0">
      <h3 className="text-xl font-semibold text-[#f46b44] mb-4">Publicidad</h3>

      <div className="space-y-6">
        {/* Anuncio 1 */}
        <a href="#" className="block transition-opacity hover:opacity-90">
          <img
            src="/assets/imgs/ad1.jpg"
            alt="Anuncio 1"
            className="object-cover w-full h-40 rounded-lg"
          />
        </a>

        {/* Anuncio 2 */}
        <a href="#" className="block transition-opacity hover:opacity-90">
          <img
            src="/assets/imgs/ad2.jpg"
            alt="Anuncio 2"
            className="object-cover w-full h-40 rounded-lg"
          />
        </a>

        {/* Texto promocional */}
        <div className="bg-[#fff4f8] p-4 rounded-lg text-center border border-[#f46b44]">
          <p className="text-sm text-gray-700">
            💅 ¡Descubre nuestros productos exclusivos con 20% de descuento esta
            semana!
          </p>
        </div>
      </div>
    </aside>
  );
};

import React from "react";

export const ProductsAdvertising = () => {
  return (
    <>
      {/* Izquierda */}
      <aside className="fixed z-10 p-2 top-24 left-2 w-36 sm:p-4">
        <div className="bg-[#ffe4ec] text-[#f46b44] p-3 sm:p-4 rounded-xl shadow text-center text-xs sm:text-sm">
          <h4 className="mb-1 text-sm font-bold sm:mb-2 sm:text-base">
            💄 20% OFF
          </h4>
          <p>Lipsticks Today Only</p>
        </div>
      </aside>

      {/* Derecha */}
      <aside className="fixed z-10 p-2 top-24 right-2 w-36 sm:p-4">
        <div className="bg-[#fff1f5] text-[#f99db7] p-3 sm:p-4 rounded-xl shadow text-center text-xs sm:text-sm">
          <h4 className="mb-1 text-sm font-bold sm:mb-2 sm:text-base">
            🌟 Best Seller
          </h4>
          <p>Glow Foundation</p>
        </div>
      </aside>
    </>
  );
};

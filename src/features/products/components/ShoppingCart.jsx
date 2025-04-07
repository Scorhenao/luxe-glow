import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { HiArchiveBoxXMark } from "react-icons/hi2";
import { sendOrderToWhatsApp } from "../services/sendToWhatsApp";

export const ShoppingCart = ({ cartItems, onToggle, isOpen, onRemoveItem }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="fixed z-50 bottom-6 right-6">
      <button
        onClick={onToggle}
        className="relative bg-[#f99db7] hover:bg-[#ff5c8b] text-white p-3 rounded-full shadow-lg"
      >
        <FaShoppingCart size={20} />
        {cartItems.length > 0 && (
          <span className="absolute top-[-8px] right-[-8px] bg-white text-[#f46b44] text-xs font-bold px-2 py-0.5 rounded-full">
            {cartItems.length}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="p-4 mt-4 bg-white border border-gray-200 shadow-lg w-80 rounded-xl">
          <h3 className="text-lg font-semibold text-[#f46b44] mb-4">
            Your Cart
          </h3>
          {cartItems.length === 0 ? (
            <p className="text-gray-600">No items in cart.</p>
          ) : (
            <>
              <ul className="space-y-2">
                {cartItems.map((item, index) => (
                  <li key={index} className="flex items-center justify-between">
                    <span className="text-sm">{item.name}</span>
                    <span className="text-sm font-semibold">
                      ${item.price.toFixed(2)}
                    </span>
                    <HiArchiveBoxXMark
                      size={20}
                      className="text-[#f46b44] cursor-pointer"
                      onClick={() => onRemoveItem(index)}
                    />
                  </li>
                ))}
              </ul>
              <div className="border-t mt-4 pt-4 flex justify-between text-[#f46b44] font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button
                className="mt-4 w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-2 rounded-md transition"
                onClick={() => sendOrderToWhatsApp(cartItems)}
              >
                Pagar por WhatsApp
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

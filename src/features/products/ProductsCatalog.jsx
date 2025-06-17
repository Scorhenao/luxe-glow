import React, { useEffect, useState } from "react";
import { Navbar } from "../landing/components/navbar";
import { ShoppingCart } from "./components/ShoppingCart";
import { ProductsAdvertising } from "./components/ProductsAdvertising";
import { fetchProducts } from "./services/products.service";

export const ProductsCatalog = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  useEffect(() => {
    fetchProducts().then(setProducts).catch(console.error);
  }, []);
  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const handleRemoveItem = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };
  console.log(products);
  
  return (
    <>
      <Navbar />
      <ShoppingCart
        cartItems={cartItems}
        isOpen={cartOpen}
        onToggle={() => setCartOpen(!cartOpen)}
        onRemoveItem={handleRemoveItem}
      />

      <ProductsAdvertising />

      <section className="px-6 py-16 bg-[#fff4f8] min-h-screen">
        <div className="max-w-6xl px-6 mx-auto lg:px-24">
          <h2 className="text-3xl font-semibold text-[#f46b44] mb-10 text-center">
            Explore Our Products
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden transition duration-300 bg-white shadow-md rounded-xl hover:shadow-lg"
              >
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="object-cover w-full h-48"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-[#f46b44] mb-2">
                    {product.name}
                  </h3>
                  <p className="mb-2 text-sm text-gray-700">
                    {product.description}
                  </p>
                  <p className="font-bold text-[#f99db7] mb-2">
                    ${product.price}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-1.5 bg-[#f99db7] hover:bg-[#ff5c8b] text-white font-bold rounded-md transition-all duration-300 shadow"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

"use client";
import React from "react";
import { useFavorites } from "@/context/FavoritesContext";
import { FaRegHeart } from "react-icons/fa";

const Wishlist: React.FC = () => {
  const { favorites } = useFavorites(); 

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-semibold text-center mb-4">Your Wishlist</h2>
      {favorites.length === 0 ? (
        <p className="text-center text-gray-500">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {favorites.map((product) => (
            <div key={product.id} className="p-4 border rounded shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-72 object-cover mb-4"
                />
                <div className="absolute top-2 right-2 bg-white p-2 rounded-full">
                  <FaRegHeart className="text-red-500 text-xl" />
                </div>
              </div>
              <h3 className="text-sm font-medium text-gray-500 uppercase">
                {product.brand}
              </h3>
              <p className="text-md font-semibold text-gray-700">
                {product.title}
              </p>
              <p className="text-md text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;

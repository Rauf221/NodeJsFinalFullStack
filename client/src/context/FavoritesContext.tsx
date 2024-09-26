"use client";
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface Product {
  id: number;
  title: string;
  image: string;
  price: string;
  oldPrice?: string;
  brand: string;
  discount?: number;
  isNew?: boolean;
  isHot?: boolean;
  isSubscription?: boolean;
}

interface FavoritesContextType {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: number) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const savedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(savedFavorites);
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (product: Product) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(item => item.id === product.id);
      if (isAlreadyFavorite) return prevFavorites; // Prevent duplicates
      return [...prevFavorites, product]; // Add the new favorite
    });
  };

  const removeFavorite = (productId: number) => {
    setFavorites((prevFavorites) => prevFavorites.filter(product => product.id !== productId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

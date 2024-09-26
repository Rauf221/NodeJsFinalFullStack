"use client";
import React, { useState } from 'react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onAddProduct: (product: {
    label: string;
    title: string;
    price: number;
    oldPrice?: number;
    discount?: number;
    isNew?: boolean;
    isHot?: boolean;
    isSubscription?: boolean;
    image: string;
    hoverImage: string;
    brand: string;
  }) => void;
}

const AddProductModal: React.FC<Props> = ({ isOpen, onClose, onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({
    label: '',
    title: '',
    price: 0,
    oldPrice: 0,
    discount: 0,
    isNew: false,
    isHot: false,
    isSubscription: false,
    image: '',
    hoverImage: '',
    brand: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setNewProduct((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({
      label: '',
      title: '',
      price: 0,
      oldPrice: 0,
      discount: 0,
      isNew: false,
      isHot: false,
      isSubscription: false,
      image: '',
      hoverImage: '',
      brand: '',
    }); // Reset form
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-10 shadow-md w-[500px]">
        <h2 className="text-xl font-semibold text-center mb-6">Add Product</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="label"
            placeholder="Label"
            value={newProduct.label}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            required
          />
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newProduct.title}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            required
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={newProduct.price}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            required
          />
          <input
            type="number"
            name="oldPrice"
            placeholder="Old Price"
            value={newProduct.oldPrice}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            value={newProduct.discount}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
          />
          <label>
            <input
              type="checkbox"
              name="isNew"
              checked={newProduct.isNew}
              onChange={handleChange}
            />{' '}
            Is New
          </label>
          <label>
            <input
              type="checkbox"
              name="isHot"
              checked={newProduct.isHot}
              onChange={handleChange}
            />{' '}
            Is Hot
          </label>
          <label>
            <input
              type="checkbox"
              name="isSubscription"
              checked={newProduct.isSubscription}
              onChange={handleChange}
            />{' '}
            Is Subscription
          </label>
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={newProduct.image}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            required
          />
          <input
            type="text"
            name="hoverImage"
            placeholder="Hover Image URL"
            value={newProduct.hoverImage}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            required
          />
          <input
            type="text"
            name="brand"
            placeholder="Brand"
            value={newProduct.brand}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            required
          />
          <button type="submit" className="w-full py-2 bg-black text-white">
            Add Product
          </button>
        </form>
        <button onClick={onClose} className="mt-4 w-full py-2 border border-black text-black">
          Close
        </button>
      </div>
    </div>
  );
};

export default AddProductModal;

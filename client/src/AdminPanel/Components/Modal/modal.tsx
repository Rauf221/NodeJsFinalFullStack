// EditProductModal.tsx
import React, { useState, useEffect } from 'react';

interface EditProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: any; // Use a more specific type as needed
  onSave: (updatedProduct: any) => void; // Function to handle saving the edited product
}

const EditProductModal: React.FC<EditProductModalProps> = ({ isOpen, onClose, product, onSave }) => {
  const [formData, setFormData] = useState({ title: '', price: '', brand: '', image: '' });

  useEffect(() => {
    if (product) {
      setFormData({
        title: product.title,
        price: product.price,
        brand: product.brand,
        image: product.image,
      });
    }
  }, [product]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...product, ...formData }); // Pass updated product to parent
  };

  if (!isOpen) return null; // Don't render if not open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white p-6 rounded shadow-lg w-[500px]">
        <h2 className="text-2xl mb-4">Edit Product</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Price</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Brand</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Image URL</label>
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
              className="border rounded w-full p-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-red-500 text-white p-2 rounded mr-2">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductModal;

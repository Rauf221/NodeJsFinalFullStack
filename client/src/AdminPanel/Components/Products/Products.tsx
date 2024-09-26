"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import EditProductModal from "../Modal/modal";
import AddProductModal from "../Modal/modalForCreate";

const Products: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:2000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products", error);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (_id: string) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await axios.delete(`http://localhost:2000/api/products/${_id}`);
        setProducts(products.filter((product) => product._id !== _id));
      } catch (error) {
        console.error("Error deleting product", error);
      }
    }
  };

  const handleEdit = (product: any) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  const handleSave = async (updatedProduct: any) => {
    try {
      const response = await axios.put(
        `http://localhost:2000/api/products/${updatedProduct._id}`,
        updatedProduct
      );
      setProducts(
        products.map((product) =>
          product._id === updatedProduct._id ? response.data : product
        )
      );
      setIsEditModalOpen(false);
      setSelectedProduct(null);
    } catch (error) {
      console.error("Error updating product", error);
    }
  };

  const handleAddProduct = async (newProduct: any) => {
    try {
      const response = await axios.post(
        "http://localhost:2000/api/products",
        newProduct
      );
      setProducts([...products, response.data]);    
      setIsAddModalOpen(false);
    } catch (error) {
      console.error("Error adding product", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Products</h1>

      <table className="w-full bg-white shadow-md rounded-lg">
        <thead>
          <tr className="flex  justify-around gap-32">
            <th className="p-4">Title</th>
            <th className="p-4">Price</th>
            <th className="p-4">Brand</th>
            <th className="p-4">Image</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody className=" text-center ">
          {products.map((product: any) => (
            <tr
              className="flex  items-center  text-center gap-16 justify-around"
              key={product._id}
            >
              <td className="p-4">{product.title}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.brand}</td>
              <td className="p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-[50px] w-[50px] object-cover rounded"
                />
              </td>
              <td className="p-4 flex gap-2 ">
                <button
                  className="bg-blue-500 text-white p-2 rounded"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white p-2 rounded ml-2"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
                <button
                  className=" p-2 bg-black text-white rounded"
                  onClick={() => setIsAddModalOpen(true)}
                >
                  Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <EditProductModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        product={selectedProduct}
        onSave={handleSave}
      />

      <AddProductModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default Products;

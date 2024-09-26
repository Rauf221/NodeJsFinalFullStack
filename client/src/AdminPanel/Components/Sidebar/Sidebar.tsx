"use client";

import React from 'react';
import { FaTachometerAlt, FaUsers, FaTags, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

const Sidebar: React.FC = () => {
  return (
    <div className="h-[1000px] bg-black text-white w-[400px] p-4">
      <div className="mb-8">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav>
        <ul className="space-y-4">
          <li>
            <Link href="/dashboard" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaTachometerAlt />
              <span>Dashboard</span>
            </Link>
          </li>
          <li>
            <Link href="/users" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaUsers />
              <span>Users</span>
            </Link>
          </li>
          <li>
            <Link href="/products" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaTags />
              <span>Products</span>
            </Link>
          </li>
          <li>
            <Link href="/orders" className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded">
              <FaShoppingCart />
              <span>Orders</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

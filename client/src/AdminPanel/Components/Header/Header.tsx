"use client";

import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';
import { IoSearchOutline } from 'react-icons/io5';

const Header: React.FC = () => {
  return (
    <header className="bg-white w-[1200px] shadow-md flex justify-between items-center p-4">
      <div className="flex items-center space-x-4">
        <IoSearchOutline className="text-xl" />
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded-lg w-64"
        />
      </div>
      <div className="flex items-center space-x-6">
        <FaBell className="text-2xl cursor-pointer" />
        <FaUserCircle className="text-2xl cursor-pointer" />
      </div>
    </header>
  );
};

export default Header;

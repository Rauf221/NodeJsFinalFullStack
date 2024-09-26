"use client";

import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-4 gap-6">
        {/* Stat Boxes */}
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg">Total Users</h2>
          <p className="text-2xl font-bold">1,230</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg">Total Products</h2>
          <p className="text-2xl font-bold">530</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg">Total Orders</h2>
          <p className="text-2xl font-bold">350</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h2 className="text-lg">Revenue</h2>
          <p className="text-2xl font-bold">$12,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

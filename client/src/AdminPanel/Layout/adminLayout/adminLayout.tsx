import React from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';
import Header from '../../Components/Header/Header';

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar />

      <div className="w-full">
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main>{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;

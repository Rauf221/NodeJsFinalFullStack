import React from 'react';

import Products from '@/AdminPanel/Components/Products/Products';
import AdminLayout from '@/AdminPanel/Layout/adminLayout/adminLayout';


const ProductsPage: React.FC = () => {
  return (
    <AdminLayout>
      <Products />
    </AdminLayout>
  );
};

export default ProductsPage;

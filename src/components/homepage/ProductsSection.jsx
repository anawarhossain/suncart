'use client'
import React from 'react';
import ProductGrid from '../products/ProductGrid';
import useAllProducts from '@/lib/products';

const ProductsSection = () => {
    
  const { products, loading } = useAllProducts();

  const popular = products.slice(0, 4);
    return (
      <div>
        <ProductGrid products={popular} loading={loading} skeletonCount={4} />
      </div>
    );
};

export default ProductsSection;
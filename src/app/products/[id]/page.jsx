'use client'

import useAllProducts from '@/lib/products';
import { useParams } from 'next/navigation';
import React from 'react';

const ProductDetailsPage = () => {

    const { id } = useParams();
    console.log(id)

    const { products, loading, error } = useAllProducts();
    
    const product = products.find((p) => p.id === Number(id));
    console.log(product)

    


    return (
      <div>details</div>
    );
};

export default ProductDetailsPage;
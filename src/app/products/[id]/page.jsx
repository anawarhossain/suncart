"use client";

import ErrorMessage from "@/components/products/ErrorMessage";
import ProductCardSkeleton from "@/components/products/ProductCardSkeleton";
import StarRating from "@/components/products/StarRating";
import useAllProducts from "@/lib/products";
import { RefreshCcw, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React from "react";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const { products, loading, error } = useAllProducts();

  const product = React.useMemo(() => {
    return products.find((p) => p.id === Number(id));
  }, [products, id]);

  // Loading state
  if (loading) {
    return (
      <main className="min-h-screen bg-linear-to-b from-amber-50 to-white flex items-center justify-center">
        <ProductCardSkeleton />
      </main>
    );
  }

  // Error state
  if (error) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <ErrorMessage message={error} />
      </main>
    );
  }

  // Not found
  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <ErrorMessage message="Product not found!" />
      </main>
    );
  }

  return (
    <main className="bg-linear-to-b from-amber-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT: IMAGE */}
          <div className="space-y-4">
            <div className="rounded-2xl overflow-hidden shadow-lg border">
              <Image
                width={600}
                height={600}
                src={product?.image || null}
                alt={product.name}
                className="w-full h-[450px] object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Category badge */}
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 text-xs font-bold rounded-full">
              {product.category}
            </span>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-6">
            {/* Title & Brand */}
            <div>
              <p className="text-sm text-gray-500 font-semibold">
                {product.brand}
              </p>
              <h1 className="text-4xl font-extrabold text-gray-900">
                {product.name}
              </h1>

              <div className="flex items-center gap-2 mt-2">
                <StarRating rating={product.rating} />
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-4xl font-black text-amber-600">
                ${product.price}
              </span>
              <span className="text-sm text-green-600 font-semibold">
                {product.stock > 0 ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            {/* Stock bar */}
            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
              <div
                className="bg-amber-500 h-full"
                style={{ width: `${product.stock * 10}%` }}
              />
            </div>
            <p className="text-xs text-gray-500">
              Only {product.stock} items left
            </p>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col gap-3">
              <button className="w-full py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-xl shadow-md flex items-center justify-center gap-2 transition">
                <ShoppingCart size={20} /> Add to Cart
              </button>

              <button className="w-full py-4 bg-black text-white font-bold rounded-xl shadow-md hover:opacity-90 transition">
                Buy Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-3 gap-4 pt-4 text-center">
              <div>
                <Truck className="mx-auto text-amber-500" />
                <p className="text-xs font-semibold mt-1">Free Shipping</p>
              </div>

              <div>
                <ShieldCheck className="mx-auto text-amber-500" />
                <p className="text-xs font-semibold mt-1">2 Year Warranty</p>
              </div>

              <div>
                <RefreshCcw className="mx-auto text-amber-500" />
                <p className="text-xs font-semibold mt-1">Easy Returns</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetailsPage;

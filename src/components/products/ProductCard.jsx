"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import StarRating from "./StarRating";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80";

const ProductCard = ({ product }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-amber-100 hover:border-amber-300 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative overflow-hidden h-56 bg-amber-50">
        <Image
          width={500}
          height={500}
          src={imgError ? FALLBACK_IMAGE : product.image}
          alt={product.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <span className="absolute top-3 left-3 bg-amber-400 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full">
          {product.category}
        </span>
        {product.stock <= 10 && (
          <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Only {product.stock} left
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-amber-600 font-semibold uppercase tracking-wider mb-1">
          {product.brand}
        </p>
        <h3 className="text-gray-800 font-bold text-base leading-snug mb-2 line-clamp-2 flex-1">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm line-clamp-2 mb-3">
          {product.description}
        </p>

        <StarRating rating={product.rating} />

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-extrabold text-orange-500">
            ${product.price}
          </span>
          <Link
            href={`/products/${product.id}`}
            className="bg-amber-400 hover:bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors duration-200 shadow-sm hover:shadow-md"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

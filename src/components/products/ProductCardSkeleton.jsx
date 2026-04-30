import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-amber-100 animate-pulse">
      <div className="bg-gray-200 h-56 w-full" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-200 rounded w-1/3" />
        <div className="h-5 bg-gray-200 rounded w-3/4" />
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-2/3" />
        <div className="flex justify-between items-center pt-2">
          <div className="h-6 bg-gray-200 rounded w-1/4" />
          <div className="h-9 bg-gray-200 rounded-xl w-1/3" />
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;

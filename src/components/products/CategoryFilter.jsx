"use client";
import React from "react";

const CategoryFilter = ({ categories, activeFilter, onFilterChange }) => {
  return (
    <div className="">
      <div className="flex flex-wrap gap-2 justify-center items-center mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onFilterChange(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 border ${
              activeFilter === cat
                ? "bg-amber-400 text-white border-amber-400 shadow-md"
                : "bg-white text-gray-600 border-gray-200 hover:border-amber-400 hover:text-amber-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;

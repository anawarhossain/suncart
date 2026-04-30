"use client";
import CategoryFilter from "@/components/products/CategoryFilter";
import ErrorMessage from "@/components/products/ErrorMessage";
import ProductGrid from "@/components/products/ProductGrid";
import SectionHeading from "@/components/sheard/SectionHeading";
import useAllProducts from "@/lib/products";
import { useState, useMemo } from "react";

const ProductsPage = () => {
  const { products, loading, error } = useAllProducts();
  const [activeFilter, setActiveFilter] = useState("All");

  // Build category list dynamically
  const categories = useMemo(
    () => ["All", ...new Set(products.map((p) => p.category))],
    [products],
  );

  // Filter products
  const filtered = useMemo(
    () =>
      activeFilter === "All"
        ? products
        : products.filter((p) => p.category === activeFilter),
    [products, activeFilter],
  );
  console.log(products, "--products--");
  const title = "All Summer Products";
  const subtitle =
    "Curated essentials for your perfect coastal escape, from sun-drenched apparel to premium seaside accessories.";
  return (
    <div className="py-16 px-4 bg-linear-to-b from-amber-50 to-white min-h-screen">
      <div className="container mx-auto">
        <SectionHeading title={title} subtitle={subtitle} />
        <div>
          {!loading && !error && (
            <CategoryFilter
              categories={categories}
              activeFilter={activeFilter}
              onFilterChange={setActiveFilter}
            />
          )}
        </div>
        <div>
          {error ? (
            <ErrorMessage message={error} />
          ) : (
            <ProductGrid
              products={filtered}
              loading={loading}
              skeletonCount={8}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;

"use client";
import HeroSection from "@/components/heroSection/HeroSection";
import ProductGrid from "@/components/products/ProductGrid";
import SectionHeading from "@/components/sheard/SectionHeading";
import TipsSection from "@/components/tipsSection/TipsSection";
import useAllProducts from "@/lib/products";

export default function Home() {
  const { products, loading } = useAllProducts();

  const popular = products.slice(0, 4);
  const badge = "Summer Collection";
  const title = "🔥 Popular This Summer";
  const subtitle =
    "Curated essentials for your perfect coastal escape, from sun-drenched apparel to premium seaside accessories.";

  return (
    <div>
      <div className="space-y-8">
        <HeroSection />

        <div className="">
          <SectionHeading badge={badge} title={title} subtitle={subtitle} />
          <ProductGrid products={popular} loading={loading} skeletonCount={4} />
        </div>
        <div>
          <TipsSection />
        </div>
      </div>
    </div>
  );
}

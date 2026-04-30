"use client";
import Brand from "@/components/brand/Brand";
import HeroSection from "@/components/heroSection/HeroSection";
import ProductGrid from "@/components/products/ProductGrid";
import SectionHeading from "@/components/sheard/SectionHeading";
import TipsSection from "@/components/tipsSection/TipsSection";
import useAllProducts from "@/lib/products";
import Link from "next/link";
import { BiRightArrowAlt } from "react-icons/bi";

export default function Home() {
  const { products, loading } = useAllProducts();

  const popular = products.slice(0, 4);
  const badge = "Summer Collection";
  const title = "🔥 Popular This Summer";
  const subtitle =
    "Curated essentials for your perfect coastal escape, from sun-drenched apparel to premium seaside accessories.";

  return (
    <div>
      <div className="">
        <HeroSection />

        <div className="bg-amber-50 py-10">
          <SectionHeading badge={badge} title={title} subtitle={subtitle} />
          <div className="container mx-auto">
            <Link
              className="flex items-center justify-end gap-1 text-lg font-bold pb-4"
              href={"/products"}
            >
              Viwe All <BiRightArrowAlt />
            </Link>
          </div>
          <div className="">
            <ProductGrid
              products={popular}
              loading={loading}
              skeletonCount={4}
            />
          </div>
        </div>
        <div className="bg-[#fff1e5] py-10">
          <TipsSection />
        </div>
        <div>
          <Brand />
        </div>
      </div>
    </div>
  );
}

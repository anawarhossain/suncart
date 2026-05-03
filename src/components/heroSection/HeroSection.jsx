import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import MarqueeHero from "./MarqueeHero";

const HeroSection = () => {
  return (
    <div className="relative bg-linear-to-br from-amber-500 to-orange-500">
      {/* Background image */}
      <div className="absolute inset-0 opacity-10">
        <Image
          priority
          fill
          alt="Beach Background"
          className="object-cover"
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000"
        />
      </div>

      {/* Hero content */}
      <section className="container mx-auto min-h-125 md:h-150 flex items-center py-12 md:py-0">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 w-full">
          {/* Left — Text */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
              Your Summer, Elevated ☀️
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-lg mx-auto md:mx-0">
              Discover the curated collection of premium essentials designed for
              your most vibrant season yet. From coastal escapes to city rooftop
              sun-soaking.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                href="/products"
                className="px-8 py-4 bg-white text-orange-500 font-bold rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all active:scale-95"
              >
                Shop Now
              </Link>
              <button className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all">
                View Lookbook
              </button>
            </div>
          </div>

          {/* Right — Image card */}
          <div className="hidden md:flex justify-end order-first md:order-last">
            <div className="relative w-full max-w-[320px] lg:max-w-sm aspect-square rounded-3xl overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 p-4 rotate-3 shadow-2xl">
              <Image
                priority
                width={300}
                height={300}
                alt="Summer Essentials"
                className="w-full h-full object-cover rounded-2xl"
                src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?auto=format&fit=crop&q=80&w=800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Marquee strip */}
      <div className="w-full bg-orange-500 text-white py-3 overflow-hidden whitespace-nowrap border-y border-amber-400/20">
        <Marquee>
          <MarqueeHero />
        </Marquee>
      </div>
    </div>
  );
};

export default HeroSection;

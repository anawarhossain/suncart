import { Droplets, Leaf, Sun, Umbrella } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
      <div>
        <main
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="grow flex flex-col items-center justify-center px-6 py-20 text-center bg-surface"
        >
          <div className="relative mb-12">
            <div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-[120px] sm:text-[180px] font-black text-amber-500/10 leading-none select-none"
            >
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Umbrella size={80} className="text-secondary animate-bounce" />
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-on-surface mb-4">
            Lost at Sea? 🌊
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mx-auto mb-10">
            The page you&lsquo;re looking for seems to have drifted away with
            the tide. Let&lsquo;s get you back to the shore.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={"/"}
              className="px-8 py-4 bg-primary text-white font-bold rounded-xl shadow-lg hover:bg-on-primary-fixed-variant transition-all flex items-center justify-center gap-2"
            >
              Back to Home
            </Link>
            <Link
              href={"/products"}
              className="px-8 py-4 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all"
            >
              Browse Products
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 opacity-20 md:flex">
            <Sun size={48} />
            <Droplets size={48} />
            <Leaf size={48} />
          </div>
        </main>
      </div>
    );
};

export default NotFoundPage;
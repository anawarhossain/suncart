import React from 'react';

const Brand = () => {
    return (
      <div>
        <section className="container mx-auto px-6 py-20">
          <h3 className="text-center text-sm font-semibold text-on-surface-variant tracking-[0.2em] uppercase mb-12 italic">
            Trusted By World-Class Resorts & Travelers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 opacity-40">
            {["COAST", "SOLARE", "AQUA", "NOMAD"].map((brand) => (
              <div
                key={brand}
                className="flex items-center justify-center h-24 bg-white rounded-xl border border-amber-50 hover:border-amber-200 transition-all cursor-pointer grayscale"
              >
                <span className="font-display text-3xl font-black text-slate-300">
                  {brand}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
};

export default Brand;
import React from "react";

const MarqueeHero = () => {
  return (
    <>
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="flex justify-center items-center gap-12">
          <div className="flex items-center gap-2">
            <span>🔥 Summer Sale — Up to 50% OFF</span>
            <span className="w-1 h-1 bg-white rounded-full mr-15"></span>
            <span>Free Shipping on orders over $50</span>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarqueeHero;

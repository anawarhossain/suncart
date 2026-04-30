import React from "react";

const SectionHeading = ({ badge, title, subtitle }) => {
  return (
    <div className="text-center">
      {badge && (
        <span className="inline-block bg-amber-100 text-amber-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
          {badge}
        </span>
      )}
      <h2 className="text-4xl font-extrabold text-gray-800 mb-3">{title}</h2>
      {subtitle && (
        <p className="text-gray-500 text-base max-w-xl mx-auto">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;

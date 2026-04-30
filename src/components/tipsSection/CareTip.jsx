import React from "react";

const CareTip = ({ icon, title, desc, bgColor }) => {
  return (
    <div>
      <div className="bg-[#f1e6da] p-8 rounded-2xl flex flex-col items-center text-center group hover:bg-white transition-colors">
        <div
          className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
        >
          {icon}
        </div>
        <h4 className="font-display text-xl font-bold mb-2">{title}</h4>
        <p className="text-sm text-on-surface-variant">{desc}</p>
      </div>
    </div>
  );
};

export default CareTip;

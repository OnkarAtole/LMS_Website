import React from "react";

const ServiceCard = ({ title, desc }) => {
  return (
    <div className="bg-white group border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all">
      <div className="mb-4">
        <div className="h-12 w-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center font-bold text-xl">
          •
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-4">
        {desc}
      </p>
      <button className="text-blue-600 font-medium hover:underline">
        Learn More →
      </button>
    </div>
  );
};

export default ServiceCard;

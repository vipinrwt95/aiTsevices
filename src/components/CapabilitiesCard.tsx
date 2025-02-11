import React from "react";
import { FaRocket } from "react-icons/fa"; // Icons

const CapabilitiesCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-2 flex flex-col justify-between transition-transform transform hover:scale-105 duration-300 ease-in-out relative overflow-hidden group">
      <div className="flex items-center ">
        <h3 className="text-lg font-semibold">Our Capabilities</h3>
      </div>
      <h2 className="text-xl font-bold text-gray-900">Your Business Goals Are Our Top Priority</h2>
      <p className=" text-gray-500">
        Our specialty is creating unique IT solutions that boost your company's productivity. Our passionate staff is committed to boosting your operational efficiency and propelling business success, offering everything from cutting-edge software development to solid IT advice and all in between.
      </p>

      {/* Dots Animation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-300"></div>
        <div className="w-2 h-2 bg-orange-500 rounded-full animate-bounce delay-400"></div>
      </div>

      {/* Moving Rocket Animation */}
      <FaRocket className="absolute top-2 left-1 text-orange-500 text-4xl animate-rocket" />
    </div>
  );
};

export default CapabilitiesCard;
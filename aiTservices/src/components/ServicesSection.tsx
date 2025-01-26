import React from "react";
import { FaPlayCircle, FaInfoCircle, FaCode, FaRocket, FaCogs, FaMobileAlt } from "react-icons/fa"; // Icons
import CapabilitiesCard from "./CapabilitiesCard";
const ServicesSection: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

      {/* Left Side: Company Goals */}
      {/* <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="flex items-center mb-4">
          <FaRocket className="text-orange-500 text-3xl mr-3" />
          <h3 className="text-lg font-semibold">Our Capabilities</h3>
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Your Business Goals Are Our Top Priority</h2>
        <p className="mt-4 text-gray-600">
          Our specialty is creating unique IT solutions that boost your company's productivity. Our passionate staff is committed to boosting your operational efficiency and propelling business success, offering everything from cutting-edge software development to solid IT advice and all in between.
        </p>
      </div> */}
      <CapabilitiesCard/>

      {/* Right Side: Services Offered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaMobileAlt className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Application Development</h3>
          <p className="text-gray-600">Custom Mobile Application Developement services.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaCogs className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Web Development</h3>
          <p className="text-gray-600">Custom websites built to enhance functionality, performance, and user engagement.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaCode className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">UI/UX Design</h3>
          <p className="text-gray-600">Creating intuitive and visually appealing designs that prioritize user experience.
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaRocket className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Software Development</h3>
          <p className="text-gray-600">High-performance software solutions designed to meet your business needs.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaCogs className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Technology Consulting</h3>
          <p className="text-gray-600">Expert advice and strategies from seasoned professionals to drive your digital transformation.
          </p>
        </div>
      </div>

    </div>
  );
};

export default ServicesSection;
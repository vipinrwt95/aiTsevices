import React from "react";
import { FaCode, FaRocket, FaCogs, FaMobileAlt } from "react-icons/fa"; // Icons
import { Link } from "react-router-dom"; // Import Link for navigation
import CapabilitiesCard from "./CapabilitiesCard";

const ServicesSection: React.FC = () => {
  return (
    <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <CapabilitiesCard />

      {/* Right Side: Services Offered */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <Link to="/services/application-development" className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaMobileAlt className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Application Development</h3>
          <p className="text-gray-600">Custom Mobile Application Development services.</p>
        </Link>

        <Link to="/services/web-development" className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaCogs className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Web Development</h3>
          <p className="text-gray-600">Custom websites built to enhance functionality, performance, and user engagement.</p>
        </Link>

        <Link to="/services/ui-ux-design" className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaCode className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">UI/UX Design</h3>
          <p className="text-gray-600">Creating intuitive and visually appealing designs that prioritize user experience.</p>
        </Link>

        <Link to="/services/software-development" className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaRocket className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Software Development</h3>
          <p className="text-gray-600">High-performance software solutions designed to meet your business needs.</p>
        </Link>

        <Link to="/services/technology-consulting" className="bg-white rounded-2xl shadow-lg p-4 flex flex-col items-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
          <FaCogs className="text-orange-500 text-4xl mb-2" />
          <h3 className="font-bold text-lg">Technology Consulting</h3>
          <p className="text-gray-600">Expert advice and strategies from seasoned professionals to drive your digital transformation.</p>
        </Link>
      </div>
    </div>
  );
};

export default ServicesSection;
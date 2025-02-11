import React from "react";
import { FaPlayCircle, FaInfoCircle } from "react-icons/fa"; // Icons

const GridSection: React.FC = () => {
  return (
    <div className="container mx-auto p-3 grid grid-cols-1 md:grid-cols-2 gap-6">
      
      {/* Card 1 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <div className="relative w-full h-48 rounded-lg overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8b2ZmaWNlJTIwbWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" 
            alt="Play Video"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg text-white text-xl font-bold">
            <FaPlayCircle className="mr-2" /> Play Video
          </button>
        </div>
        <p className="mt-3 font-semibold text-lg">How Does We Function?</p>
      </div>

      {/* Card 2 */}
      <div className="bg-black text-white rounded-2xl shadow-lg p-6 flex flex-col justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-5xl font-bold mb-2">
          95<span className="text-orange-500">+</span>
        </h2>
        <h3 className="text-xl font-semibold mb-4">
          Unlock your business potential with aiTservices
        </h3>
        <p className="mb-4 text-sm">
          Join with us to take advantage of technology's potential and prepare
          for a digital future.
        </p>
        <a
          href="#"
          className="text-orange-500 font-bold underline hover:text-orange-600 transition duration-300 ease-in-out"
        >
          Learn More <FaInfoCircle className="inline ml-1" />
        </a>
      </div>

    </div>
  );
};

export default GridSection;
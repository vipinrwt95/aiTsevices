import React from "react";
import { FaPlayCircle, FaInfoCircle, FaCode } from "react-icons/fa"; // Icons

const GridSection: React.FC = () => {
  return (
    <div className="container mx-auto p-3 grid grid-cols-1 md:grid-cols-3 gap-6">
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
        <p className="mt-3 font-semibold text-lg">How Does It Work?</p>
      </div>

      {/* Card 2 */}
      <div className="bg-black text-white rounded-2xl shadow-lg p-6 flex flex-col justify-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-5xl font-bold mb-2">
          95<span className="text-orange-500">+</span>
        </h2>
        <h3 className="text-xl font-semibold mb-4">
          Unlock your business potential with Suprix
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

      {/* Card 3 */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col items-center relative p-4 transition-transform transform hover:scale-105 duration-300 ease-in-out">
        <img
          src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?cs=srgb&dl=pexels-fauxels-3184639.jpg&fm=jpg"
          alt="Services"
          className="w-full h-48 object-cover rounded-lg"
        />
        <div className="absolute bottom-4 left-4 flex gap-2">
          <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
            App development
          </span>
          <span className="bg-gray-200 text-gray-800 px-4 py-1 rounded-full text-sm">
            Web development
          </span>
          <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm">
            More...
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-black bg-opacity-60 text-white rounded-full p-2">
          <FaCode />
        </div>
      </div>
    </div>
  );
};

export default GridSection;

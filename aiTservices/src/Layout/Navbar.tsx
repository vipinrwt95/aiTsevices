import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <img width="200" height="75" src="https://suprixsolution.in/wp-content/uploads/2024/10/mainLogo.svg" alt="Main logo" decoding="async" />
            <div>
              {/* <h1 className="text-xl font-bold">SUPRIX SOLUTION</h1>
              <span className="text-sm text-gray-500">IT Services and Technology</span> */}
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-orange-500 font-bold px-3 py-2 rounded-md bg-orange-100">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2">
              About us
            </a>
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 px-3 py-2 flex items-center">
                Services <span className="ml-1">+</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Service 2
                </a>
              </div>
            </div>
            <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2">
              Blogs
            </a>
            <a href="#" className="text-gray-700 hover:text-orange-500 px-3 py-2">
              Contact us
            </a>
          </div>
          {/* Social Media Section */}
          <div className="hidden md:flex space-x-4 items-center">
            <span className="text-gray-700">Our Social Media</span>
            <div className="border-l border-gray-300 h-12"></div>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50">
          <button
           onClick={toggleMobileMenu}
            className="absolute top-4 right-4 text-gray-500 hover:text-orange-500 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="p-4 space-y-2">
            <a href="#" className="block text-orange-500 font-bold px-3 py-2 bg-orange-100">
              Home
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 px-3 py-2">
              About us
            </a>
            <div>
              <button className="block text-gray-700 hover:text-orange-500 px-3 py-2">
                Services
              </button>
              <div className="ml-4 space-y-1">
                <a
                  href="#"
                  className="block text-sm text-gray-700 hover:bg-gray-100 px-3 py-1"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block text-sm text-gray-700 hover:bg-gray-100 px-3 py-1"
                >
                  Service 2
                </a>
              </div>
            </div>
            <a href="#" className="block text-gray-700 hover:text-orange-500 px-3 py-2">
              Blogs
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 px-3 py-2">
              Contact us
            </a>
          </div>
        </div>
      )}
      </div>
    </nav>
  );
};

export default Navbar;

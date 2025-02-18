import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  console.log(isMobileMenuOpen)

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          {/* Logo Section */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-orange-500">aiTservices.coms</h1>
            <h2>Idea to Product</h2>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-orange-500 font-semibold hover:text-orange-600">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-500">
              About
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-orange-500 flex items-center">
                Services <span className="ml-1 text-sm">▼</span>
              </button>
              <div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                >
                  Service 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-gray-700 hover:bg-orange-100"
                >
                  Service 2
                </a>
              </div>
            </div>
            <Link to="/teams" className="text-gray-700 hover:text-orange-500">
              Teams
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-500">
              Contact Us
            </Link >
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-500 hover:text-orange-500 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-white shadow-lg z-50">
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
            <div className="p-6 space-y-4">
              <a
                href="#"
                className="block text-orange-500 font-bold hover:bg-orange-100 px-4 py-2 rounded-md"
              >
                Home
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 px-4 py-2"
              >
                About Us
              </a>
              <div>
                <button className="block text-gray-700 hover:text-orange-500 px-4 py-2">
                  Services
                </button>
                <div className="ml-4 space-y-2">
                  <a
                    href="#"
                    className="block text-sm text-gray-700 hover:bg-orange-100 px-3 py-1"
                  >
                    Service 1
                  </a>
                  <a
                    href="#"
                    className="block text-sm text-gray-700 hover:bg-orange-100 px-3 py-1"
                  >
                    Service 2
                  </a>
                </div>
              </div>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 px-4 py-2"
              >
                Blogs
              </a>
              <a
                href="#"
                className="block text-gray-700 hover:text-orange-500 px-4 py-2"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

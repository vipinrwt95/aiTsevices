import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/" className="flex items-center">
          <span className="self-left text-2xl font-semibold whitespace-nowrap text-orange-500">
            aiTservices
          </span>
        </NavLink>
        <button
          onClick={toggleDropdown}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-800 rounded-lg md:hidden hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-800 rounded-lg bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-500"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-500"
                  }`
                }
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-500"
                  }`
                }
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/pricing"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-500"
                  }`
                }
              >
                Teams
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${
                    isActive
                      ? "text-orange-500"
                      : "text-gray-800 hover:bg-orange-100 md:hover:bg-transparent md:hover:text-orange-500"
                  }`
                }
              >
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

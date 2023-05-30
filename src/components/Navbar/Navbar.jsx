import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mt-8 p-2 flex flex-col justify-center items-center md:flex-row lg: ml-8">
      <Link to={"/"}>
        <h1 className=" md:text-xl lg:text-3xl mb-4 text-3xl text-center font-extrabold  tracking-[1rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
          MAKE COCKTAIL
        </h1>
      </Link>
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 md:px-0">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start sm:flex-col">
            <div className="flex-shrink-0 flex  items-center "></div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex  justify-center items-center">
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    isActive
                      ? "m-12 tracking-wide text-pink-700 hover:text-pink-900 md:text-sm lg:text-lg"
                      : "m-12 tracking-wide hover:text-pink-900 md:text-sm lg:text-lg"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to={"/cocktails"}
                  className={({ isActive }) =>
                    isActive
                      ? "m-12 tracking-wide text-pink-700 hover:text-pink-900 md:text-sm lg:text-lg"
                      : "m-12 tracking-wide hover:text-pink-900 md:text-sm lg:text-lg"
                  }
                >
                  Cocktails
                </NavLink>
                <NavLink
                  to={"/ingredients"}
                  className={({ isActive }) =>
                    isActive
                      ? "m-12 tracking-wide text-pink-700 hover:text-pink-900 md:text-sm lg:text-lg"
                      : "m-12 tracking-wide hover:text-pink-900 md:text-sm lg:text-lg"
                  }
                >
                  Ingredients
                </NavLink>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="block h-6 w-6 "
                  xmlns="http://www.w3.org/2000/svg"
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
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className=" flex flex-col">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? " mx-12 tracking-wide text-pink-700 hover:text-pink-900"
                  : " mx-12 tracking-wide hover:text-pink-900"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/cocktails"}
              className={({ isActive }) =>
                isActive
                  ? "mx-12 tracking-wide text-pink-700 hover:text-pink-900"
                  : "mx-12 tracking-wide hover:text-pink-900"
              }
            >
              Cocktails
            </NavLink>
            <NavLink
              to={"/ingredients"}
              className={({ isActive }) =>
                isActive
                  ? "mx-12 tracking-wide text-pink-700 hover:text-pink-900"
                  : "mx-12 tracking-wide hover:text-pink-900"
              }
            >
              Ingredients
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

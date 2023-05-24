import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 p-16">
      <div>
        <Link to={"/"}>
          <h1 className="text-3xl  font-extrabold  tracking-[1rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            MAKE COCKTAIL
          </h1>
        </Link>
      </div>

      <nav>
        <ul>
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive
                ? "m-12 tracking-wide text-pink-700 hover:text-pink-900"
                : "m-12 tracking-wide hover:text-pink-900"
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/cocktails"}
            className={({ isActive }) =>
              isActive
                ? "m-12 tracking-wide text-pink-700 hover:text-pink-900"
                : "m-12 tracking-wide hover:text-pink-900"
            }
          >
            Cocktails
          </NavLink>
          <NavLink
            to={"/ingredients"}
            className={({ isActive }) =>
              isActive
                ? "m-12 tracking-wide text-pink-700 hover:text-pink-900"
                : "m-12 tracking-wide hover:text-pink-900"
            }
          >
            Ingredients
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 p-16 ">
      <div>
        <NavLink to={"/"}>
          <h1 className="text-3xl  font-extrabold  tracking-[1rem] text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
            MAKE COCTAIL
          </h1>
        </NavLink>
      </div>

      <nav>
        <ul>
          <NavLink className="m-12 tracking-wide">Home</NavLink>
          <NavLink className="m-12 tracking-wide">Coctails</NavLink>
          <NavLink className="m-12 tracking-wide">Ingredients</NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;

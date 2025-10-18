import React from "react";
import { NavLink } from "react-router";

const Nav = () => {
  const nav = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            `font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/tv"}
          className={({ isActive }) =>
            `font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          Tv
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/career"}
          className={({ isActive }) =>
            `font-semibold text-sm px-4 py-2 rounded-xl transition-all duration-300 ${
              isActive
                ? "bg-orange-500 text-white shadow-md"
                : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
            }`
          }
        >
          Career
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="my-12">
      <ul className="nav flex gap-x-3">{nav}</ul>
    </div>
  );
};

export default Nav;

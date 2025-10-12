import React from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const nav = [
    <li>
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-semibold transition-all duration-300
     ${
       isActive
         ? "bg-orange-500 text-white shadow-md"
         : "text-gray-700 hover:bg-orange-100"
     }`
        }
      >
        Home
      </NavLink>
    </li>,
    <li>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `px-4 py-2 rounded-lg font-semibold transition-all duration-300
     ${
       isActive
         ? "bg-orange-500 text-white shadow-md"
         : "text-gray-700 hover:bg-orange-100"
     }`
        }
      >
        About
      </NavLink>
    </li>,
  ];
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {nav}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{nav}</ul>
        </div>
        <div className="navbar-end gap-x-1">
          <Link to={"/singIn"} className="btn btn-success">
            Sing In
          </Link>
          <Link to={"/singUp"} className="btn btn-secondary">
            Sing Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

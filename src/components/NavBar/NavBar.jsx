import { Link, NavLink, useNavigate } from "react-router";
import useGetAuth from "../../Hooks/useGetAuth";
import { auth } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
  const { user, handleSingOut } = useGetAuth();

  const navigate = useNavigate();
  const handleSingOutButton = () => {
    handleSingOut(auth).then(() => {
      navigate("/singIn");
    });
  };
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
          {user ? (
            <div className="flex gap-x-2 items-center">
              <p> {user.displayName}</p>
              <img
                className="w-12 h-12 rounded-full"
                src={user?.photoURL}
                alt=""
              />
              <button className="btn btn-warning" onClick={handleSingOutButton}>
                Sing out
              </button>
            </div>
          ) : (
            <>
              <Link to={"/singIn"} className="btn btn-success">
                Sing In
              </Link>
              <Link to={"/singUp"} className="btn btn-secondary">
                Sing Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

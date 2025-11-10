import { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init.js/firebase.init";


const Navbar = () => {
  const { user } = use(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allProducts">All Products</NavLink>
      </li>
      {
        user && <>
         <NavLink to="/">My Products</NavLink> <NavLink to="/allProducts">My Bids</NavLink>
        </>
      }
    </>
  );
  return (
    <div className="navbar shadow-sm text-primary bg-[#baf381]">
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
              {" "}
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
            {links}
          </ul>
        </div>
         <Link to="/" className="flex items-center gap-2 text-xl font-semibold"><div className="flex items-center space-x-2">
          <img
            className="h-8 sm:h-10 w-auto"
            src="/freepik-hand-drawn-linear-known-academy-logo-202511081639166U46.png"
            alt="StudyMate Logo"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">
            Study<span className="font-light">Mate</span>
          </h1>
        </div></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <a onClick={() => signOut(auth)} className="btn">
            SignOut
          </a>
        ) : (
          <>
            <NavLink to="/login" className="btn">
              Login
            </NavLink>
            <NavLink to="/register" className="btn ml-2">
              Register
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;

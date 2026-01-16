import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, NavLink, useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../firebase.init.js/firebase.init";
import toast from "react-hot-toast";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // Theme state
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  // Logout
  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed! Please try again.");
    }
  };

  // Navbar links
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/FindPartner">Find Partner</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/dashboard/overview">Dashboard</NavLink>
          </li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar shadow-sm text-primary bg-[#fef3c7] fixed top-0 left-0 w-full p-4 z-50">
      {/* Start */}
      <div className="navbar-start gap-2">
        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#fef3c7] rounded-box w-52"
          >
            {links}
          </ul>
        </div>

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <img className="h-10 w-auto" src="/logo.png" alt="StudyMate Logo" />
          <h1 className="hidden md:flex text-xl font-semibold">
            Study<span className="font-light">Mate</span>
          </h1>
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* End */}
      <div className="navbar-end flex items-center gap-3">
        {/* Theme Toggle */}
        <input
          onChange={(e) => handleTheme(e.target.checked)}
          type="checkbox"
          defaultChecked={theme === "dark"}
          className="toggle"
        />

        {user ? (
          <>
            {/* Avatar */}
            <div className="relative group cursor-pointer">
              <img
                src={user.photoURL || "/avatar-placeholder.png"}
                alt="avatar"
                className="w-10 h-10 rounded-full object-cover border border-gray-300"
              />
              <div className="absolute left-1/2 -translate-x-1/2 mt-1 hidden group-hover:block bg-white text-black border text-sm px-2 py-1 rounded shadow z-50">
                {user.displayName}
              </div>
            </div>

            {/* Logout */}
            <button
              onClick={handleLogout}
              className="border border-primary text-primary hover:bg-primary hover:text-white px-3 py-1 rounded transition"
            >
              Logout
            </button>
          </>
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

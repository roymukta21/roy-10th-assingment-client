import { NavLink } from "react-router";
import {
  FiHome,
  FiUser,
  FiEdit,
  FiBarChart2,
  FiUsers,
  FiSettings,
  FiX,
} from "react-icons/fi";

const DashboardSidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const links = [
    { name: "Overview", path: "/dashboard/Overview", icon: <FiHome /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FiUser /> },
   // { name: "Edit Profile", path: "/dashboard/EditProfile", icon: <FiEdit /> },
    { name: "MyConnection", path: "/dashboard/MyConnection", icon: <FiUsers /> },
    { name: "Analytics", path: "/dashboard/analytics", icon: <FiBarChart2 /> },
    { name: "Home", path: "/", icon: <FiHome /> },
  ];

  return (
    <>
      {/* Overlay for small screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden transition-opacity ${
          sidebarOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setSidebarOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
       className={`fixed top-0 left-0 
        w-[100vw] md:w-64 
        bg-white dark:bg-gray-800 shadow-lg p-4 
        z-[9999]
        transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-[-100vw]"} 
        md:translate-x-0 md:static md:block`}

      >
        {/* Close button (only for small screens) */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            Dashboard
          </h2>
          <button
            className="text-2xl text-gray-700 dark:text-gray-200"
            onClick={() => setSidebarOpen(false)}
          >
            <FiX />
          </button>
        </div>

        {/* Desktop header */}
        <h2 className="hidden md:block text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
          Dashboard
        </h2>

        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 p-3 rounded-lg transition ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "text-gray-700 dark:text-gray-200 hover:bg-indigo-100 dark:hover:bg-gray-700"
                  }`
                }
                onClick={() => setSidebarOpen(false)} // close sidebar on mobile after click
              >
                {link.icon} {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DashboardSidebar;

import { NavLink } from "react-router";
import { FiHome, FiUser, FiEdit, FiBarChart2, FiUsers, FiSettings } from "react-icons/fi";

const DashboardSidebar = () => {
  const links = [
    { name: "Overview", path: "/dashboard", icon: <FiHome /> },
    { name: "Profile", path: "/dashboard/profile", icon: <FiUser /> },
    { name: "Edit Profile", path: "/dashboard/edit-profile", icon: <FiEdit /> },
    { name: "My Connections", path: "/dashboard/connections", icon: <FiUsers /> },
    { name: "Analytics", path: "/dashboard/analytics", icon: <FiBarChart2 /> },
    { name: "Settings", path: "/dashboard/settings", icon: <FiSettings /> },
  ];

  return (
    <div className="w-64 bg-white dark:bg-gray-800 shadow-lg p-4 hidden md:block">
      <h2 className="text-2xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
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
            >
              {link.icon} {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DashboardSidebar;

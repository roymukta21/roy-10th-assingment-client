//import { useAuth } from "../../hook/useAuth";
import { FiLogOut } from "react-icons/fi";
import useAuth from "../../hook/useAuth";

const DashboardNavbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className="h-16 bg-white dark:bg-gray-800 flex items-center justify-between px-6 shadow">
      <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
        Welcome, {user?.displayName || "User"} 👋
      </h2>

      <button
        onClick={logout}
        className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        <FiLogOut /> Logout
      </button>
    </div>
  );
};

export default DashboardNavbar;

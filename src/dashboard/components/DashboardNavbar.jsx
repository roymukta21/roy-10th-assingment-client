import { FiMenu } from "react-icons/fi";

const DashboardNavbar = ({ setSidebarOpen }) => {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-gray-800 shadow-md">
      {/* Hamburger (only md & small) */}
      <button
        className="md:hidden text-2xl text-white"
        onClick={() => setSidebarOpen(true)}
      >
        <FiMenu />
      </button>

      <h1 className="text-lg font-semibold">Dashboard</h1>
    </div>
  );
};

export default DashboardNavbar;

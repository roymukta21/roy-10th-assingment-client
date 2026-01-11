import { Outlet } from "react-router";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardNavbar from "./components/DashboardNavbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Content Area */}
      <div className="flex-1 flex flex-col">
        <DashboardNavbar />

        <div className="p-6 overflow-y-auto h-[calc(100vh-64px)]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

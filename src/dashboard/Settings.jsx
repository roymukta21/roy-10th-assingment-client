import { useEffect, useState } from "react";
import { signOut } from "firebase/auth";
//import { auth } from "../../firebase.config";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Load saved settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedNotifications = localStorage.getItem("notifications");

    if (savedTheme === "dark") setDarkMode(true);
    if (savedNotifications === "false") setNotifications(false);
  }, []);

  // Apply Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  // Save Notifications
  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  // Logout
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/login";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Settings
      </h2>

      {/* Appearance */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Appearance</h3>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              darkMode ? "bg-blue-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                darkMode ? "translate-x-6" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Notifications */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Notifications</h3>
        <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 p-4 rounded-lg">
          <span className="text-gray-700 dark:text-gray-300">Allow Notifications</span>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              notifications ? "bg-green-500" : "bg-gray-400"
            }`}
          >
            <div
              className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
                notifications ? "translate-x-6" : ""
              }`}
            ></div>
          </button>
        </div>
      </div>

      {/* Profile Options */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Profile</h3>
        <ul className="space-y-3">
          <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Change Username
          </li>
          <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Update Email
          </li>
          <li className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg text-gray-700 dark:text-gray-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600 transition">
            Change Password
          </li>
        </ul>
      </div>

      {/* Logout */}
      <div>
        <h3 className="text-xl font-semibold mb-2 dark:text-gray-200">Account</h3>
        <button
          onClick={handleLogout}
          className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Settings;

//import { useAuth } from "../hook/useAuth";

import useAuth from "../hook/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Profile</h2>

      <img
        src={user?.photoURL}
        alt=""
        className="w-28 h-28 rounded-full mb-4 border-4 border-indigo-500"
      />

      <p><strong>Name:</strong> {user?.displayName}</p>
      <p><strong>Email:</strong> {user?.email}</p>
    </div>
  );
};

export default Profile;

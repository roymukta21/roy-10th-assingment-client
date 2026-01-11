import { useState } from "react";
import useAuth from "../hook/useAuth";
//import { useAuth } from "../hook/useAuth";

const EditProfile = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.displayName || "");

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updating profile:", name);
  };

  return (
    <form
      onSubmit={handleUpdate}
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-bold">Edit Profile</h2>

      <input
        type="text"
        className="w-full p-3 rounded-lg border dark:bg-gray-700"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg"
      >
        Save Changes
      </button>
    </form>
  );
};

export default EditProfile;

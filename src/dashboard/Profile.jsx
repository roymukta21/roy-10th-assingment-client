import useAuth from "../hook/useAuth";
import useUserData from "../hook/useUserData"; 
import { FiMail, FiMapPin, FiClock, FiBook, FiUsers } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

const Profile = () => {
  const { user } = useAuth();         // Firebase user
  const mongoUser = useUserData();    // MongoDB user

  // If data still loading
  if (!mongoUser) {
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        Loading profile...
      </div>
    );
  }

  // Merge Firebase + Mongo User
  const finalUser = {
    name: user?.displayName || mongoUser.name,
    email: user?.email,
    image: user?.photoURL || mongoUser?.image,
    subject: mongoUser?.subject,
    studyMode: mongoUser?.studyMode,
    availabilityTime: mongoUser?.availabilityTime,
    location: mongoUser?.location,
    experienceLevel: mongoUser?.experienceLevel,
    rating: mongoUser?.rating,
    partnerCount: mongoUser?.partnerCount,
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-200 dark:border-gray-700">
      
      {/* Header */}
      <div className="flex items-center gap-5 mb-6">
        <img
          src={finalUser.image || "https://i.ibb.co/Zm6PjzC/avatar.png"}
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-indigo-500"
        />

        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white">
            {finalUser.name}
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
            <FiMail /> {finalUser.email}
          </p>
        </div>
      </div>

      {/* Info Section */}
      <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
        <p className="flex items-center gap-2">
          <FiBook className="text-indigo-500" />
          <strong>Subject:</strong> {finalUser.subject}
        </p>

        <p className="flex items-center gap-2">
          📚 <strong>Study Mode:</strong> {finalUser.studyMode}
        </p>

        <p className="flex items-center gap-2">
          <FiClock className="text-indigo-500" />
          <strong>Availability:</strong> {finalUser.availabilityTime}
        </p>

        <p className="flex items-center gap-2">
          <FiMapPin className="text-indigo-500" />
          <strong>Location:</strong> {finalUser.location}
        </p>

        <p className="flex items-center gap-2">
          🎯 <strong>Experience:</strong> {finalUser.experienceLevel}
        </p>

        <p className="flex items-center gap-2">
          <FaStar className="text-yellow-400" />
          <strong>Rating:</strong> {finalUser.rating} / 5
        </p>

        <p className="flex items-center gap-2">
          <FiUsers className="text-indigo-500" />
          <strong>Partners:</strong> {finalUser.partnerCount}
        </p>
      </div>

      {/* Footer */}
      <button className="mt-6 w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition">
        Edit Profile
      </button>
    </div>
  );
};

export default Profile;

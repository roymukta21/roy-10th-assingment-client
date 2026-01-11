import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import useAuth from "../hook/useAuth";



export default function FindPartner() {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const { user } = useAuth();


  useEffect(() => {
    fetch("http://localhost:5000/partners")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

const handleView = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/partner/${id}`);
    }
  };
  
  // Search Filter
const filteredPartners = partners.filter((p) =>
  p.subject.toLowerCase().includes(search.toLowerCase())
);

const levelOrder = {
  "Beginner": 1,
  "Intermediate": 2,
  "Advanced": 3,
  "Expert": 4
};
const sortedPartners =
  sort == "experienceLevel"
    ? filteredPartners.sort(
        (a, b) => levelOrder[b.experienceLevel] - levelOrder[a.experienceLevel]
      )
    : filteredPartners;
//console.log(filteredPartners)
//console.log(sortedPartners)
  return (
    <div className="container mx-auto pt-25 ">
      
      {/* Search & Sort Section */}
      <div className="flex justify-between mb-6">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
        >
          <option value="">Sort By</option>
          <option value="experienceLevel"> Experience (High → Low)</option>
        </select>

        <input
          type="text"
          placeholder="Search by subject..."
          className="border p-2 rounded bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
  {sortedPartners.map((partner) => (
    <div
      key={partner._id}
      className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col items-center text-center">
        
        <div className="relative">
          <img
            src={partner.image}
            alt="Profile"
            className="w-28 h-28 object-cover rounded-full ring-4 ring-blue-200 dark:ring-blue-700 shadow"
          />

          {/* Rating Badge */}
          <div className="absolute -bottom-2 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow">
            ⭐ {partner.rating}
          </div>
        </div>

        <h2 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">{partner.name}</h2>

        {/* Subject */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          📘 <span className="font-medium">{partner.subject}</span>
        </p>

        {/* Study Mode */}
        <p className="text-sm text-gray-600 dark:text-gray-300">
          🎧 {partner.studyMode}
        </p>

        {/* Experience Level Badge */}
        <span className="mt-2 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
          {partner.experienceLevel}
        </span>

        <button
          onClick={() => handleView(partner._id)}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-all duration-300 shadow-md"
        >
          View Profile
        </button>
      </div>
    </div>
  ))}
</div>

    </div>
  );
}

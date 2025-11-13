import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function FindPartner() {
  const [partners, setPartners] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://study-mate-server-blue.vercel.app/partners")
      .then((res) => res.json())
      .then((data) => setPartners(data));
  }, []);

  // Search Filter
  const filteredPartners = partners.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Sort by Rating
  const sortedPartners =
    sort === "rating"
      ? [...filteredPartners].sort((a, b) => b.rating - a.rating)
      : filteredPartners;

  return (
    <div className="container mx-auto p-5 ">
      
      {/* Search & Sort Section */}
      <div className="flex justify-between mb-6">
        <select
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-100"
        >
          <option value="">Sort By</option>
          <option value="rating">Rating (High → Low)</option>
        </select>

        <input
          type="text"
          placeholder="Search by name..."
          className="border p-2 rounded w-60"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {sortedPartners.map((partner) => (
          <div
            key={partner._id}
            className="shadow-lg border rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={partner.image}
              alt="Profile"
              className="w-28 h-28 object-cover rounded-full mb-3"
            />
            <h2 className="text-xl font-semibold">{partner.name}</h2>
            <p className="text-sm">Subject: {partner.subject}</p>
            <p className="text-sm">Study Mode: {partner.studyMode}</p>
            <p className="text-sm">Experience: {partner.experienceLevel}</p>
            <p className="text-sm font-bold">⭐ {partner.rating}</p>

            <Link to={`/partner/${partner._id}`}>
              <button className="mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                View Profile
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function TopStudyPartners() {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://study-mate-server-blue.vercel.app/partners")
      .then((res) => res.json())
      .then((data) => {
        const sorted = data.sort((a, b) => b.rating - a.rating).slice(0, 3);
        setPartners(sorted);
      });
  }, []);

  const handleView = (id) => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/partner/${id}`);
    }
  };

  return (
  <section className="container mx-auto px-6 mt-14">
  <h2 className="text-center text-3xl md:text-4xl font-bold mb-10 text-secondary">
    ⭐ Top Study Partners
  </h2>

  <div className="grid md:grid-cols-3 sm:grid-cols-3 gap-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
    {partners.map((p) => (
      <div
        key={p._id}
        className="rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 p-5"
      >
        {/* Image */}
        <div className="relative">
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-48 object-cover rounded-xl shadow-md"
          />

          {/* Rating Badge */}
          <div className="absolute top-3 right-3 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-full shadow">
            ⭐ {p.rating}
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
          {p.name}
        </h3>

        {/* Subjects */}
        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
          📚 <span className="font-medium">{p.subject}</span>
        </p>

        {/* Skills */}
       <span className="mt-2 text-xs px-3 py-1 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200">
         🤹🏻 {p.experienceLevel}
        </span>

        {/* Bottom Button */}
        <button
          onClick={() => handleView(p._id)}
          className="mt-5 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition-all duration-300 shadow-md"
        >
          View Profile
        </button>
      </div>
    ))}
  </div>
</section>

  );
}

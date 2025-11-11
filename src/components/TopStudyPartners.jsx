import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function TopStudyPartners() {
  const [partners, setPartners] = useState([]);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch("https://your-server-url.com/partners")
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

      <div className="grid md:grid-cols-3 gap-6">
        {partners.map((p) => (
          <div
            key={p._id}
            className="rounded-xl shadow-lg bg-white border hover:shadow-xl transition p-5"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded-md"
            />

            <h3 className="text-xl font-semibold mt-4">{p.name}</h3>
            <p className="text-gray-600 text-sm mt-1">
              {p.subjects?.join(", ")}
            </p>

            <p className="mt-2 text-sm font-medium">
              Skills: <span className="text-blue-600">{p.skills}</span>
            </p>

            <p className="mt-2 font-bold text-yellow-500">⭐ {p.rating}</p>

            <button
              onClick={() => handleView(p._id)}
              className="btn btn-primary w-full mt-4"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

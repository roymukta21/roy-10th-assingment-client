import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../hook/useAuth";

export default function PartnerDetails() {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`http://localhost:5000/partners/${id}`)
      .then(res => res.json())
      .then(data => setPartner(data));
  }, [id]);

  const handleRequest = () => {
    if (!user) {
      return navigate("/login");
    }
    alert("Study Request Sent ✅");
  };

  if (!partner) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="flex flex-col md:flex-row gap-8 items-start bg-base-200 p-6 rounded-lg">

        <img
          src={partner.profileImage}
          alt="profile"
          className="w-64 h-64 object-cover rounded-xl shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">{partner.name}</h1>
          <p className="text-gray-600 mt-2">{partner.bio}</p>

          <p className="mt-4"><strong>Subjects: </strong>{partner.subjects.join(", ")}</p>
          <p className="mt-2"><strong>Skill: </strong>{partner.skill}</p>
          <p className="mt-2 text-yellow-500 font-semibold">⭐ {partner.rating} / 5</p>

          <div className="flex gap-3 mt-5">
            <a href={`mailto:${partner.email}`} className="btn btn-outline">Contact</a>
            <button onClick={handleRequest} className="btn btn-primary">
              Request to Study Together
            </button>
          </div>
        </div>

      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-semibold mb-3">Availability Schedule</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {partner.availability?.map((slot, index) => (
            <div key={index} className="p-4 border rounded-lg bg-base-100">
              <p className="font-bold">{slot.day}</p>
              <p className="text-sm text-gray-600">{slot.time}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

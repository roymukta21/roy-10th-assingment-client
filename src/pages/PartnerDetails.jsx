import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../hook/useAuth";
import Swal from "sweetalert2";

export default function PartnerDetails() {
  const { id } = useParams();
  const [partner, setPartner] = useState(null);
  const navigate = useNavigate();
  const { user } = useAuth();

  useEffect(() => {
    fetch(`https://study-mate-server-blue.vercel.app/partners/${id}`)
      .then((res) => res.json())
      .then((data) => setPartner(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleRequest = async () => {
    if (!user) {
      return navigate("/login");
    }

    try {
      // 1️⃣ Increment partner count atomically
      await fetch(
        `https://study-mate-server-blue.vercel.app/partners/${id}/increment`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ increment: 1 }), // tell backend to increment by 1
        }
      );

      // 2️⃣ Save request in 'requests' collection
      const requestData = {
        partnerId: id,
        partnerName: partner.name,
        partnerEmail: partner.email,
        requestedBy: user.email,
        requestedAt: new Date(),
      };

      await fetch(`https://study-mate-server-blue.vercel.app/requests`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      // 3️⃣ Update local state (optimistic)
      setPartner((prev) => ({
        ...prev,
        partnerCount: (prev.partnerCount || 0) + 1,
      }));

      // 4️⃣ Show success toast
      Swal.fire({
        icon: "success",
        title: "Request Sent!",
        text: "Your study request has been sent successfully.",
        timer: 2000,
        showConfirmButton: false,
      });
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Failed",
        text: "Something went wrong. Please try again.",
      });
    }
  };

  if (!partner) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="max-w-4xl mx-auto p-6 h-screen">
      <div className="flex flex-col md:flex-row gap-8 items-start bg-base-200 p-6 rounded-lg">
        <img
          src={partner.image}
          alt="profile"
          className="w-64 h-64 object-cover rounded-xl shadow"
        />

        <div>
          <h1 className="text-3xl font-bold">{partner.name}</h1>
          <p className="text-gray-600 mt-2">{partner.bio}</p>

          <p className="mt-4">
            <strong>Subjects: </strong>
            {partner.subjects?.length
              ? partner.subjects.join(", ")
              : "Not specified"}
          </p>

          <p className="mt-2">
            <strong>Skill: </strong>
            {partner.skill}
          </p>

          <p className="mt-2">
            <strong>Study Mode: </strong>
            {partner.studyMode || "Not specified"}
          </p>

          <p className="mt-2">
            <strong>Location: </strong>
            {partner.location || "Not specified"}
          </p>

          <p className="mt-2">
            <strong>Experience Level: </strong>
            {partner.experience || "Not specified"}
          </p>

          <p className="mt-2 text-yellow-500 font-semibold">
            ⭐ {partner.rating} / 5
          </p>

          <p className="mt-2 font-semibold">
            Partner Count: {partner.partnerCount || 0}
          </p>

          <div className="flex gap-3 mt-5">
            <a href={`mailto:${partner.email}`} className="btn btn-outline">
              Contact
            </a>

            <button onClick={handleRequest} className="btn btn-primary">
              Send Partner Request
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

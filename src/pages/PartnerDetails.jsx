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
    fetch(`http://localhost:5000/partners/${id}`)
      .then((res) => res.json())
      .then((data) => setPartner(data))
      .catch((err) => console.error(err));
  }, [id]);

  const handleRequest = async () => {
    if (!user) {
      return navigate("/login");
    }

    // Prevent sending request to self
    if (user.email === partner.email) {
      return Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "You cannot send a request to yourself.",
      });
    }

    try {
      const requestData = {
        partnerId: id,
        partnerImage: partner.image,
        partnerStudyMode: partner.studyMode,
        partnerSubject: partner.subject,
        partnerName: partner.name,
        partnerEmail: partner.email,
        senderEmail: user.email,
        message: "I'd like to connect with you!",
      };

      const res = await fetch("http://localhost:5000/connections", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      });

      const data = await res.json();
      console.log(data);
      if (res.ok) {
        // Update UI locally
        setPartner((prev) => ({
          ...prev,
          partnerCount: (prev.partnerCount || 0) + 1,
        }));

        Swal.fire({
          icon: "success",
          title: "Request Sent!",
          text: "Your study request has been sent successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Failed",
          text: data.message || "Something went wrong.",
        });
      }
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
            <strong>Subject: </strong>
            {partner.subject}
          </p>

          <p className="mt-2">
            <strong>Skill: </strong>
            {partner.experienceLevel}
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
            {partner.experienceLevel || "Not specified"}
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

      <div className="mt-10 pt-20">
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

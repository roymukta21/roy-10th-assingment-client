import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function CreatePartnerProfile() {
  const { user } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    name: "",
    profileImage: "",
    subject: "",
    studyMode: "Online",
    availabilityTime: "",
    location: "",
    experienceLevel: "Beginner",
    rating: 0,
    partnerCount: 0,
    email: user?.email || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // POST request to backend
    fetch("https://your-server-url.com/partners", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        Swal.fire("Success!", "Partner profile created.", "success");
        // Reset form
        setFormData({
          name: "",
          profileImage: "",
          subject: "",
          studyMode: "Online",
          availabilityTime: "",
          location: "",
          experienceLevel: "Beginner",
          rating: 0,
          partnerCount: 0,
          email: user?.email || "",
        });
      });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">Create Partner Profile</h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-secondary">

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="profileImage"
          placeholder="Profile Image URL"
          value={formData.profileImage}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject (e.g., Math, English)"
          value={formData.subject}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <select
          name="studyMode"
          value={formData.studyMode}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="Online">Online</option>
          <option value="Offline">Offline</option>
        </select>

        <input
          type="text"
          name="availabilityTime"
          placeholder="Availability (e.g., Evening 6-9 PM)"
          value={formData.availabilityTime}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location (City/Area)"
          value={formData.location}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <select
          name="experienceLevel"
          value={formData.experienceLevel}
          onChange={handleChange}
          className="select select-bordered w-full"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Expert">Expert</option>
        </select>

        <button type="submit" className="btn btn-primary mt-4">
          Create Profile
        </button>
      </form>
    </div>
  );
}

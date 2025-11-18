import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function CreatePartnerProfile() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
  if (user) {
    setFormData((prev) => ({
      ...prev,
      email: user.email,
    }));
  }
}, [user]);


  // Redirect if user is not logged in (Private Route)
  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  const [formData, setFormData] = useState({
    name: "",
    Image: "",
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

  



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Step 1: Check if a profile already exists for this email
      const checkRes = await fetch(
        `https://study-mate-server-blue.vercel.app/partners?email=${user?.email}`
      );
      const existingProfiles = await checkRes.json();

      if (existingProfiles.length > 0) {
        Swal.fire({
          title: "Profile Exists!",
          text: "You already have a profile. You cannot create another one.",
          icon: "warning",
          confirmButtonText: "OK",
        });
       return; // Stop submission
      }

      // Step 2: Create new profile
      const res = await fetch(
        "https://study-mate-server-blue.vercel.app/partners",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      const data = await res.json();
      //console.log(data);

      Swal.fire({
        title: "Success!",
        text: "Partner profile created.",
        icon: "success",
        confirmButtonText: "OK",
      }).then(() => {
        // Reset form but keep email
        setFormData({
          name: "",
          image: "",
          subject: "",
          studyMode: "Online",
          availabilityTime: "",
          location: "",
          experienceLevel: "Beginner",
          rating: 0,
          partnerCount: 0,
          email: user?.email || "",
        });
        // Navigate to FindPartner page
        navigate("/FindPartner");
      });
    } catch (err) {
      console.error(err);
      Swal.fire("Error!", "Failed to create profile.", "error");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-base-200 rounded-lg shadow m-5">
      <h2 className="text-3xl font-bold mb-6 text-center text-primary">
        Create Partner Profile
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full px-4 py-2 rounded-lg border border-gray-300 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white dark:border-gray-600 dark:placeholder-gray-400
    "
      >
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
          name="image"
          placeholder="Profile Image URL"
          value={formData.image}
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

        {/* Read-only fields */}
        <input
          
          type="text"
          name="rating"
          value={`Rating: ${formData.rating}`}
          className="input input-bordered w-full   dark:text-white"
          readOnly
        />

        <input
          type="number"
          name="partnerCount"
          value={formData.partnerCount}
          className="input input-bordered w-full "
          readOnly
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          className="input input-bordered w-full"
          readOnly
        />

        <button type="submit" className="btn btn-primary mt-4">
          Create Profile
        </button>
      </form>
    </div>
  );
}

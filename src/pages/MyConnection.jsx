import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function MyConnection() {
  const { user } = useContext(AuthContext);
  const [connections, setConnections] = useState([]);

  // ✅ Load user’s connections
  useEffect(() => {
    if (user?.email) {
      fetch(
        `https://study-mate-server-blue.vercel.app/connections?email=${user.email}`
      )
        .then((res) => res.json())
        .then((data) => setConnections(data))
        .catch((err) => console.error("Error fetching connections:", err));
    }
  }, [user]);

  // ✅ DELETE a connection
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://study-mate-server-blue.vercel.app/connections/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Connection removed successfully.", "success");
              setConnections((prev) => prev.filter((item) => item._id !== id));
            }
          })
          .catch((err) => console.error("Error deleting connection:", err));
      }
    });
  };

  // ✅ UPDATE connection (edit + save in same page)
  const handleUpdate = (partner) => {
    Swal.fire({
      title: "Update Connection Info",
      html: `
        <label>Subject:</label>
        <input id="subject" class="swal2-input" placeholder="Subject" value="${partner.subject || ""}">
        <label>Study Mode:</label>
        <input id="studyMode" class="swal2-input" placeholder="Study Mode" value="${partner.studyMode || ""}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Save Changes",
      cancelButtonText: "Cancel",
      preConfirm: () => {
        const subject = document.getElementById("subject").value.trim();
        const studyMode = document.getElementById("studyMode").value.trim();

        if (!subject || !studyMode) {
          Swal.showValidationMessage("Please fill in both fields!");
          return false;
        }
        return { subject, studyMode };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedData = {
          subject: result.value.subject,
          studyMode: result.value.studyMode,
        };

        fetch(`https://study-mate-server-blue.vercel.app/connections/${partner._id}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(updatedData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire("Saved!", "Connection updated successfully.", "success");

              // ✅ Instantly update UI
              setConnections((prev) =>
                prev.map((item) =>
                  item._id === partner._id ? { ...item, ...updatedData } : item
                )
              );
            } else {
              Swal.fire("No Changes", "No updates were made.", "info");
            }
          })
          .catch((err) => {
            console.error("Error updating connection:", err);
            Swal.fire("Error", "Failed to update connection.", "error");
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-center my-6 text-primary">
        My Connections
      </h2>

      {connections.length === 0 ? (
        <p className="text-center text-secondary">
          No Connection Requests Found.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th>Profile</th>
                <th>Subject</th>
                <th>Study Mode</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>

            <tbody>
              {connections.map((partner) => (
                <tr key={partner._id} className="border-b">
                  <td className="flex items-center gap-3 py-2">
                    <img
                      src={partner.image}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                    <span className="font-semibold">{partner.name}</span>
                  </td>

                  <td>{partner.subject}</td>
                  <td>{partner.studyMode}</td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline btn-primary"
                      onClick={() => handleUpdate(partner)}
                    >
                      Update
                    </button>
                  </td>

                  <td>
                    <button
                      className="btn btn-sm btn-outline btn-error"
                      onClick={() => handleDelete(partner._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

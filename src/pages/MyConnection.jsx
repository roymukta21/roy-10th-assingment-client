// import { useEffect, useState, useContext } from "react";
// import { AuthContext } from "../providers/AuthProvider";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

export default function MyConnection() {
  const { user } = useContext(AuthContext);
  const [connections, setConnections] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://your-server-url.com/connections?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setConnections(data));
    }
  }, [user]);

  // Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete",
      cancelButtonText: "Cancel"
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://your-server-url.com/connections/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Connection removed successfully.", "success");
              setConnections(connections.filter(item => item._id !== id));
            }
          });
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center my-6 text-primary">My Connections</h2>

      {connections.length === 0 ? (
        <p className="text-center text-secondary">No Connection Requests Found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr className="bg-gray-200">
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
                  <td className="flex items-center gap-3">
                    <img src={partner.profileimage} alt="" className="w-12 h-12 rounded-full" />
                    <span className="font-semibold">{partner.name}</span>
                  </td>

                  <td>{partner.subject}</td>
                  <td>{partner.studyMode}</td>

                  <td>
                    <Link to={`/update/${partner._id}`}>
                      <button className="btn btn-sm btn-outline btn-primary">
                        Update
                      </button>
                    </Link>
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

import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { auth } from "../firebase.init.js/firebase.init";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // ✅ added state for show/hide
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in! 🎉");
      navigate("/");
    } catch (error) {
      console.error("Login Error:", error.message);
      if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address!");
      } else if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email!");
      } else if (error.code === "auth/wrong-password") {
        toast.error("Wrong password!");
      } else {
        toast.error("Login failed! Please try again.");
      }
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white shadow-md rounded-xl p-8 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-primary">Login</h2>

        <div className="mb-4">
          <label className="block mb-2 text-secondary">Email</label>
          <input
            type="email"
            className="w-full border rounded px-3 py-2 
             text-gray-900 placeholder-gray-500 
             dark:bg-gray-800 dark:text-gray-100 
             dark:placeholder-gray-400 dark:border-gray-600
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6 relative">
          <label className="block text-secondary mb-2">Password</label>
          <input
            type={showPassword ? "text" : "password"} // ✅ toggle type
            className="w-full border rounded px-3 py-2 
             text-gray-900 placeholder-gray-500 
             dark:bg-gray-800 dark:text-gray-100 
             dark:placeholder-gray-400 dark:border-gray-600
             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-9 text-gray-500 dark:text-gray-300"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>

        <button
          className="btn-primary bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
          type="submit"
        >
          Login
        </button>
      </form>
    </div>
  );
}

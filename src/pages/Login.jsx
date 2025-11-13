// import { signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebase.init.js/firebase.init";
import { Link, useNavigate } from "react-router";
import { GoogleAuthProvider, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Successfully logged in! 🎉");
      navigate("/"); // You can replace "/" with the desired route
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

  const handleForgotPassword = async () => {
    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success(`Password reset email sent to ${email}! 📧`);
    } catch (error) {
      console.error("Forgot Password Error:", error.message);
      if (error.code === "auth/user-not-found") {
        toast.error("No user found with this email!");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email address!");
      } else {
        toast.error("Failed to send reset email. Try again.");
      }
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Logged in with Google! 🎉");
      navigate("/"); // Navigate to desired route or home
    } catch (error) {
      console.error("Google Login Error:", error.message);
      toast.error("Google login failed. Please try again.");
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
            type={showPassword ? "text" : "password"}
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

        {/* Forgot Password Section */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={handleForgotPassword}
            className="text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Google Login Button */}
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-full"
          >
            Continue with Google
          </button>
        </div>

        {/* Register Link */}
        <div className="mt-4 text-center text-gray-700">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </div>
      </form>
    </div>
  );
}

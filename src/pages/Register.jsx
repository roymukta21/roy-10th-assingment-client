import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../firebase.init.js/firebase.init";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";

export default function Signup() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  // const [ setPassword, showPassword] = useState(false);
   const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const from = location.state?.from?.pathname || "/home";
  

  const googleProvider = new GoogleAuthProvider();

  const handleSignup = async (e) => {
    e.preventDefault();
    const name = e.target.name.value.trim();
    const photoURL = e.target.photo.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value;

    // password validation
    if (
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[0-9]/.test(password) ||
      password.length < 6
    ) {
      setError(
        "Password must contain uppercase, lowercase, number and be at least 6 characters long."
      );
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(userCredential.user, { displayName: name, photoURL });
      toast.success("Signup successful! Welcome aboard 💫");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      toast.success("Signed in with Google!");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-500">
          Create an Account
        </h2>

        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            required
            className="input border-accent w-full bg-white  text-black"
          />
          <input
            type="text"
            name="photo"
            placeholder="Photo URL"
            required
            className="input border-accent w-full bg-white  text-black"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="input border-accent w-full bg-white  text-black"
          />
          <div className="relative">
          <input
            required
            type={showPass ? "text" : "password"}
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border rounded px-3 py-2"
          />
          <button
            type="button"
            onClick={() => setShowPass((v) => !v)}
            className="absolute right-2 top-2 text-sm"
          >
            {showPass ? "Hide" : "Show"}
          </button>
        </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <button
            type="submit"
            className="btn w-full bg-accent-content hover:bg-green-300 text-white"
          >
            Register
          </button>
        </form>

        <button onClick={handleGoogleSignup} className="btn w-full mt-4 bg-accent">
          <FcGoogle /> Continue with Google
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Already have an account?{" "}
          <Link to="/auth/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

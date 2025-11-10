

import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";

import { Link, useLocation, useNavigate } from "react-router";
import { auth } from "../firebase.init.js/firebase.init";
import toast from "react-hot-toast";
import { useState } from "react";

  



export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  async function handleEmailLogin(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword (auth, email, password);
      toast.success("Logged in");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function handleGoogle() {
    try {
      await signInWithPopup(auth, GoogleAuthProvider);
      toast.success("Logged in with Google");
      navigate(from, { replace: true });
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleEmailLogin} className="space-y-3">
        <input
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full border rounded px-3 py-2"
        />
        <div className="relative">
          <input
            required
            type={showPass ? "text" : "password"}
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

        <div className="flex justify-between items-center">
          <button className="btn-primary px-4 py-2 rounded" type="submit">
            Login
          </button>
          <Link to="/auth/forgot-password" state={{ email }} className="text-sm">
            Forgot password?
          </Link>
        </div>

        <div className="text-center">Or</div>

        <button
          type="button"
          onClick={handleGoogle}
          className=" flex items-center justify-center-safe w-full border py-2 rounded"
        >
        Continue with Google
        </button>

        <p className="text-sm">
          Don't have an account?{" "}
          <Link to="/auth/signup" className="text-blue-600">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
}

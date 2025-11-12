import { ArrowUp } from "lucide-react";
import { Link } from "react-router";
import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#baf381] text-center  rounded-t-[6rem] sm:rounded-t-[8rem] w-full">
      {/* Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center pt-16 pb-12 px-4 text-primary space-y-5 sm:space-y-7">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <div className="flex items-center space-x-2">
            <img
              className="h-8 sm:h-10 w-auto"
              src="/freepik-hand-drawn-linear-known-academy-logo-202511081639166U46.png"
              alt="StudyMate Logo"
            />
            <h1 className="text-xl sm:text-2xl font-semibold">
              Study<span className="font-light">Mate</span>
            </h1>
          </div>
        </Link>

        

        {/* Main Links — stacked on mobile */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-base sm:text-lg text-secondary">
          <a
            href="https://www.facebook.com"
            className="text-blue-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://www.x.com"
            className="text-blue-300 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="h-10" src="/10464257.png" alt="" />
          </a>
          <a
            href="https://www.instagram.com"
            className="text-pink-500 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://mail.google.com/"
            className="text-yellow-400 transition"
          >
            <FaEnvelope size={24} />
          </a>
        </div>

        {/* Terms and Privacy */}
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 text-gray-600 text-sm sm:text-base mt-6">
          <a href="#" className="hover:text-gray-800 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-gray-800 transition-colors">
            Privacy Policy
          </a>
        </div>

        {/* Copyright */}
        <div className="flex mt-6 text-center text-gray-400 justify-center items-center gap-2">
          <span>&copy; {new Date().getFullYear()}</span>
          <h1 className="font-semibold">
            Study<span className="font-light">Mate</span>.
          </h1>
          <span>All rights reserved.</span>
        </div>
      </div>

      {/* Go to Top Button (hidden on small, visible on md+) */}
      <button
        onClick={scrollToTop}
        className="md:flex items-center justify-center fixed bottom-6 right-6 bg-gradient-to-tr from-blue-400 to-purple-500 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Go to top"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}

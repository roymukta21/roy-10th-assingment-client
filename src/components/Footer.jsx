import { ArrowUp } from "lucide-react";
import { Link } from "react-router";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#baf381] text-center mt-24 sm:mt-28 rounded-t-[6rem] sm:rounded-t-[8rem] w-full">
      {/* Container */}
      <div className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center pt-16 pb-12 px-4 text-primary space-y-5 sm:space-y-7">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold"><div className="flex items-center space-x-2">
          <img
            className="h-8 sm:h-10 w-auto"
            src="/freepik-hand-drawn-linear-known-academy-logo-202511081639166U46.png"
            alt="StudyMate Logo"
          />
          <h1 className="text-xl sm:text-2xl font-semibold">
            Study<span className="font-light">Mate</span>
          </h1>
        </div></Link>

        {/* How it Works */}
        <div className="flex justify-center text-base sm:text-lg text-secondary hover:text-primary">
          <a href="#" className=" transition-colors">
            How it works
          </a>
        </div>

        {/* Main Links — stacked on mobile */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-base sm:text-lg text-secondary">
          <a href="#" className="hover:text-primary transition-colors">
            Focus Room
          </a>
          <a href="#" className="hover:text-primary  transition-colors">
            Community
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Rules
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Blog
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Contact Us
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            Mobile app
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
        <p className="text-gray-600 text-xs sm:text-sm mt-8">
          2025 © Knowledge Collective
        </p>
      </div>

      {/* Go to Top Button (hidden on small, visible on md+) */}
      <button
        onClick={scrollToTop}
        className="hidden md:flex items-center justify-center fixed bottom-6 right-6 bg-gradient-to-tr from-blue-400 to-purple-500 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Go to top"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
}

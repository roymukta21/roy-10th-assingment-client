import { ArrowUp } from "lucide-react";


export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#1E1E1E] text-white text-center mt-20 rounded-t-[8rem]">
      {/* Logo */}
      <div className="pt-16 pb-8 flex flex-col items-center space-y-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 border-2 border-white rotate-45 rounded-md flex items-center justify-center">
            <div className="w-4 h-4 bg-white rotate-45 rounded-sm"></div>
          </div>
          <h1 className="text-2xl font-semibold">
            Study<span className="font-light">Stream</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-200 text-lg">
          <a href="#">Focus Room</a>
          <a href="#">How it works</a>
          <a href="#">Community</a>
          <a href="#">Rules</a>
          <a href="#">Blog</a>
          <a href="#">Contact Us</a>
          <a href="#">Mobile app</a>
        </div>

        {/* Terms and Privacy */}
        <div className="flex flex-wrap justify-center gap-10 text-gray-400 text-base mt-6">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm mt-10 pb-8">
          2025 © Knowledge Collective
        </p>
      </div>

      {/* Go to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-gradient-to-tr from-blue-400 to-purple-500 hover:opacity-90 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        aria-label="Go to top"
      >
        <ArrowUp size={22} />
      </button>
    </footer>
  );
};


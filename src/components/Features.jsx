import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const features = [
    {
      title: "Smart Partner Matching",
      desc: "AI-based matching to find study partners with similar goals.",
      icon: "🎯",
    },
    {
      title: "Advanced Filters",
      desc: "Find partners by subject, level, availability & location.",
      icon: "⚡",
    },
    {
      title: "Verified Profiles",
      desc: "Only verified and authentic study partners.",
      icon: "✔️",
    },
    {
      title: "Real-time Chat",
      desc: "Message your partners instantly with secure chat.",
      icon: "💬",
    },
  ];

  return (
    <section
      className="rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto max-w"
      data-aos="fade-up"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 dark:text-white tracking-wide"
        >
          Key Features
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Everything designed for your perfect learning experience.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            data-aos="zoom-in"
            className="backdrop-blur-lg bg-white/40 dark:bg-gray-800/40 p-6 rounded-2xl shadow-lg border border-white/30 
              hover:scale-105 hover:shadow-2xl hover:bg-white/60 hover:dark:bg-gray-800/60
              transition-all duration-300 cursor-pointer"
          >
            <div className="text-5xl mb-4 drop-shadow-md">{f.icon}</div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-3">
              {f.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const slides = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    title: "Studying Alone is Tough. Studying Together is Powerful.",
    subtitle: "Find study partners who motivate you to grow.",
    cta: "Find Partners",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80",
    title: "Grow Together, Win Together.",
    subtitle: "Connect with learners from everywhere and level up.",
    cta: "Create Profile",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=1600&q=80",
    title: "Your Study Journey Doesn’t Have to be Lonely.",
    subtitle: "Match with partners who share your goals.",
    cta: "Get Started",
  },
];

export default function Carousel() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto Slide Every 4 Seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="w-full overflow-hidden relative">
      <div className="h-[420px] md:h-[540px] w-full relative">
        {slides.map((s, idx) => (
          <div
            key={s.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              activeIndex === idx ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            <img
              src={s.img}
              alt={s.title}
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent flex items-center">
              <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="max-w-2xl text-white">
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-sm md:text-lg text-gray-100/90">
                    {s.subtitle}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() =>
                        s.cta === "Find Partners"
                          ? navigate("/find-partners")
                          : s.cta === "Create Profile"
                          ? navigate("/create-profile")
                          : navigate("/register")
                      }
                      className="btn btn-primary bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-700"
                    >
                      {s.cta}
                    </button>

                    <button
                      onClick={() => navigate("/find-partners")}
                      className="btn btn-ghost text-white border-white/30"
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Prev + Next Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:flex btn btn-circle btn-sm bg-white/20 text-white"
            >
              ❮
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:flex btn btn-circle btn-sm bg-white/20 text-white"
            >
              ❯
            </button>
          </div>
        ))}
      </div>

      {/* Slide Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`w-3 h-3 rounded-full transition ${
              activeIndex === i ? "bg-blue-600" : "bg-gray-300/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

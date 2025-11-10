import React from "react";
import ThemeToggle from "./ThemeToggle";

const Carousel = () => {
  return (
    <div className="carousel w-full 
    rounded-lg overflow-hidden pt-10">
      
      <div  className="carousel-item relative w-full">
        <div className="absolute top-4 left-4 z-50">
        <ThemeToggle />
      </div>
        <img
          src="/public/StudyMate.png"
          className="w-full object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full rounded-lg overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1546"
          className="w-full object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
        </div>
      </div>
    </div>
  );
};

export default Carousel;

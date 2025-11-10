import React from "react";

const Carousel = () => {
  return (
    <div className="carousel w-full rounded-lg overflow-hidden">
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1932"
          className="w-full object-contain"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>

      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://plus.unsplash.com/premium_photo-1668197658521-1d5f97d60bcc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
          className="w-full overflow-hidden"
        />
        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

import React from "react";
import Carousel from "../components/Carousel";
import TopStudyPartners from "../components/TopStudyPartners";
import Testimonials from "../components/Testimonials";

const Home = () => {

  const goToHowItWorks = () => {
    window.location.href = "HowItWorks";
  };



  return (
    <div className="flex flex-col items-center">
      <Carousel></Carousel>
      <TopStudyPartners></TopStudyPartners>
      <button
        onClick={goToHowItWorks} 
        className="btn btn-ghost text-white border-white/30 justify-center mt-5"
      >
       See How It Works
      </button>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;

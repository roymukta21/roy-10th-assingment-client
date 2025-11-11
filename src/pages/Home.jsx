import React from "react";
import Carousel from "../components/Carousel";
import TopStudyPartners from "../components/TopStudyPartners";
import Testimonials from "../components/Testimonials";
import HowItWorks from "./HowItWorks";

const Home = () => {
  return (
    <div>
      <Carousel></Carousel>
      <TopStudyPartners></TopStudyPartners>
      <Testimonials></Testimonials>
      <HowItWorks></HowItWorks>
    </div>
  );
};

export default Home;

import React from "react";
import Carousel from "../components/Carousel";
//import TopStudyPartners from "../components/TopStudyPartners";
import Testimonials from "../components/Testimonials";
import TopStudyPartners from "../components/TopStudyPartners";
import Features from "../components/Features";
import Categories from "../components/Categories";
import StatisticsSection from "../components/StatisticsSection";
import BlogSection from "../components/BlogSection";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";

const Home = () => {

  const goToHowItWorks = () => {
    window.location.href = "HowItWorks";
  };



  return (
    <div className="flex flex-col items-center">
      <Carousel></Carousel>
      <TopStudyPartners/>
      <button
        onClick={goToHowItWorks} 
        className="btn btn-ghost  border-white/30 justify-center mt-5 rounded-xl shadow-lg bg-[#fef3c7] border hover:shadow-xl transition p-5 text-secondary m-4 w-full mx-auto max-w"
      >
       See How It Works
      </button>
      <Testimonials></Testimonials>
      <Features/>
      <StatisticsSection/>
      <Categories/>
      <BlogSection/>
      <Newsletter/>
      <FAQ/>
      <CTA/>
    </div>
  );
};

export default Home;

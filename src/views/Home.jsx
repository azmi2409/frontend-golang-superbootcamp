import React from "react";
import Hero from "../components/Hero";
import SiteFeatures from "../components/SiteFeatures";

const Home = () => {
  return (
    <div className="w-full md:px-2 lg:px-5 flex gap-20 flex-col mb-5">
      <Hero />
      <SiteFeatures />
    </div>
  );
};

export default Home;

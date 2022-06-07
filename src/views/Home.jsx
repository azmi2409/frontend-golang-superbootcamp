import React from "react";
import Hero from "../components/Hero";
import SiteFeatures from "../components/SiteFeatures";
import CategoryGrid from "../components/CategoryGrid";
import ProductGrid from "../components/ProductGrid";

const Home = () => {
  React.useEffect(() => {
    document.title = "Beeleaf.id - Home";
  }, []);

  return (
    <main className="w-full md:px-2 lg:px-5 flex gap-20 flex-col mb-5">
      <Hero />
      <SiteFeatures />
      <CategoryGrid />
      <ProductGrid />
    </main>
  );
};

export default Home;

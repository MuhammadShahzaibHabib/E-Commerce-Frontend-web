import React from "react";
import Hero from "../Components/Hero";
import LatestCollection from "../Components/LatestCollection";
import BestSeller from "../Components/BestSeller";
import OurPlicicies from "../Components/OurPlicicies";
import NewsLetterBox from "../Components/NewsLetterBox";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPlicicies />
      <NewsLetterBox />
    </div>
  );
};

export default Home;

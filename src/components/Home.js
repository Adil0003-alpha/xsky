import React from "react";
import Navbar from "./Navbar";
import PopularSlider from "./PopularSlider";
import TrendSlider from "./TrendSlider";

const Home = () => {
  return (
    <>
      <div className="main">
        <Navbar />
        <PopularSlider />
        <TrendSlider />
      </div>
    </>
  );
};

export default Home;

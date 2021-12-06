import React from "react";
import Categories from "../components/Categories";
import Slider from "../components/Slider";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Slider />
      <Categories />
    </div>
  );
}

export default Home;

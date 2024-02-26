import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import Search from "../components/Search";
import FindTour from "../components/FindTour";
import Info from "../components/Info";
import Stories from "../components/Stories";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Search />
      <Info />
      <FindTour />
      <Stories />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import Search from "../components/Search";
import FindTour from "../components/FindTour";
import Info from "../components/Info";
import Stories from "../components/Stories";
import Blog from "../components/Blog";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Search />
      <Info />
      <FindTour />
      <Stories />
      {/* <Blog /> */}
    </>
  );
};

export default Home;

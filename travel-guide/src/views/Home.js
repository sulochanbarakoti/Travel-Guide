import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import Search from "../components/Search";
import FindTour from "../components/FindTour";
import Info from "../components/Info";
import Stories from "../components/Stories";
import Blog from "../components/Blog";
import Featured from "../components/featured";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

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
      <Featured />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/slider";
import Search from "../components/Search";
import FindTour from "../components/FindTour";
import { Stack } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Stack gap={2}>
        <Navbar />
        <Slider />
        <Search />
        <FindTour />
      </Stack>
    </>
  );
};

export default Home;

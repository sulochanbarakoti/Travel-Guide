import React from "react";
import { Carousel } from "react-bootstrap";
import { trekingHimalayan, trekingCloud, elephantSafari } from "../asset/logic";

const Slider = () => {
  return (
    <Carousel fade id="carouselExample">
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src={trekingHimalayan}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={elephantSafari} alt="First slide" />
        <Carousel.Caption>
          <h3>Make Your Dream Come True!!!</h3>
          <p>
            Explore the beautiful lands of Nepal with Adventurous, Thrilling,
            and lifetime memorable trips.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img className="d-block w-100" src={trekingCloud} alt="First slide" />
        <Carousel.Caption>
          <h3>Make Your Dream Come True!!!</h3>
          <p>
            Explore the beautiful lands of Nepal with Adventurous, Thrilling,
            and lifetime memorable trips.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;

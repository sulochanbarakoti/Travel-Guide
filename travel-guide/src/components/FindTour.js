import React from "react";
import { Col, Container, Row, Image, Button } from "react-bootstrap";
import { treking } from "../asset/logic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FindTour = () => {
  var settings = {
    centerMode: true,
    centerPadding: "220px",
    arrows: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: "20px",
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };
  return (
    <Container className="findTour">
      <Row>
        <Col>
          <div className="text-start">
            <h5>Plan your trip to Nepal</h5>
            <h2 className="fw-bold">Where to next?</h2>
          </div>
          <div className="text-end mb-3">
            <Button variant="success">View all Destination</Button>
          </div>
        </Col>
      </Row>
      <Row className="d-flex">
        {/* <Col xs={12} md={4}>
          <div className="image">
            <Image
              style={{ height: "300px", width: "300px" }}
              src={elephantSafari}
              rounded
            />
          </div>
        </Col> */}
        <Col>
          <Slider {...settings}>
            <div>
              <Image
                style={{ height: "300px", width: "300px" }}
                src={treking}
                rounded
              />
              <h5 className="mt-2 fw-bold">Everest Base Camp Trek</h5>
            </div>
            <div>
              <Image
                style={{ height: "300px", width: "300px" }}
                src={treking}
                rounded
              />
            </div>
            <div>
              <Image
                style={{ height: "300px", width: "300px" }}
                src={treking}
                rounded
              />
            </div>
            <div>
              <Image
                style={{ height: "300px", width: "300px" }}
                src={treking}
                rounded
              />
            </div>
            <div>
              <Image
                style={{ height: "300px", width: "300px" }}
                src={treking}
                rounded
              />
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
  );
};

export default FindTour;

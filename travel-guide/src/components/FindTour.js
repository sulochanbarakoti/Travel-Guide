import React from "react";
import { Col, Container, Row, Image, Button, Card } from "react-bootstrap";
import { trekingHimalayan, trekingCloud, elephantSafari } from "../asset/logic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FindTour = () => {
  return (
    <Container className="findTour">
      <Row className="p-3">
        <Col>
          <div className="text-start">
            <h5>Plan your trip to Nepal</h5>
            <h2 className="fw-bold">Where to next?</h2>
          </div>
          <div className="text-end">
            <Button variant="outline-success">View all Destination</Button>
          </div>
        </Col>
      </Row>
      <Row className="p-3">
        <Col xs={12} md={4}>
          <Card className="findtour-card">
            <Card.Img
              src={trekingHimalayan}
              className="tour-img"
              alt="Nepal Trekking"
            />
          </Card>
          <div className="fw-bold p-2">Himalayan Trek</div>
        </Col>
        <Col xs={12} md={4}>
          <Card className="findtour-card">
            <Card.Img
              src={trekingCloud}
              className="tour-img"
              alt="Nepal Trekking"
            />
          </Card>
          <div className="fw-bold p-2">Trekking above cloud</div>
        </Col>
        <Col xs={12} md={4}>
          <Card className="findtour-card">
            <Card.Img
              src={elephantSafari}
              className="tour-img"
              alt="Nepal Trekking"
            />
          </Card>
          <div className="fw-bold p-2">Elephant Safari in Chitwan</div>
        </Col>
      </Row>
    </Container>
  );
};

export default FindTour;

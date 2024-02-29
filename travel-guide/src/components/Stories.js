import React from "react";
import { Button, Col, Container, Row, Image } from "react-bootstrap";
// import { elephantSafari } from "../asset/logic";
import { chitwan, kathmandu, pokhara, everest } from "../asset/logic";

import { stories } from "../data";

const Stories = () => {
  console.log(stories);
  return (
    <Container>
      <Row className="fw-bold">
        <Col>TRAVEL STORIES AND NEWS</Col>
      </Row>
      <Row>
        <Col>Explore our latest stories</Col>
        <Col className="text-end">
          <Button variant="outline-success" className="me-3">
            Read more news
          </Button>
          <Button variant="outline-success">Read more articles</Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Image className="story-thumb-img" src={kathmandu} thumbnail />
          <div className="story-thumb-text">
            <div></div>
            <div>18 of the best free things to do in Sauraha</div>
          </div>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Stories;

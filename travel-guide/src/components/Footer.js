import React from "react";
import { Col, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="pt-3">
      <Row className="bg-success text-white fw-semibold align-items-center">
        <Col className="text-start p-2 ms-5">@copyright 2024</Col>
        <Col className="text-end me-5">
          Developed By:{" "}
          <a
            className="text-white fw-bold"
            href="http://sulochanbarakoti.netlify.app/"
          >
            Sulochan Barakoti
          </a>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

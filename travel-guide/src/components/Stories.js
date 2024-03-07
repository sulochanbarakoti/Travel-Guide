import React from "react";
import {
  Button,
  Col,
  Container,
  Row,
  Image,
  CardGroup,
  Card,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Trip } from "../data";

const Stories = () => {
  const navigate = useNavigate();
  // Function to generate a random number between min (inclusive) and max (exclusive)
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  // Selecting four random objects from the array
  const randomObjects = Array.from(
    { length: 3 },
    () => Trip[getRandomNumber(0, Trip.length)]
  );

  const handleClick = (item) => {
    navigate("/blog" + "?id=" + item.tripId);
  };
  return (
    <Container>
      <Row className="fw-bold">
        <Col>TRAVEL STORIES AND NEWS</Col>
      </Row>
      <Row>
        <Col>
          <div className="fs-2 fw-bolder">Explore our latest stories</div>
        </Col>
        <Col className="text-end">
          <Button variant="outline-success" className="me-3">
            Read more news
          </Button>
          <Button variant="outline-success">Read more articles</Button>
        </Col>
      </Row>
      <Row className="mt-3 g-3">
        {randomObjects.map((item, index) => (
          <Col xs={12} md={4} key={index}>
            <Card>
              <Card.Img src={item.image} alt="Chitwan National Park" />
              <Card.Body>
                <Card.Title onClick={() => handleClick(item)}>
                  <a>{item.tripName}</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Stories;

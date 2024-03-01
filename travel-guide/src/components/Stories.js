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
// import { elephantSafari } from "../asset/logic";
import { chitwan, kathmandu, pokhara, everest } from "../asset/logic";

import { stories } from "../data";

const Stories = () => {
  console.log(stories);
  // Function to generate a random number between min (inclusive) and max (exclusive)
  const getRandomNumber = (min, max) =>
    Math.floor(Math.random() * (max - min) + min);

  // Selecting four random objects from the array
  const randomObjects = Array.from(
    { length: 4 },
    () => stories[getRandomNumber(0, stories.length)]
  );
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
      <Row className="mt-3">
        <Col>
          <CardGroup>
            <Card className="bg-dark text-white">
              <Card.Img src={chitwan} alt="Chitwan National Park" />
              <Card.ImgOverlay>
                <Card.Title>Chitwan National Park</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.ImgOverlay>
            </Card>
          </CardGroup>
        </Col>
        <Col>
          <Row xs={1} md={2} className="g-2">
            {randomObjects.map((item) => (
              <Col key={item.id}>
                <Card className="bg-dark text-white">
                  <Card.Img src={item.image} alt="Chitwan National Park" />
                  <Card.ImgOverlay>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Stories;

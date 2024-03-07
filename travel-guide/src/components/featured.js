import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Featured = () => {
  return (
    <div className="pt-5 container">
      <Card className="text-center">
        <Card.Header>Featured</Card.Header>
        <Card.Body>
          <Card.Title>Make Your Dream Come True!!!</Card.Title>
          <Card.Text>
            Explore the beautiful lands of Nepal with Adventurous, Thrilling,
            and lifetime memorable trips followed by welcoming friendly people,
            geographical and cultural diversity.
          </Card.Text>
          <Button variant="primary">View all Deals</Button>
        </Card.Body>
        <Card.Footer className="text-muted">2 days ago</Card.Footer>
      </Card>
    </div>
  );
};

export default Featured;

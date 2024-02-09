import React from "react";
import { Navbar, Nav, Container, Form, Button } from "react-bootstrap";
import {
  trekingHimalayan,
  trekingCloud,
  elephantSafari,
  logo,
} from "../asset/logic";

const Menu = () => {
  return (
    <Navbar className="navbar-top" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <h4>Explore & Trek In Nepal</h4>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto fw-bold  pe-2">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Tour</Nav.Link>
            <Nav.Link href="#about">Activity</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Container>
    </Navbar>
  );
};

export default Menu;

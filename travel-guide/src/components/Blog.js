import React, { useState } from "react";
import { Button, Col, Container, Image, Row, Tab, Tabs } from "react-bootstrap";
import Menu from "./Navbar";
import { Trip } from "../data";
import { FaHotel, FaCity, FaMountain, FaBusAlt, FaWifi } from "react-icons/fa";
import { IoIosPartlySunny } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import { FaBowlFood } from "react-icons/fa6";

const Blog = () => {
  const [tripData, setTripData] = useState(Trip[0]);
  console.log(tripData);
  return (
    <>
      <Row>
        <Menu />
      </Row>
      <Container>
        <Row>
          <Col xs={12} md={8}>
            <Row className=" fw-bold pt-5">
              <Col>
                <div className="fs-2 text-decoration-underline">
                  {tripData.tripName}
                </div>
              </Col>
              <Col className="text-muted d-flex align-items-center justify-content-end">
                <div>{tripData.days} Days</div>
              </Col>
            </Row>
            <Row>
              <div>
                <Image src={tripData.image} thumbnail />
              </div>
            </Row>
            <Row className="mt-3 p-3 bg-success rounded">
              <Row className="align-items-center">
                <Col>
                  <Button variant="success-outline">
                    <FaHotel size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Accomodation
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.accomodation}
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success-outline">
                    <FaCity size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Arrival City
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.arrivalCity}
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success-outline">
                    <IoIosPartlySunny size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Best Season
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.bestSeason}
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success-outline">
                    <PiHandshakeFill size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Guide
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.guide}
                    </div>
                  </Button>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col>
                  <Button variant="success-outline">
                    <FaMountain size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Maximum Altitude
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.maximumAltitude}
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success-outline">
                    <FaBowlFood size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Meals
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.meals}
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success-outline">
                    <FaBusAlt size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Transportation
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.transportation}
                    </div>
                  </Button>
                </Col>
                <Col>
                  <Button variant="success-outline">
                    <FaWifi size={25} color="white" />
                    <div className="fw-bold text-white text-decoration-underline">
                      Wifi
                    </div>
                    <div className="text-white">
                      {tripData.tripDetails.wifi}
                    </div>
                  </Button>
                </Col>
              </Row>
            </Row>
            <Row>
              <Tabs
                defaultActiveKey="profile"
                id="fill-tab-example"
                className="mb-3"
                fill
              >
                <Tab eventKey="home" title="Home">
                  Tab content for Home
                </Tab>
                <Tab eventKey="profile" title="Profile">
                  Tab content for Profile
                </Tab>
                <Tab eventKey="longer-tab" title="Loooonger Tab">
                  Tab content for Loooonger Tab
                </Tab>
                <Tab eventKey="contact" title="Contact" disabled>
                  Tab content for Contact
                </Tab>
              </Tabs>
            </Row>
          </Col>
          <Col xs={12} md={4}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Blog;

import React, { useEffect, useState } from "react";
import {
  Button,
  Col,
  Container,
  Image,
  Nav,
  Row,
  Tab,
  Tabs,
} from "react-bootstrap";
import Menu from "./Navbar";
import { Trip } from "../data";
import { FaHotel, FaCity, FaMountain, FaBusAlt, FaWifi } from "react-icons/fa";
import { IoIosPartlySunny } from "react-icons/io";
import { PiHandshakeFill } from "react-icons/pi";
import { FaBowlFood } from "react-icons/fa6";
import { MdDoNotDisturb } from "react-icons/md";
import { useLocation } from "react-router-dom";
// import { Trip } from "../data";

const Blog = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const [tripData, setTripData] = useState();
  // Function to find a story by its ID
  const findById = async (id) => {
    try {
      const oneTrip = await Trip.find((story) => story.tripId == id);
      setTripData(oneTrip);
    } catch (error) {
      console.error("Error finding trip:", error);
    }
  };
  useEffect(() => {
    // Ensure id is defined before calling findById
    if (id !== undefined) {
      findById(id);
    }
  }, [tripData]);
  return (
    tripData && (
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
                  <Image src={tripData.image} />
                </div>
              </Row>
              <Row className="mt-3 bg-success rounded">
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
              <Row className="pt-3">
                <Tab.Container defaultActiveKey="overview">
                  <Row className="border border-3 rounded p-3 m-1">
                    <Nav variant="pills" defaultActiveKey="overview">
                      <Nav.Item>
                        <Nav.Link eventKey="overview">Overview</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="itinerary">Itinerary</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="costexclude">
                          Cost Excluded
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </Row>
                  <Row>
                    <Tab.Content>
                      <Tab.Pane eventKey="overview">
                        {tripData.overview.map((over, index) => (
                          <ul key={index}>{over}</ul>
                        ))}
                      </Tab.Pane>
                      <Tab.Pane eventKey="itinerary">
                        {tripData.itinerary.map((day, index) => (
                          <ul key={index}>
                            <strong>Day {index + 1}:</strong> {day}
                          </ul>
                        ))}
                      </Tab.Pane>
                      <Tab.Pane eventKey="costexclude">
                        {tripData.costExcluded.map((cost, index) => (
                          <ul key={index}>
                            <MdDoNotDisturb color="red" /> {cost}
                          </ul>
                        ))}
                      </Tab.Pane>
                    </Tab.Content>
                  </Row>
                </Tab.Container>
              </Row>
            </Col>
            <Col xs={12} md={4}></Col>
          </Row>
        </Container>
      </>
    )
  );
};

export default Blog;

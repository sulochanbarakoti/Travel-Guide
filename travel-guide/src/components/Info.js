import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaPlaneArrival } from "react-icons/fa";
import { IoCalendarSharp } from "react-icons/io5";
import { BiTrip } from "react-icons/bi";

const Info = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div className="info-box">
            <FaPlaneArrival size={50} color="green" />
            <h4>Pick Destination</h4>
            <div>
              We are specialized in Trekking, Touring, Climbing adventure
              activities of Nepal. We also organaize Tibet and Bhutan tours.
              Where do you want to travel?
            </div>
          </div>
        </Col>
        <Col xs={12} md={4}>
          <div className="info-box">
            <IoCalendarSharp size={50} color="green" />
            <h4>Select Date</h4>
            <div>
              Let us know your travel date with your tour details, we will help
              you to pick a best time and months so that you will have your trip
              lifetime memorable.
            </div>
          </div>
        </Col>
        <Col>
          <div className="info-box">
            <BiTrip size={50} color="green" />
            <h4>Book Your Trip</h4>
            <div>
              Booking procedure with Great Adventure Treks is easy. You can make
              direct payment trough the trip url. We 30% - 40% take booking fee
              of package price.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Info;

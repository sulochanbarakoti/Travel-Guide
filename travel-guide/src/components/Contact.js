import React from "react";
import {
  Col,
  Container,
  Form,
  Row,
  Stack,
  Image,
  Button,
} from "react-bootstrap";
import { logo } from "../asset/logic";
import { MdEmail } from "react-icons/md";
import { BiSolidPhoneCall } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const Contact = () => {
  return (
    <Container className="mt-5">
      <Row className="border border-2 rounded">
        <Col>
          <Row className="mt-4">
            <div className="fs-3 fw-bolder">Travel with Us!</div>
            <div>
              Join us on an unforgettable travel experience that will leave you
              with memories to cherish for a lifetime.
            </div>
            <Form className="p-3 g-2">
              <Stack gap={4}>
                <Form.Control type="text" placeholder="Full Name*" />
                <Form.Control
                  type="text"
                  placeholder="Please Give Your Tour Title*"
                />
                <Form.Control type="email" placeholder="Email Address*" />
                <Form.Control type="text" placeholder="No of Traveler(s)*" />
                <Form.Control
                  type="text"
                  as="textarea"
                  rows={4}
                  placeholder="Message or Question?"
                />
                <Button variant="success" type="submit">
                  {" "}
                  Submit
                </Button>
              </Stack>
            </Form>
          </Row>
        </Col>
        <Col>
          <Row className="justify-content-center">
            <Image src={logo} className="pt-5" style={{ width: "auto" }} />
          </Row>
          <Row className="mt-5">
            <div className="fs-4 fw-bold">Contact Information</div>
            <div>
              <MdEmail className="pe-1" />
              exploreandtrekinnepal@gmail.com
            </div>
            <div>
              <BiSolidPhoneCall className="pe-1" />
              0123456789
            </div>
            <div>
              <ImLocation2 className="pe-1" />
              2025 M Street, NW, Washington, DC, 20036
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;

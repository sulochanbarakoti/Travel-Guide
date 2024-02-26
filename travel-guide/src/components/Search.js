import React, { useState } from "react";
import {
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";

import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { activities, searchData } from "../data";

const Search = () => {
  const [activity, setActivity] = useState("");
  return (
    <Container id="search-container">
      <Row className="p-4">
        <div id="search-bar" className="p-1 bg-white rounded">
          <Form className="d-flex flex-column flex-md-row p-1">
            <Typeahead
              id="autocomplete-search"
              placeholder="Search activities..."
              className="m-1 w-100"
              options={searchData}
            />
            <InputGroup className="m-1" style={{ width: "auto" }}>
              <DropdownButton
                variant="outline-secondary"
                title={!activity ? "Choose the activities" : activity}
              >
                {activities.map((activity, index) => (
                  <Dropdown.Item
                    key={index}
                    onClick={() => setActivity(activity.name)}
                  >
                    {activity.name}
                  </Dropdown.Item>
                ))}
              </DropdownButton>
            </InputGroup>
            {/* <Link to="/search"> */}
            <Button className="m-1" style={{ width: "60%" }} variant="success">
              Search
            </Button>
            {/* </Link> */}
          </Form>
        </div>
      </Row>
    </Container>
  );
};

export default Search;

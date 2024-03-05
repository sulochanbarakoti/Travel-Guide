import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap"; // Assuming you're using Bootstrap for styling

// Sample data for blog posts
const posts = [
  {
    id: 1,
    title: "Post 1",
    image: "https://via.placeholder.com/150",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Post 2",
    image: "https://via.placeholder.com/150",
    content:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    title: "Post 3",
    image: "https://via.placeholder.com/150",
    content:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  // Add more posts as needed
];

const Blog = () => {
  // Get the latest post
  const latestPost = posts[0];
  // Get the remaining posts (excluding the latest post)
  const otherPosts = posts.slice(1);

  return (
    <Container className="my-5">
      <Row>
        {/* Latest Post (half width) */}
        <Col md={6}>
          <Card>
            <Card.Img
              variant="top"
              src={latestPost.image}
              alt={latestPost.title}
            />
            <Card.Body>
              <Card.Title>{latestPost.title}</Card.Title>
              <Card.Text>{latestPost.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        {/* Other Posts (half width) */}
        <Col md={6}>
          <Row>
            {otherPosts.map((post) => (
              <Col key={post.id} className="mb-3">
                <Card>
                  <Row className="no-gutters">
                    <Col md={4}>
                      <Card.Img src={post.image} alt={post.title} />
                    </Col>
                    <Col md={8}>
                      <Card.Body>
                        <Card.Title>{post.title}</Card.Title>
                        {/* Optionally include post summary here */}
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Blog;

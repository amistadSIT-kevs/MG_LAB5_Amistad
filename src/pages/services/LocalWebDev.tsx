import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import webImg from "../../assets/website_development.webp";

const LocalWebDev = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container className="mt-4">

      {!showDetails && (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card onClick={() => setShowDetails(true)} style={{ cursor: "pointer" }}>
              <Card.Img variant="top" src={webImg} />
              <Card.Body>
                <Card.Title>Website Development for Local Businesses</Card.Title>
                <Card.Text>
                  Click to learn more about our website development services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {showDetails && (
        <Row>
          <Col md={6}>
            <img
              src={webImg}
              className="img-fluid rounded"
              alt="Website Development"
            />
          </Col>

          <Col md={6}>
            <h2>Website Development Service</h2>

            <p>
              We create modern and responsive websites for restaurants,
              shops, and local businesses to help them attract more
              customers online and build a strong digital presence.
            </p>

            <ul>
              <li>Responsive website design</li>
              <li>Business landing pages</li>
              <li>Online menu or product catalog</li>
              <li>Contact forms and Google Maps integration</li>
              <li>SEO optimization</li>
            </ul>

            <Button variant="secondary" onClick={() => setShowDetails(false)}>
              Back
            </Button>
          </Col>
        </Row>
      )}

    </Container>
  );
};

export default LocalWebDev;
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import setupImg from "../../assets/internet_setup.png";

const InternetSetup = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container className="mt-4">

      {!showDetails && (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card onClick={() => setShowDetails(true)} style={{ cursor: "pointer" }}>
              <Card.Img variant="top" src={setupImg} />
              <Card.Body>
                <Card.Title>Internet Setup</Card.Title>
                <Card.Text>
                  Click to learn more about our internet setup services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {showDetails && (
        <Row>
          <Col md={6}>
            <img src={setupImg} className="img-fluid rounded" alt="Internet Setup" />
          </Col>

          <Col md={6}>
            <h2>Internet Setup Service</h2>

            <p>
              We help homes and small businesses install reliable internet
              connections and configure Wi-Fi networks for better coverage.
            </p>

            <ul>
              <li>Router installation</li>
              <li>Wi-Fi network setup</li>
              <li>Internet speed optimization</li>
              <li>Network troubleshooting</li>
              <li>Small business network setup</li>
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

export default InternetSetup;
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useState } from "react";
import repairImg from "../../assets/computer_repair.jpg";

const ComputerRepair = () => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Container className="mt-4">

      {!showDetails && (
        <Row className="justify-content-center">
          <Col md={6}>
            <Card onClick={() => setShowDetails(true)} style={{ cursor: "pointer" }}>
              <Card.Img variant="top" src={repairImg} />
              <Card.Body>
                <Card.Title>Computer Repair</Card.Title>
                <Card.Text>
                  Click this card to learn more about our computer repair services.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      )}

      {showDetails && (
        <Row>
          <Col md={6}>
            <img src={repairImg} alt="Computer Repair" className="img-fluid rounded" />
          </Col>

          <Col md={6}>
            <h2>Computer Repair Service</h2>

            <p>
              Our computer repair service helps students, professionals, and
              local residents solve common hardware and software problems.
              We diagnose and repair desktops and laptops to restore their
              performance.
            </p>

            <p>
              Services include:
            </p>

            <ul>
              <li>Hardware troubleshooting and replacement</li>
              <li>Virus and malware removal</li>
              <li>Operating system installation</li>
              <li>Computer performance optimization</li>
              <li>Data backup and recovery</li>
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

export default ComputerRepair;
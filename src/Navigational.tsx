import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Navigational() {

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">ATechService</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            <NavDropdown title="Services" id="services-dropdown">
            <NavDropdown.Item as={Link} to="/services/computer-repair">
                Computer Repair
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/services/internet-setup">
                Internet Setup
            </NavDropdown.Item>

            <NavDropdown.Item as={Link} to="/services/local-web-dev">
                Website Development
            </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
    )
  }
  
  export default Navigational
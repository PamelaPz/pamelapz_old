import './App.scss';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
      <Container>
        <Row>
          <Col lg="12">
            <Navbar bg="transparent" expand="lg" fixed="top">
              <Navbar.Brand href="#home">Pamela Pérez</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="#home">Instagram</Nav.Link>
                  <Nav.Link href="#link">Linkedin</Nav.Link>
                  <Nav.Link href="#link">Menu |||</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
  );
}

export default Menu;

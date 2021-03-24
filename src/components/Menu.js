import './App.scss';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import youtube from '../images/youtube.png';
import menu from '../images/Menu.png';
import logo from '../images/logo/logo.png';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

function Menu() {
  return (
      <Container fluid>
        <Row>
          <div className="menu">
          <Col lg="12">
            <Navbar fixed="top">
              <Navbar.Brand href="" className="logo_img"><img src={logo} alt="Illustration by Freepik Storyset" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                  <Nav.Link href="https://wa.me/5214423183544?text=Hola!%20Me%20interesa%20saber%20más%20de%20tu%20trabajo"><img src={whatsapp} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  <Nav.Link href="https://www.youtube.com/" id="youtube"><img src={youtube} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  <Nav.Link href="https://www.instagram.com/pamelapz.web/"><img src={instagram} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/pamela-perez-02/"><img src={linkedin} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  <a href="#link" className="menu_img"><img src={menu} alt="Illustration by Freepik Storyset" /></a>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          </div>
        </Row>
      </Container>
  );
}

export default Menu;

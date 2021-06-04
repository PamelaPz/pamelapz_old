import '../assets/App.scss';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import whatsapp from '../assets/images/whatsapp.png';
// import youtube from '../images/youtube.png';
import menu from '../assets/images/Menu.png';
import logo from '../assets/images/logo/logo-sin-fondo.png';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="menu">
      <Container fluid>
        <Row>
          <Col lg="12">
            <Navbar className="fixed-top">
              <Link to="/"><div className="logo_img"><img src={logo} alt="Illustration by Freepik Storyset" /></div></Link>
              {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
              <div className="ml-auto">
                <Nav>
                  <Nav.Link href="https://wa.me/5214423183544?text=Hola!%20Me%20interesa%20saber%20más%20de%20tu%20trabajo"><img src={whatsapp} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  {/* <Nav.Link href="https://www.youtube.com/" id="youtube"><img src={youtube} alt="Illustration by Freepik Storyset" /></Nav.Link> */}
                  <Nav.Link href="https://www.instagram.com/pamelapz.web/"><img src={instagram} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  <Nav.Link href="https://www.linkedin.com/in/pamela-perez-02/"><img src={linkedin} alt="Illustration by Freepik Storyset" /></Nav.Link>
                  <a href="#link" className="menu_img "><img src={menu} alt="Illustration by Freepik Storyset" /></a>
                </Nav>
              </div>
            </Navbar>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Menu;

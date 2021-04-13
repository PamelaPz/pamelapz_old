import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Footer() {
  return (
      <footer className="footer bg-bluebg">
        <p><span style={{paddingRight: ".2rem"}}>&copy;</span> <span style={{paddingRight: ".5rem"}}>2021.</span> <span style={{paddingRight: ".5rem"}}>Hecho con <span className="text-pink">&#x2764;</span> por <span className="text-pink">Pamela.pz</span>. </span> Todos los derechos reservados.</p>
      </footer>
  );
}

export default Footer;

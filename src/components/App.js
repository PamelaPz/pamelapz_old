import './App.scss';
import { Container } from 'react-bootstrap';
import Menu from './Menu';
import Fullpage from './Fullpage';

function App() {
  return (
      <Container fluid>
        <Menu/>
        <Fullpage />
        {/* <Row> */}
          {/* <Col lg="12">
          </Col>
          <section className="section container content" id="name">
            <Row className="name">
              <Col lg="6">
                <div className="wrapper_name">
                  <div>
                    <p className="super_title">Pamela <br /> Pérez</p>
                  </div>
                  <div>
                    <span> <hr width="50%" /> <hr width="80%"/></span>
                  </div>
                  <div>
                    <p className="super_subtitle">Maquetador / <br/>Desarrollador Frontend</p>
                  </div>
                </div>
              </Col>
              <Col lg="6">
                <div className="wrapper_portfolio">
                  <h1 className="title_section">Portafolio</h1>
                </div>
              </Col>
            </Row>
          </section>
          <section className="section content container" id="welcome">
            <h1 className="title">Bienvenido(a)</h1>
            <div className="wrapper_text">
            <p className="text">Geek de nacimiento y corazón, amante de los animales, la tecnología y la música. </p>
            <p className="text">Mi principal objetivo se concentra en la creatividad, innovación y programación de ideas que posteriormente se puedan y deban desarrollar para solucionar necesidades del mundo en general.</p>
            <p className="text">Procuro ponerme retos sin importar cuánto me tome lograrlo, porque intentar es lo que cuenta.</p>
            <p className="text">Escribir más :v</p>
            </div>
          </section>
          <section className="section content " id="skills">
            Skills y Experiencia */}
          {/* </section>
          <section className="section content" id="porfolio">
            Portafolio / Enlaces
          </section>
          <footer> Footer </footer>
        </Row> */}
      </Container>
  );
}

export default App;

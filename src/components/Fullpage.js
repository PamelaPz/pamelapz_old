import React from 'react';
import imgHome from '../images/home.png';
import ReactFullpage from '@fullpage/react-fullpage';
import { Row, Col } from 'react-bootstrap';

const Fullpage = () => (
  <ReactFullpage
    //fullpage options
    licenseKey = {'YOUR_KEY_HERE'}
    scrollingSpeed = {900} /* Options here */
    navigation
    // sectionsColor={["", "", "", ""]} // #5DB3C2 , #219FB5, #177282, #0A2F36
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <section className="section capa" id="name">
            <div>
            <Row className="name">
              <Col lg="6" sm="12">
                <div className="wrapper_name">
                  <div>
                    <p className="super_title">Pamela <br /> Pérez</p>
                  </div>
                  {/* <div>
                    <span> <hr width="50%" /> <hr width="80%" style={{backgroundColor: 'white'}}/></span>
                  </div> */}
                  <div>
                    <p className="super_subtitle">Maquetador / <br/>Desarrollador Frontend</p>
                  </div>
                </div>
              </Col>
              <Col lg="6" sm="12">
                <div className="wrapper_portfolio">
                  {/* <h1 className="title_section">Portafolio</h1> */}
                  <div className="wrapper_img">
                    <img src={imgHome} alt="" width="600rem"/>
                  </div>
                </div>
              </Col>
            </Row>
            </div>
          </section>
          <section className="section" id="welcome">
            <div className="container">
              <h1 className="title">Bienvenido(a)</h1>
              <div className="wrapper_text">
                <p className="text">Geek de nacimiento y corazón, amante de los animales, la tecnología y la música. </p>
                <p className="text">Mi principal objetivo se concentra en la creatividad, innovación y programación de ideas que posteriormente se puedan y deban desarrollar para solucionar necesidades del mundo en general.</p>
                <p className="text">Procuro ponerme retos sin importar cuánto me tome lograrlo, porque intentar es lo que cuenta.</p>
                <p className="text">Escribir más :v</p>
              </div>
            </div>
          </section>
          <section className="section" id="skills">
            <div className="container">
              Skills y Experiencia
            </div>
          </section>
          <section className="section" id="porfolio">
            <div className="container">
              Portafolio / Enlaces
              <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
              </button>
            </div>
          </section>
        </ReactFullpage.Wrapper>
      );
    }}
    
  />
);

export default Fullpage;
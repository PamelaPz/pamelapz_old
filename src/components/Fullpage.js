import React from 'react';
import Menu from './Menu';
import terminal from '../images/terminal_pink.png';
import girl1 from '../images/version-control-animate.svg';
import ReactFullpage from '@fullpage/react-fullpage';
// import { Row, Col } from 'react-bootstrap';

const Fullpage = () => (
  <>
    <Menu />
    <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {900}
      navigation
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <section className="section capa" id="home">
              {/* <Container> */}
              {/* <div className=""> */}
                <div className="name row row_reverse">
                  <div className="col-lg-6 col-sm-12" >
                    <div className="wrapper_name">
                      <div>
                        <p className="super_title">Pamela Pérez</p>
                      </div>
                      <div className="wrapper_divider">
                        <img src={terminal} alt=""/>
                      </div>
                      <div className="wrapper_subtitle">
                        <p className="super_subtitle">Maquetador / <br/>Desarrollador Frontend</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-sm-12" >
                    <div className="wrapper_portfolio">
                      <div className="capa_binary"></div>
                      <div className="wrapper_img">
                        <img src={girl1} alt=""/>
                      </div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              {/* </Container> */}
            </section>
            <section className="section" id="welcome">
              <div className="container">
                {/* <h1 className="title">Bienvenido(a)</h1>
                <div className="wrapper_text">
                  <p className="text">Geek de nacimiento y corazón, amante de los animales, la tecnología y la música. </p>
                  <p className="text">Mi principal objetivo se concentra en la creatividad, innovación y programación de ideas que posteriormente se puedan y deban desarrollar para solucionar necesidades del mundo en general.</p>
                  <p className="text">Procuro ponerme retos sin importar cuánto me tome lograrlo, porque intentar es lo que cuenta.</p>
                  <p className="text">Escribir más :v</p>
                </div> */}
              </div>
            </section>
            {/* <section className="section" id="skills">
              <div className="container">
                Skills y Experiencia
              </div>
            </section> */}
            {/* <section className="section" id="porfolio">
              <div className="container">
                Portafolio / Enlaces
                <button onClick={() => fullpageApi.moveSectionDown()}>
                  Click me to move down
                </button>
              </div>
            </section> */}
          </ReactFullpage.Wrapper>
        );
      }}
      
    />
  </>
);

export default Fullpage;
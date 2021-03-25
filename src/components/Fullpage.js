import React from 'react';
import Menu from './Menu';
import linkedin from '../images/linkedin.png';
import instagram from '../images/instagram.png';
import whatsapp from '../images/whatsapp.png';
import terminal from '../images/terminal_pink.png';
import ReactFullpage from '@fullpage/react-fullpage';

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
            <section className="section" id="home">
                <div className="wrapper row_reverse">
                  <div className="column-12 colum-sm-12" >
                    <div className="wrapper_name">
                      <div>
                        <p className="super_title">Pamela <br /> Pérez</p>
                      </div>
                      <div className="wrapper_divider">
                        <img src={terminal} alt=""/>
                      </div>
                      <div className="wrapper_subtitle">
                        <p className="super_subtitle">Maquetador / <br/>Desarrollador Frontend</p>
                      </div>
                    </div>
                  </div>
                </div>
            </section>

            <section className="section" id="quien">
              <div className="wrapper column-12 colum-sm-12 row_reverse" >
                <div className="wrapper_name">
                  <div>
                    <p className="super_title">¿Quién Soy?</p>
                  </div>
                  <div className="wrapper_divider">
                    <img src={terminal} alt=""/>
                  </div>
                  <div className="wrapper_subtitle p_wrap">
                    <p className="super_subtitle">una chica que ama la tecnología, programar y ayudar a los demás</p>
                  </div>
                  <div className="wrapper_btn">
                    <a href="#i"><p>Saber más</p></a>
                  </div>
                </div>
                </div>
            </section>

            <section className="section" id="portfolio">
              <div className="wrapper column-12 colum-sm-12 row_reverse" >
                <div className="wrapper_name">
                  <div>
                    <p className="super_title">Portafolio</p>
                  </div>
                  <div className="wrapper_divider">
                    <img src={terminal} alt=""/>
                  </div>
                  <div className="wrapper_subtitle p_wrap">
                    <p className="super_subtitle">mira algunos de los sitios que he desarrollado y personalizado</p>
                  </div>
                  <div className="wrapper_btn">
                    <a href="#i"><p>Ir a mirar</p></a>
                  </div>
                </div>
              </div>
            </section>

            <section className="section" id="contact">
              <div className="wrapper column-12 colum-sm-12 row_reverse" >
                <div className="wrapper_name">
                  <div>
                    <p className="super_title">contáctame</p>
                  </div>
                  <div className="wrapper_divider ">
                    <img src={terminal} alt="terminal"/>
                  </div>
                  <div className="wrapper_subtitle p_wrap mt-2">
                    <p className="super_subtitle">jpamelapz02@gmail.com</p>
                  </div>
                  <div className="wrapper_socials">
                    <a href="#i" className="icon_social"> <img src={whatsapp} alt="whatsapp"/></a>
                    <a href="#i" className="icon_social"> <img src={instagram} alt="instagram"/></a>
                    <a href="#i" className="icon_social"> <img src={linkedin} alt="linkedin"/></a>
                  </div>
                </div>
              </div>
            </section>
          </ReactFullpage.Wrapper>
        );
      }}
      
    />
  </>
);

export default Fullpage;
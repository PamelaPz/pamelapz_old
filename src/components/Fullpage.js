import React from 'react';
import linkedin from '../assets/images/linkedin.png';
import instagram from '../assets/images/instagram.png';
import whatsapp from '../assets/images/whatsapp.png';
import terminal from '../assets/images/terminal_pink.png';
import ReactFullpage from '@fullpage/react-fullpage';
import { Link } from "react-router-dom";

const Fullpage = () => (
  <>
      <ReactFullpage
        licenseKey = {'YOUR_KEY_HERE'}
        scrollingSpeed = {900}
        navigation
        sectionsColor={["#282c34", "#ff5f45", "#0798ec"]}
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
                      <Link className="link" to="/iam"><p>Saber más</p></Link>
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
                    <Link className="link" to="/portfoio"><p>Ir a mirar</p></Link>
                    </div>
                  </div>
                </div>
              </section>

              {/* section contacto */}
              <section className="section" id="contact">
                <div className="wrapper column-12 colum-sm-12 row_reverse" >
                  <div className="wrapper_name">
                    <div>
                      <p className="super_title">contáctame</p>
                    </div>
                    <div className="wrapper_divider ">
                      <img src={terminal} alt="terminal"/>
                    </div>
                    <div className="wrapper_subtitle p_wrap mt-2 hvr-sweep-to-left">
                      <p className="super_subtitle" id="email"><a className="text-white without_decoration" href="mailto:jpamelapz02@gmail.com">jpamelapz02@gmail.com</a> </p>
                    </div>
                    <div className="wrapper_socials">
                      <a href="https://wa.me/5214423183544?text=Hola!%20Me%20interesa%20saber%20más%20de%20tu%20trabajo" className="icon_social"> <img src={whatsapp} alt="whatsapp"/></a>
                      <a href="https://www.instagram.com/pamelapz.web/" className="icon_social"> <img src={instagram} alt="instagram"/></a>
                      <a href="https://www.linkedin.com/in/pamela-perez-02/" className="icon_social"> <img src={linkedin} alt="linkedin"/></a>
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
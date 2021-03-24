import React from 'react';
import Menu from './Menu';
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
                      <p className="super_subtitle">una chica que ama la tecnología, programar y ayudar a los demás.</p>
                    </div>
                    <div className="wrapper_btn">
                      <a href="#i"><p>Saber más</p></a>
                    </div>
                  </div>
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
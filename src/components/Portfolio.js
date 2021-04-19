import React from "react";
import terminal from '../assets/images/terminal_pink.png';
import sitio1 from '../assets/images/sitios/juridico.png';
import sitio2 from '../assets/images/sitios/e-firma.png';
import sitio3 from '../assets/images/sitios/broad.png';
import sitio4 from '../assets/images/sitios/filex.png';
import sitio5 from '../assets/images/sitios/enola_space.png';
import sitio6 from '../assets/images/sitios/capital_amigo.png';
import Footer from './Footer';
import scroll from '../assets/images/mouse_scroll.png';
import { Col, Row } from 'react-bootstrap';

function Portfolio() {
  return (
    <>
        <div className="content-sm">
            <section className="section without_bg" id="cv">
                <div className="wp_scroll"><div className="line_scroll"></div> <div className="wp_img"><img className="mouse" src={scroll} alt=""/> <div className="dot"></div> </div></div>
                <div className="wrapper column-12 colum-sm-12 row_reverse" >
                    <div className="wrapper_name" style={{zIndex: "5"}}>
                        <div>
                            <p className="super_title">Portafolio</p>
                        </div>
                        <div className="wrapper_divider">
                            <img src={terminal} alt=""/>
                        </div>
                        <div className="wrapper_subtitle p_wrap">
                            <p className="super_subtitle">mira algunos de los sitios que he desarrollado y personalizado</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg_white text-bluebg soy-pt">
            <Row className="pt-6">
                    <Col xs="12" lg="12">
                        <div className="wrapper_title-section ">
                            <div className="line_hr"> <hr /> </div>
                            <p className="">Sitios</p>
                        </div>
                    </Col>
                    <Col xs="12" lg="12">
                        <Row>
                            <Col xs="12" lg="6">
                                <div className="wrapper_cards mr-4">
                                    <div className="wrapper_card ml-auto">
                                        <div className="capa">
                                            <div className="wp_sitio-name"><p className="title-p text-white">Jurísico Martínez</p></div>
                                        </div>
                                        <img src={sitio1} alt="" />
                                    </div>
                                    <div className="wrapper_card ml-auto">
                                        <div className="capa">
                                            <div className="wp_sitio-name"><p className="title-p text-white">Broad</p></div>
                                        </div>
                                        <img src={sitio3} alt="" />
                                    </div>
                                    <div className="wrapper_card ml-auto">
                                        <div className="capa">
                                            <div className="wp_sitio-name"><p className="title-p text-white">Filex</p></div>
                                        </div>
                                        <img src={sitio4} alt="" />
                                    </div>
                                </div>
                            </Col>
                            <Col xs="12" lg="6">
                                <div className="wrapper_cards ml-4">
                                    <div className="wrapper_card mr-auto first-top">
                                        <div className="capa">
                                            <div className="wp_sitio-name"><p className="title-p text-white">Enola Space</p></div>
                                        </div>
                                        <img src={sitio5} alt="" />
                                    </div>
                                    <div className="wrapper_card mr-auto">
                                        <div className="capa">
                                            <div className="wp_sitio-name"><p className="title-p text-white">Capital Amigo</p></div>
                                        </div>
                                        <img src={sitio6} alt="" />
                                    </div>
                                    <div className="wrapper_card mr-auto">
                                        <div className="capa">
                                            <div className="wp_sitio-name"><p className="title-p text-white">Propuesta e-firma</p></div>
                                        </div>
                                        <img src={sitio2} alt="" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </section>
            <Footer />
        </div>
    </>
  );
}

export default Portfolio;
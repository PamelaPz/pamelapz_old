import React from "react";
import terminal from '../assets/images/terminal_pink.png';
import sitio1 from '../assets/images/sitios/juridico.png';
import sitio2 from '../assets/images/sitios/juridico_1.png';
import sitio3 from '../assets/images/sitios/juridico_2.png';
import sitio4 from '../assets/images/sitios/juridico_3.png';
import sitio5 from '../assets/images/sitios/juridico_4.png';
import sitio6 from '../assets/images/sitios/juridico_5.png';
import Footer from './Footer';
import scroll from '../assets/images/mouse_scroll.png';
import { Col, Row } from 'react-bootstrap';

function Site() {
  return (
    <>
        <div className="content-sm">
            <section className="section">
                <div className="wp_scroll"><div className="line_scroll"></div> <div className="wp_img"><img className="mouse" src={scroll} alt=""/> <div className="dot"></div> </div></div>
                <div className="wrapper column-12" >
                    <div className="wrapper_site">
                        <div className="wp-text">
                            <div className="wrapper_divider">
                                <img src={terminal} alt=""/>
                            </div>
                            <p className="super_title">Jurídico Martínez</p>    
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg_white text-bluebg">
                <div className="wrapper_description ">
                    <h3 className="title-p">Descripción</h3>
                    <p className="text-p">
                        Se personalizó el templete elegido por el cliente, también se añadió y organizó la información del mismo. 
                    </p>
                </div>
                <div className="wrapper_imgFull">
                    <img src={sitio1} alt=""/>
                </div>
                <div className="wrapper_description ">
                    <h3 className="title-p">Desarrollo</h3>
                    <p className="text-p">
                        En cuanto al desarrollo se utilizó la plantilla elegida por el clientes, la cual esta 
                        construida en HTML, CSS y JS. Los cambios efectuados son en imágenes, 
                        organización y edición de textos, así como organizar y eliminar secciones 
                        innecesarias para el sitio web.
                    </p>
                </div>
            </section>
            <section className="wrapper_screens pt-6">
                <Row>
                    <Col xs="12" lg="6">
                        <div className="img_screen ml-lg-auto">
                            <img src={sitio2}  alt=""/>
                        </div>
                        <div className="img_screen ml-lg-auto">
                            <img src={sitio3}  alt=""/>
                        </div>
                        <div className="img_screen ml-lg-auto">
                            <img src={sitio5}  alt=""/>
                        </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <div className="img_screen mr-lg-auto first_img">
                            <img src={sitio4}  alt=""/>
                        </div>
                        <div className="img_screen mr-lg-auto">
                            <img src={sitio6}  alt=""/>
                        </div>
                    </Col>
                </Row>
            </section>
            <Footer />
        </div>
    </>
  );
}

export default Site;
import React from "react";
import terminal from '../images/terminal_pink.png';
import { Col, Row } from 'react-bootstrap';

function Soy() {
  return (
    <>
        <section className="section without_bg" id="soy">
            <div className="wrapper column-12 colum-sm-12 row_reverse" >
                <div className="wrapper_name">
                    <div>
                        <p className="super_title">Soy</p>
                    </div>
                    <div className="wrapper_divider">
                        <img src={terminal} alt=""/>
                    </div>
                    <div className="wrapper_subtitle p_wrap">
                        <p className="super_subtitle">una chica que ama la tecnología, programar y ayudar a los demás</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg_white text-bluebg soy-pt">
            {/* <div className="wrapper column-6 colum-sm-12" >
            </div> */}
            <Row className="pt-6">
                <Col lg="5">
                    <div className="wrapper_title-section ">
                        <div className="line_hr"> <hr /> </div>
                        <p className="">Soy</p>
                    </div>
                </Col>
                <Col lg="7">
                    <div className="wrapper_info">
                        <p>
                            Hola mi nombre es Pamela, nací en Querétaro, México. 
                            Soy una chica que ama programar y ver anime.
                        </p>
                        <p>
                            Me gusta todo lo relacionado con la tecnología, las 
                            computadoras, los videojuegos, la innovación pero sobre 
                            todo me gusta ayudar y apoyar a los demás.
                        </p>
                        <p>
                            Trato de aprender nuevas cosas por que intentar es lo 
                            que cuenta y no importa el tiempo que me tome lograr 
                            mis objetivos.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="pt-6">
                <Col lg="6">
                    <div className="wrapper_title-section">
                        <div className="line_hr"> <hr /> </div>
                        <p className="">Pasiones</p>
                    </div>
                </Col>
                <Col lg="6">
                    1 of 6
                </Col>
            </Row>
        </section>
    </>
  );
}

export default Soy;
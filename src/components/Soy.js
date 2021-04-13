import React from "react";
import terminal from '../images/terminal_pink.png';
import pasion1 from '../images/programming.png';
import pasion2 from '../images/javascript.png';
import pasion3 from '../images/help.png';
import hobbie1 from '../images/Gaming-pana.png';
import hobbie2 from '../images/Media-player-pana.png';
import hobbie3 from '../images/Studying-pana.png';
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
                        <p className="text-p">
                            Hola mi nombre es Pamela, nací en Querétaro, México. 
                            Soy una chica que ama programar y ver anime.
                        </p>
                        <p className="text-p">
                            Me gusta todo lo relacionado con la tecnología, las 
                            computadoras, los videojuegos, la innovación pero sobre 
                            todo me gusta ayudar y apoyar a los demás.
                        </p>
                        <p className="text-p">
                            Trato de aprender nuevas cosas por que intentar es lo 
                            que cuenta y no importa el tiempo que me tome lograr 
                            mis objetivos.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="pt-6">
                <Col lg="12">
                    <div className="wrapper_title-section">
                        <div className="line_hr"> <hr /> </div>
                        <p className="">Pasiones</p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="wrapper-pasion">
                        <img src={pasion1} className="img-pasion" alt="maquetado"/>
                        <h3 className="title-p">Maquetado</h3>
                        <p className="text-p wrapper_text-p">
                            Maquetar es el proceso en el que
                            un diseño pasa de ser una imagen
                            a un sitio web.
                        </p>
                        <p className="text-p wrapper_text-p">
                            Es genial poder transformar un
                            diseño a un sitio web.
                        </p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="wrapper-pasion">
                    <img src={pasion2} className="img-pasion" alt="programar"/>
                    <h3 className="title-p">Programar</h3>
                    <p className="text-p wrapper_text-p">
                        Para mí, programar es poder
                        transformar ideas en realidad.
                    </p>
                    <p className="text-p wrapper_text-p">
                        Y gracias a la tecnología, todo 
                        lo que alguna vez fue un 
                        sueño ahora es una realidad.
                    </p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="wrapper-pasion">
                        <img src={pasion3} className="img-pasion" alt="ayudar"/>
                        <h3 className="title-p">Ayudar</h3>
                        <p className="text-p wrapper_text-p">
                            Si en nuestras manos esta el
                            ayudar, cooperar o apoyar a
                            alguien, debemos hacerlo.
                        </p>
                        <p className="text-p wrapper_text-p">
                            Es lo más humano y gratificante
                            que nos puede pasar en la vida.
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="pt-6">
                <Col lg="12">
                    <div className="wrapper_title-section">
                        <div className="line_hr"> <hr /> </div>
                        <p className="">Pasatiempos</p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="wrapper-pasion">
                        <img src={hobbie3} className="img-hobbie" alt="maquetado"/>
                        <h3 className="title-p">Estudiar</h3>
                        <p className="text-p wrapper_text-p">
                            Siempre trato de aprender nuevas
                            cosas ya sea viendo documentales,
                            buscando tutoriales en YouTube o
                            comprando cursos.
                        </p>
                        <p className="text-p wrapper_text-p">
                            Por que el conocimiento es la
                            mayor y mejor armadura.
                        </p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="wrapper-pasion">
                    <img src={hobbie1} className="img-hobbie" alt="programar"/>
                    <h3 className="title-p">videojuegos</h3>
                    <p className="text-p wrapper_text-p">
                        Desde pequeña me gustan los 
                        videojuegos, tuve un Nintendo 64
                        y después un Xbox 360.
                    </p>
                    <p className="text-p wrapper_text-p">
                        Ahora en mi tiempo libre, puedo 
                        jugar en mi laptop a LOL, Apex, 
                        Genshin Impact, Hades, Stardew
                        Valley, etc.
                    </p>
                    </div>
                </Col>
                <Col lg="4">
                    <div className="wrapper-pasion">
                        <img src={hobbie2} className="img-hobbie" alt="ayudar"/>
                        <h3 className="title-p">anime</h3>
                        <p className="text-p wrapper_text-p">
                            El anime son dibujos animados
                            japoneses con historias sacadas
                            de mentes asombrosas.
                        </p>
                        <p className="text-p wrapper_text-p">
                            La mayoría de ellos te dejan una
                            gran enseñanza de vida, aunque
                            suene ilógico.
                        </p>
                    </div>
                </Col>
            </Row>
        </section>
    </>
  );
}

export default Soy;
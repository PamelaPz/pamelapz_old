import React from "react";
import terminal from '../assets/images/terminal_pink.png';
import pasion1 from '../assets/images/programming.png';
import pasion2 from '../assets/images/javascript.png';
import pasion3 from '../assets/images/help.png';
import hobbie1 from '../assets/images/Gaming-pana.png';
import hobbie2 from '../assets/images/Media-player-pana.png';
import hobbie3 from '../assets/images/Studying-pana.png';
import skill1 from '../assets/images/skills/html.png';
import skill2 from '../assets/images/skills/css-3.png';
import skill3 from '../assets/images/skills/js.png';
import skill4 from '../assets/images/skills/angular.png';
import skill5 from '../assets/images/skills/bootstrap.png';
import skill6 from '../assets/images/skills/github.png';
import skill7 from '../assets/images/skills/laravel.png';
import skill8 from '../assets/images/skills/vue.png';
import skill9 from '../assets/images/skills/react.png';
import skill10 from '../assets/images/skills/sass.png';
import skill11 from '../assets/images/skills/git.png';
import certificate from '../assets/images/skills/certificate.png';
import scroll from '../assets/images/mouse_scroll.png';

import Footer from './Footer';
import { Shake } from 'reshake';
import { Col, Row, ProgressBar } from 'react-bootstrap';

function Soy() {
  return (
    <>
        <div className="content-sm">
            <section className="section without_bg" id="soy">
                <div className="wp_scroll"><div className="line_scroll"></div> <div className="wp_img"><img className="mouse" src={scroll} alt=""/> <div className="dot"></div> </div></div>
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
                <Row className="pt-6">
                    <Col xs="12" lg="5">
                        <div className="wrapper_title-section ">
                            <div className="line_hr"> <hr /> </div>
                            <p className="">Hola</p>
                        </div>
                    </Col>
                    <Col xs="12" lg="7">
                        <div className="wrapper_info">
                            <p className="text-p">
                                Mi nombre es Pamela, nací en Querétaro, México. 
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
                    <Col xs="12" lg="12">
                        <div className="wrapper_title-section">
                            <div className="line_hr"> <hr /> </div>
                            <p className="">Pasiones</p>
                        </div>
                    </Col>
                    <Col xs="12" lg="4">
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
                    <Col xs="12" lg="4">
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
                    <Col xs="12" lg="4">
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
                    <Col xs="12" lg="12">
                        <div className="wrapper_title-section">
                            <div className="line_hr"> <hr /> </div>
                            <p className="">Pasatiempos</p>
                        </div>
                    </Col>
                    <Col xs="12" lg="4">
                        <div className="wrapper-pasion">
                            <img src={hobbie3} className="img-hobbie" alt="estudiar"/>
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
                    <Col xs="12" lg="4">
                        <div className="wrapper-pasion">
                        <img src={hobbie1} className="img-hobbie" alt="videojuegos"/>
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
                    <Col xs="12" lg="4">
                        <div className="wrapper-pasion">
                            <img src={hobbie2} className="img-hobbie" alt="anime"/>
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
                <Row className="pt-6 mb-5">
                    <Col xs="12" lg="12">
                        <div className="wrapper_title-section">
                            <div className="line_hr"> <hr /> </div>
                            <p className="">Habilidades</p>
                        </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <div className="wrapper_skill ml-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill1} className="img-skill" alt="ayudar"/>
                                    <Shake h={4} v={4} r={3} dur={690} int={30.8} max={100} fixed={true} fixedStop={false} freez={false}>
                                        <a href="https://platzi.com/@pamelapz-15/curso/1492-html-css/diploma/detalle/" target="_blank" rel="noopener noreferrer">
                                            <img src={certificate} className="img-certificate" alt="certificado"/>
                                        </a>
                                    </Shake>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">html</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">4 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={95} label={`${95}%`}/>
                        </div>
                        <div className="wrapper_skill ml-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill2} className="img-skill" alt="ayudar"/>
                                    <Shake h={4} v={4} r={3} dur={690} int={30.8} max={100} fixed={true} fixedStop={false} freez={false}>
                                        <a href="https://platzi.com/@pamelapz-15/curso/1492-html-css/diploma/detalle/" target="_blank" rel="noopener noreferrer">
                                            <img src={certificate} className="img-certificate" alt="certificado"/>
                                        </a>
                                    </Shake>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">CSS</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">4 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={80} label={`${80}%`}/>
                        </div>
                        <div className="wrapper_skill ml-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill3} className="img-skill" alt="ayudar"/>
                                    <Shake h={4} v={4} r={3} dur={690} int={30.8} max={100} fixed={true} fixedStop={false} freez={false}>
                                        <a href="https://platzi.com/p/pamelapz-15/curso/1814-basico-javascript/diploma/detalle/" target="_blank" rel="noopener noreferrer">
                                            <img src={certificate} className="img-certificate" alt="certificado"/>
                                        </a>
                                    </Shake>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">JavaScript</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">1.5 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={65} label={`${65}%`}/>
                        </div>
                        <div className="wrapper_skill ml-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill4} className="img-skill" alt="ayudar"/>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">Angular</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">6 meses</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={30} label={`${30}%`}/>
                        </div>
                        <div className="wrapper_skill ml-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill5} className="img-skill" alt="ayudar"/>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">bootstrap</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">3 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={75} label={`${75}%`}/>
                        </div>
                        <div className="wrapper_skill ml-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill6} className="img-skill" alt="ayudar"/>
                                    <Shake h={4} v={4} r={3} dur={690} int={30.8} max={100} fixed={true} fixedStop={false} freez={false}>
                                        <a href="https://platzi.com/p/pamelapz-15/curso/1557-git-github/diploma/detalle/" target="_blank" rel="noopener noreferrer">
                                            <img src={certificate} className="img-certificate" alt="certificado"/>
                                        </a>
                                    </Shake>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">Github</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">2.5 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={85} label={`${85}%`}/>
                        </div>
                    </Col>
                    <Col xs="12" lg="6">
                        <div className="wrapper_skill mr-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill7} className="img-skill" alt="ayudar"/>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">laravel</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">1 año</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={45} label={`${45}%`}/>
                        </div>
                        <div className="wrapper_skill mr-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill8} className="img-skill" alt="ayudar"/>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">vue</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">9 meses</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={89} label={`${89}%`}/>
                        </div>
                        <div className="wrapper_skill mr-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill9} className="img-skill" alt="ayudar"/>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">React</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">1.5 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={50} label={`${50}%`}/>
                        </div>
                        <div className="wrapper_skill mr-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill10} className="img-skill" alt="ayudar"/>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">sass</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">2 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={60} label={`${60}%`}/>
                        </div>
                        <div className="wrapper_skill mr-auto">
                            <div className="content_header">
                                <div className="wrapper_images">
                                    <img src={skill11} className="img-skill" alt="ayudar"/>
                                    <Shake h={4} v={4} r={3} dur={690} int={30.8} max={100} fixed={true} fixedStop={false} freez={false}>
                                        <a href="https://platzi.com/p/pamelapz-15/curso/1557-git-github/diploma/detalle/" target="_blank" rel="noopener noreferrer">
                                            <img src={certificate} className="img-certificate" alt="certificado"/>
                                        </a>
                                    </Shake>
                                </div>
                                <div className="wrapper_info-skill">
                                    <h4 className="title-skill">Git</h4>
                                    <hr className="divider"/>
                                    <span className="p-years">2.5 años</span>
                                </div>
                            </div>
                            <ProgressBar className="barra" now={95} label={`${95}%`}/>
                        </div>
                    </Col>
                </Row>
            </section>
            <section className="wrapper wrapper-footer">
                <div className="wrapper_info-skill my-5">
                    <span className="p-years">Si quieres conocer todas mis certificaciones, te invito visitar mi <a className="text-white" href="https://www.linkedin.com/in/pamela-perez-02/">Linkedin.</a></span>
                </div>
            </section>
            <Footer />
        </div>
    </>
  );
}

export default Soy;
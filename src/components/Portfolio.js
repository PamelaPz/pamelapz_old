import React from "react";
import terminal from '../assets/images/terminal_pink.png';
import Footer from './Footer';
import { Col, Row } from 'react-bootstrap';

function Portfolio() {
  return (
    <>
        <div className="content-sm">
            <section className="section without_bg" id="cv">
                <div className="wrapper column-12 colum-sm-12 row_reverse" >
                    <div className="wrapper_name">
                        <div>
                            <p className="super_title">Proximamente</p>
                        </div>
                        <div className="wrapper_divider">
                            <img src={terminal} alt=""/>
                        </div>
                        {/* <div className="wrapper_subtitle p_wrap">
                            <p className="super_subtitle">una chica que ama la tecnología, programar y ayudar a los demás</p>
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    </>
  );
}

export default Portfolio;
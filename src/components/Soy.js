import React from "react";
import terminal from '../images/terminal_pink.png';

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
        <section className="section">

        </section>
    </>
  );
}

export default Soy;
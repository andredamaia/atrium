import React from 'react';
import {ReactComponent as ReactArrow} from '../../images/arrow.svg';

import logo from '../../images/logo.png';
import hamburgermenu from '../../images/hamburger-menu.png';

import './styles.css';

function Header(){
    return(
        <>
            <header> 
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-4">
                            <img className="img-logo" src={logo} alt="" />
                        </div>

                        <div className="col-12 col-md-3 offset-md-1 text-right">
                            <span>Menu</span>
                            <img src={hamburgermenu} alt="" />
                        </div>

                        <div className="col-12 col-md-4 text-right">
                            <a href="/">Solicitar Orçamento
                                <ReactArrow className="small-arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>       
        </>
    )
}
export default Header;
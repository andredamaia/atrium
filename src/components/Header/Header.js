import React from 'react';
import { ReactComponent as ReactArrow } from '../../images/arrow.svg';

import logo from '../../images/logo.png';
import hamburgermenu from '../../images/hamburger-menu.png';

import './styles.css';

function Header(){
    return(
        <>
            <header> 
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-9 col-md-4">
                            <img className="img-logo" src={logo} alt="" />
                        </div>

                        <div className="col-3 col-md-3 offset-md-2 text-right">
                            <div className="menu-holder">
                                <span>Menu</span>
                                <img src={hamburgermenu} alt="" />

                                <ul className="list-menu">
                                    <li><a href="/empresa">Empresa</a></li>
                                    <li><a href="/equipamentos">Equipamentos</a></li>
                                    <li><a href="/produtos">Produtos</a></li>
                                    <li><a href="/contato">Contato</a></li>
                                    <li className="button-highlight d-md-none">
                                        <a href="/orcamento">Solicitar orçamento</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-12 col-md-3 text-right">
                            <a href="/" className="button-default">Solicitar Orçamento
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
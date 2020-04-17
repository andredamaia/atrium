import React from 'react';

import logo from '../../images/logo.png';

import './styles.css';




function Menu(){
    return(
        <>
            <div className="menu">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col-12 col-md-4">
                            <img src={logo} alt="" />
                        </div>

                        <div className="col-12 col-md-8">
                            <ul>
                                <li><a href="/empresa">Empresa</a></li>

                                <li><a href="/equipamentos">Equipamentos</a></li>

                                <li><a href="/produtos">Produtos</a></li>

                                <li><a href="/contato">Contato</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Menu;
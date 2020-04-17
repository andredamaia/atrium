import React from 'react';

import logo from '../../images/logo.png';

import './styles.css';




function Menu(){
    return(
        <>
            <menu>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <img src={logo} alt="" />
                        </div>

                        <div className="col-12 col-md-7 offset-md-2">
                            <ul>
                                <li>Empresa</li>

                                <li>Equipamentos</li>

                                <li>Produtos</li>

                                <li>Contato</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </menu>
        </>
    )
}
export default Menu;
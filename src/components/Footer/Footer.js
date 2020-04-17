import React from 'react';

import './styles.css';




function Footer(){
    return(
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <h5>Entre em contato e nos conte como podemos te ajudar</h5>

                            <p className="email">contato@atrium.com.br</p>
                        </div>

                        <div className="col-12 col-md-3 offset-md-2">
                            
                            <p className="title">Contato</p>

                            <p>+55 47 3025 3991<br/>
                            +55 11 4890 2343<br/>
                            contato@atrium.com.br</p>
                        </div>

                        <div className="col-12 col-md-3">
                            
                            <p className="title">Endereço</p>

                            <p>Rua Clodoaldo Gomes<br/>
                            nº 350 - Zona Industrial<br/> 
                            Joinville - SC
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;
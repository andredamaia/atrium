import React, { useState } from 'react';

import SidebarMenu from '../SidebarMenu';

import { ReactComponent as ReactArrow } from '../../images/arrow.svg';

import logo from '../../images/logo.png';
import hamburgermenu from '../../images/hamburger-menu.png';

import './styles.css';

function Header(){
    const [state, setState] = useState({
        initial: false,
        clicked: null,
        menuName: "Menu"
    });

    const [disabled, setDisabled] = useState(false);

    const handleMenu = () => {
        disableMenu();

        if(state.initial === false) {
            setState({
                initial: null,
                clicked: true,
                menuName: "Close"
            });
        } else if (state.clicked === true){
            setState({
                clicked: !state.clicked,
                menuName: "Menu"
            });
        } else if (state.clicked === false){
            setState({
                clicked: !state.clicked,
                menuName: "Close"
            });
        }
    }

    // Ativa e desativa o botão do menu
    const disableMenu = () => {
        setDisabled(!disabled);
        setTimeout(() => {
            setDisabled(false);
        }, 1200);
    }

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
                                <div
                                    disabled={disabled} 
                                    onClick={handleMenu}
                                    className="button-nav"
                                >
                                    <span>Menu</span>
                                    <img src={hamburgermenu} alt="" />
                                </div>
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

            <SidebarMenu state={state} disabled={disabled} />  
        </>
    )
}
export default Header;
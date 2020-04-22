import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

import './styles.css';

import molde1 from '../../images/molde-1.png';
import molde2 from '../../images/molde-2.png';
import molde3 from '../../images/molde-3.png';

const Hamburger = ({ state }) => {
    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);

    useEffect(() => {
        if(state.clicked === false) {
            // Fecha o menu
            // menu.style.display = 'none'

            gsap.to('.hamburger-menu .box-molde', {
                opacity: 1,
            });
            
            gsap.to([revealMenu, revealMenuBackground], {
                duration: .8,
                width: 0,
                ease: 'power3.inOut',
                stagger: {
                    amount: .07
                }
            });

            gsap.to(menu, {
                duration: 1,
                css: {display: 'none'}
            });

            gsap.to('body', 0, { css: {overflow: 'visible' }} );

        } else if(state.clicked === true || (state.clicked === true && state.initial === null)) {
            // Abre o menu
            // menu.style.display = 'block'

            gsap.to('body', 0, { css: {overflow: 'hidden' }} );

            const tl = gsap.timeline();

            gsap.to(menu, {
                duration: 0,
                css: {display: 'block'}
            });

            tl.to(revealMenuBackground, {
                duration: 0,
                opacity: 1,
                width: "40%",
            }).to(revealMenu, {
                duration: 0,
                opacity: 1,
                width: "100%",
            }).from('.hamburger-menu .box-molde', {
                opacity: 0,
                delay: -.04,
                y: 50,
                ease: 'power3.inOut',
                stagger: {
                    amount: .15
                }
            });

            staggerReveal(revealMenuBackground);
            staggerReveal2(revealMenu);
            staggerText(line1, line2, line3, line4);
        }
    }, [state]);


    const staggerReveal = (node1) => {
        gsap.from([node1], {
            duration: .8,
            width: 0,
            transformOrigin: 'right top',
            skewY: 3,
            ease: 'power3.inOut',
            stagger: {
                amount: .05
            }
        });
    };

    const staggerReveal2 = (node1) => {
        gsap.from([node1], {
            duration: .8,
            width: 0,
            transformOrigin: 'right top',
            skewY: 3,
            ease: 'power3.inOut',
            stagger: {
                amount: .05
            }
        });
    };

    const staggerText = (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
            duration: .8,
            y: 100,
            delay: .1,
            ease: 'power3.inOut',
            stagger: {
                amount: .3
            }
        });
    };

    const handleHover = e => {
        gsap.to(e.target, {
            duration: .3,
            y: 3,
            skewX: 4,
            ease: 'power3.inOut'
        });
    }

    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration: .3,
            y: -3,
            skewX: 0,
            ease: 'power3.inOut'
        });
    }

    return (
        <div ref={el => (menu = el)} className="hamburger-menu">
            <div 
                ref={el => (revealMenuBackground = el)} className="menu-secondary-background-color"
            ></div>

            <div ref={el => (revealMenu = el)} className="menu-layer">
                <div className="content">
                    <div className="wrapper">
                        <div className="menu-links">
                            <nav>
                                <ul>
                                    <li>
                                        <a 
                                            ref={el => (line1 = el)} 
                                            href="/empresa"
                                            link="empresa"
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Empresa
                                        </a>
                                    </li>

                                    <li>
                                        <a 
                                            ref={el => (line2 = el)} 
                                            href="/equipamentos"
                                            link="equipamentos"
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Equipamentos
                                        </a>
                                    </li>

                                    <li>
                                        <a 
                                            ref={el => (line3 = el)} 
                                            href="/produtos"
                                            link="produtos"
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Produtos
                                        </a>
                                    </li>

                                    <li>
                                        <a 
                                            ref={el => (line4 = el)} 
                                            href="/contato"
                                            link="contato"
                                            onMouseEnter={e => handleHover(e)}
                                            onMouseOut={e => handleHoverExit(e)}
                                        >
                                            Contato
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="container" style={{ padding: 0 }}>
                            <div className="row" style={{ padding: 0 }}>
                                <div className="col-12">
                                    <span className="text-line">Produtos e Serviços</span>
                                </div>

                                <div className="col-12 col-md-4">
                                    <div className="box-molde">
                                        <div className="molde-image">
                                            <img src={molde1} alt="" />
                                        </div>

                                        <h6>Moldes de termoformagem</h6>

                                        <div className="top"></div>
                                        <div className="right"></div>
                                        <div className="left"></div>
                                        <div className="bottom"></div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4">
                                    <div className="box-molde">
                                        <div className="molde-image">
                                            <img src={molde2} alt="" />
                                        </div>

                                        <h6>Dispositivos de controle</h6>

                                        <div className="top"></div>
                                        <div className="right"></div>
                                        <div className="left"></div>
                                        <div className="bottom"></div>
                                    </div>
                                </div>

                                <div className="col-12 col-md-4">
                                    <div className="box-molde">
                                        <div className="molde-image">
                                            <img src={molde3} alt="" />
                                        </div>

                                        <h6>Ferramentais de fundição</h6>

                                        <div className="top"></div>
                                        <div className="right"></div>
                                        <div className="left"></div>
                                        <div className="bottom"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hamburger;
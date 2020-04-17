import React from 'react';
import {ReactComponent as ReactArrow} from '../images/arrow.svg';

import Menu from '../components/Menu/Menu';
import Footer from '../components/Footer/Footer';

import Blur from '../images/Blur.png';
import Layers from '../images/Layers.png';
import featurethree from '../images/feature-three.png';
import weg from '../images/weg.png';
import tupy from '../images/tupy.png';
import nemak from '../images/nemak.png';
import wetzel from '../images/wetzel.png';
import whirpool from '../images/whirpool.png';
import maxion from '../images/maxion.png';
import molde1 from '../images/molde-1.png';
import molde2 from '../images/molde-2.png';
import molde3 from '../images/molde-3.png';

import video from '../images/video-banner.mp4';

import '../styles/home.css';


function Home(){
    return(
        <>
            <div className="bg-banner d-flex align-items-center">
                <video id="background-video" muted loop autoPlay>
                    <source src={video} type="video/mp4" />
                    <source src={video} type="video/ogg" />
                    Your browser does not support the video tag.
                </video>

                <div className="layer"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h1>Construímos o futuro com o aço</h1>

                            <p>Moldes de termoformagens</p>

                            <p>Dispositivo de controle</p>
                            
                            <p>Ferramentas de fundição</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-small">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4">
                            <span>
                                <div><img src={Blur} alt="" /></div>
                                <div><strong>30 anos</strong> de expertise</div>
                            </span>

                        </div>

                        <div className="col-12 col-md-4">
                            <span>
                                <div><img src={Layers} alt="" /></div>
                                <div><strong>3500 m²</strong> de área construída</div>
                            </span>
                        </div>

                        <div className="col-12 col-md-4">
                            <span>
                                <div><img src={featurethree} alt="" /></div>
                                <div><strong>30 ton.</strong> de capacidade produtiva</div>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4>Atrium Ferramentaria</h4>

                            <p>Com mais de 30 anos de expertise, a Atrium é referência na fabricação de ferramentais,<br/>
                            moldes e dispositivos. Possui parque fabril de aproximadamente 3.500 m² e capacidade<br/>
                            produtiva para ferramentais de até 30 toneladas.</p>

                            <a href="/">Saiba mais
                                <ReactArrow className="small-arrow" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-moldes">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h4><small>Portfólio</small> Produtos e Serviços</h4>
                        </div>

                        

                            <div className="col-12 col-md-4">
                                <div className="box-molde">
                                    <div className="molde-image">
                                        <img src={molde1} alt="" />
                                    </div>

                                    <h6>Moldes de termoformagem</h6>

                                    <p>Moldes de termoformagem, termo-compressão, vacuumforming e injeção de PU</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="box-molde">
                                    <div className="molde-image">
                                        <img src={molde2} alt="" />
                                    </div>

                                    <h6>Dispositivos de controle</h6>

                                    <p>Dispositivos para controle, montagem, corte/furação</p>
                                </div>
                            </div>

                            <div className="col-12 col-md-4">
                                <div className="box-molde">
                                    <div className="molde-image">
                                        <img src={molde3} alt="" />
                                    </div>

                                    <h6>Ferramentais de fundição</h6>

                                    <p>Produzimos ferramentas para fundição, juntamente com os seus respectivos dispositivos</p>
                                </div>
                            </div>
                        
                    </div>
                </div>
            </div>

            <div className="bg-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h2>Solicite um orçamento</h2>

                            <p>Nos envie uma solicitação de orçamento e nossa equipe entrará em contato<br/> com você em até 24 horas.</p>

                            <a href="/">Solicitar Orçamento
                                <ReactArrow className="small-arrow" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-empresas">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5">
                            <div className="texts">
                                <h4><small>Clientes</small> Empresas que confiam no nosso trabalho</h4>

                                <p>Com uma trajetória de mais de 30 anos, a Atrium se orgulha por ter conquistado grandes clientes e parceiros nas mais diversas áreas de atuação. A melhor maneira de constatar qualidade, confiança, rapidez e segurança em nossos serviços é por meio daqueles com quem trabalhamos.</p>
                            </div>
                        </div>

                        <div className="col-12 col-md-6 offset-md-1">
                            <div className="clients-holder">
                                <div><img src={weg} alt="" /></div>
                                <div className="box"><img src={tupy} alt="" /></div>
                                <div><img src={nemak} alt="" /></div>
                                <div><img src={wetzel} alt="" /></div>
                                <div className="box"><img src={whirpool} alt="" /></div>
                                <div><img src={maxion} alt="" /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Menu/>

            <Footer/>

        </>
    )
}
export default Home;
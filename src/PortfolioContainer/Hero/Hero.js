import React from 'react';
import Typical from 'react-typical';
import '../../Styles/Hero.css';

export default function Hero() {
    return (
        <div id="hero">
            <div className="py-5 px-5 d-flex justify-content-center align-items-center">
                <div className="bg-perfil">
                    <div className="row my-5 py-5">
                        <div className="col-12 d-flex justify-content-center">
                            <img src={require('../../Images/Perfil5.png')} alt="Perfil" className="imgPerfil img-fluid"></img>
                        </div>
                        <div className ="col-12  d-flex justify-content-center py-4 my-4">
                            <h2 className= "text-white nombre">
                                <Typical
                                steps= {[
                                    'Hi! I am Federico Lencina',2000,
                                    'Frontend Developer',2000,
                                    'Backend Developer',2000   
                                ]}
                                loop ={Infinity}
                                wrapper="p"
                                 />
                            </h2>
                        </div>
                        <div className ="col-12 d-flex justify-content-center">
                            <div className="redes">
                                <a href="https://www.linkedin.com/in/federico-lencina/" target="blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </div>
                            <div className="redes">
                                <a href="mailto:federiconahuellencina@gmail.com" target="blank">
                                    <i className="fab fa-google"></i>
                                </a>
                            </div>
                            <div className="redes">
                                <a href="https://twitter.com/Federic84754655" target="blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </div>
                            <div className="redes">
                                <a href="https://www.facebook.com/Fede.Lencina.180" target="blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </div>
                            <div className="redes">
                                <a href="https://www.instagram.com/lencinaf/?hl=es-la" target="blank">
                                    <i className="fab fa-instagram"></i>
                                </a>
                            </div>
                            <div className="redes">
                                <a href="https://github.com/FedeNLencina" target="blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

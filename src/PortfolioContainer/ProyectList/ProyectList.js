import React from 'react';
import '../../Styles/ProyectList.css';
import ProyectDeploy from '../Proyect/ProyectDeploy.js';
import ProyectDesktop from '../Proyect/ProyectDesktop.js';

export default function Proyects() {
  return (
            <div id="proyects">
                <div className="container">
                    <div className="proyectTitulo text-center text-black my-3">
                        <h2>Proyects</h2>
                    </div>
                    <div className="text-center text-black my-3">
                        <h2>Deploys</h2>
                    </div>
                    <div className="row ">
                        <div className="col-12 col-md-6 col-lg-6 proyectListContainer">
                            <ProyectDeploy
                                link='https://fedenlencina.github.io/CarFitness/'
                                src={require("../../Images/CarFitnessFull.png")}
                                alt='carfitness' 
                            />
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  proyectListContainer">
                            <ProyectDeploy 
                                link='https://fedenlencina.github.io/Portfolio1/'
                                src={require("../../Images/DevFedericoLencina.png")}
                                alt='portfolio' 
                            />  
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 proyectListContainer">
                            <ProyectDeploy 
                                link='https://fedenlencina.github.io/ReactApp/'
                                src={require("../../Images/ReactAppFull.png")}
                                alt='reactApp' 
                            />  
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  proyectListContainer">
                            <ProyectDeploy 
                                link='https://fedenlencina.github.io/RecSublime/'
                                src={require("../../Images/RecSublimeFull.png")}
                                alt='recSublime' 
                            />  
                        </div>
                    </div>
                    <div className="text-center text-black my-3">
                        <h2>Desktop Aplications</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 proyectListContainer">
                            <ProyectDesktop
                                src={require("../../Images/TorneoFutbol.png")}
                                alt='torneoFutbol'/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  proyectListContainer">
                            <ProyectDesktop
                                src={require("../../Images/LightsOut.png")}
                                alt='lightsOut'/>
                        </div>
                    </div>
                </div>
            </div>
);
}

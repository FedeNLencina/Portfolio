import React from 'react';
import '../../Styles/ProyectList.css';
import ProyectDeploy from '../Proyect/ProyectDeploy.js';


export default function Proyects() {
  return (
            <div id="proyects">
                <div className="container py-5">
                    <div className="proyectTitulo text-center text-black my-3">
                        <h2>Proyects</h2>
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
                </div>
            </div>
);
}

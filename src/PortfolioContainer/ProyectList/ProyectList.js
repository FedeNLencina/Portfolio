import React from 'react';
import '../../Styles/ProyectList.css';
import Proyect from '../../PortfolioContainer/Proyect/Proyect.js';

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
                            <Proyect />
                            <a href="https://fedenlencina.github.io/CarFitness/" target="_blank" rel="noreferrer" className="">
                                <img src={require("../../Images/Carfitness.png")} alt="CarFitness"></img>
                            </a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  proyectListContainer">
                            <Proyect/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6 proyectListContainer">
                            <Proyect/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  proyectListContainer">
                            <Proyect/>
                        </div>
                    </div>
                    <div className="text-center text-black my-3">
                        <h2>Desktop Aplications</h2>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-6 proyectListContainer">
                            <Proyect/>
                        </div>
                        <div className="col-12 col-md-6 col-lg-6  proyectListContainer">
                            <Proyect/>
                        </div>
                    </div>
                </div>
            </div>
);
}

import React from 'react';
import './../../Styles/NavBar.css';

export default function Navbar() {
    return (
       <div className= "barraNavegacion">
        <div className="">
                <nav class="navbar navbar-expand-lg navbar-light pb-3">
                    <div className="container-fluid">
                        <p className="navbar-brand w-50 text-center text-dark" id="nombre"><span class="text-danger">{"<"}</span>Federico Lencina<span class="text-danger fs-3">{"/>"}</span></p>
                        <button className="navbar-toggler btn-light border border-dark border-4 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav w-100 d-flex justify-content-around px-5 me-5">
                            <a className="nav-link text-dark fs-4" href="#about">About</a>
                            <a className="nav-link text-dark fs-4" href="#skills">Skills</a>
                            <a className="nav-link text-dark fs-4" href="#proyects">Proyects</a>
                            <a className="nav-link text-dark fs-4" href="#contact">Contact</a>
                            
                            </div>
                        </div>
                    </div>
                </nav>
            
        </div>
    </div>
    )
}

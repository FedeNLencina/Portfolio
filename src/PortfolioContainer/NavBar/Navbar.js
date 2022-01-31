import React from 'react';
import './../../Styles/NavBar.css';

export default function Navbar() {
    return (
<<<<<<< HEAD
        <div>
            <div class= "barraNavegacion bg-dark">
=======
        <div className="bg-light">
            <div class= "barraNavegacion">
>>>>>>> da0c025a4a0338ef4d55bca80ffd72a71138e934
                <nav class="navbar navbar-expand-lg navbar-light pb-3">
                    <div class="container-fluid">
                        <p class="navbar-brand w-50 text-center text-dark" id="nombre"><span class="text-danger">{"<"}</span>Federico Lencina<span class="text-danger fs-3">{"/>"}</span></p>
                        <button class="navbar-toggler btn-light border border-dark border-4 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav w-100 d-flex justify-content-around px-5 me-5">
                            <a class="nav-link text-dark fs-4" href="#about">About</a>
                            <a class="nav-link text-dark fs-4" href="#skills">Skills</a>
                            <a class="nav-link text-dark fs-4" href="#proyects">Proyects</a>
                            <a class="nav-link text-dark fs-4" href="#contact">Contact</a>
                            
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

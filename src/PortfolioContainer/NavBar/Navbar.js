import React from 'react'

export default function Navbar() {
    return (
        <div className="bg-dark">
            <div class= "barraNavegacion">
                <nav class="navbar navbar-expand-lg navbar-light pb-3">
                    <div class="container-fluid">
                        <p class="navbar-brand w-50 text-center text-white" id="nombre"><span class="text-danger fs-3">{"<"}</span>Federico Lencina<span class="text-danger fs-3">{"/>"}</span></p>
                        <button class="navbar-toggler btn-light border border-dark border-4 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav w-100 d-flex justify-content-around px-5 me-5">
                            <a class="nav-link text-white fs-4" href="#about">About</a>
                            <a class="nav-link text-white fs-4" href="#skills">Skills</a>
                            <a class="nav-link text-white fs-4" href="#proyects">Proyects</a>
                            <a class="nav-link text-white fs-4" href="#contact">Contact</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

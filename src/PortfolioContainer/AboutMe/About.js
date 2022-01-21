import React from 'react';
import '../../Styles/About.css';

export default function About() {
    return (
      <div id="about" >
        <div className="container contPrincipal">
          <div className="d-flex justify-content-center contAbout" >
            <div className="divImage d-flex justify-content-center">
              <img
                src={require("../../Images/About.jpeg")}
                alt="about"
                className="imgAbout img-fluid"
              ></img>
            </div>
              <div className="divAbout p-5">
                <h2 className="text-center my-2">Hi, I´m Federico Lencina</h2>
                <h1 className="text-center my-2">About Me</h1>
                <p className="text-dark my-5" id="descripcion">
                    My name is Federico Lencina. I am 26 years old and i´m from
                    Buenos Aires, Argentina.I´m a web designer and currently
                  studying a degree in Programming at University (UNGS). I like
                  good designs and I enjoy turning complex problems into simple,
                  beautiful and intuitive designs. I also love the logic and
                  structure of coding and always strive elegant and efficient
                  code.
              </p>
              <div className="d-flex justify-content-center my-5">
                  <a
                    className="btn btn-dark p-2 fs-5"
                    href="Cv/LencinaFedericoCV.pdf"
                    download
                    >
                    Download CV
                  </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    );
}

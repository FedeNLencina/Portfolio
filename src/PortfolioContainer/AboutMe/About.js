import React from 'react';
import '../../Styles/About.css';

export default function About() {
    return (
      <div id="about" >
        <div className="container p-5">
          
          <div className="row h-75" >
            <div className="col-12 col-sm-12 col-md-12 col-lg-6 d-flex justify-content-center contAbout p-5">
              <div className="cartaBG"></div>
              <img
                src={require("../../Images/About.jpeg")}
                alt="about"
                className="imgAbout img-fluid"
                ></img>
            </div>

            <div className="container col-12 col-lg-6 col-sm-12 col-md-12 d-flex flex-column justify-content-center align-content-center h-100 mt-5 p-3 divAbout">
                <h1>
                    About Me
                </h1>
                <p className="text-dark" id="descripcion">
                    My name is Federico Lencina. I am 26 years old and i´m from
                    Buenos Aires, Argentina.I´m a web designer and currently
                    studying a degree in Programming at University (UNGS). I like
                    good designs and I enjoy turning complex problems into simple,
                    beautiful and intuitive designs. I also love the logic and
                    structure of coding and always strive elegant and efficient
                    code.
                </p>
                <div className="d-flex justify-content-center my-4">
                <a
                  className="btn btn-danger p-2 fs-5"
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

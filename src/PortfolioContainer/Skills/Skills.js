import React from 'react';
import '../../Styles/Skills.css';

export default function Skills() {
  return (
        <div id="skills" className="p-5">
            <div className="linea"></div>
            <div className= "container my-5">
                <h1 className= "my-5">Skills</h1>
                <div className= "row">
                    <div className="col-12 col-md-4 col-lg-4 d-flex flex-column justify-content-center align-content-center"> 
                        <i class="fas fa-cogs text-danger text-center"></i>
                        <h3 className="text-center">Backend</h3>
                        <p>Good command of Java and Javascript and knowledge of Node.js and Python.</p>
                        <div className="d-flex">

                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

import React from 'react';
import '../../Styles/Skills.css';

export default function Skills() {
  return (
        <div id="skills" className="p-5">
            <div className= "container my-5">
                <h1 className= " text-center tituloSkill">Skills</h1>
                <div className= "row d-flex justify-content-center">
                    <div className="col-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-content-center p-5 m-5 skillContainer"> 
                        <div className="w-100 d-flex justify-content-center">
                            <div className="iconoSkillContainer text-center ">
                                <i class="fas fa-cogs text-white iconoSkill"></i>
                            </div>
                        </div>
                        <h4 className="text-center">Backend</h4>
                        <p className="text-center  p-3">Good command of Java and Javascript and knowledge of Python.</p>
                        <div className="d-flex justify-content-center iconosSkills">
                            <i class="fab fa-java"></i>
                            <i class="fab fa-js-square"></i>
                            <i class="fab fa-python"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-content-center p-5 m-5 skillContainer"> 
                        <div className="w-100 d-flex justify-content-center ">
                            <div className="iconoSkillContainer text-center">
                                <i class="fas fa-edit text-white iconoSkill"></i>
                            </div>
                        </div>
                        <h4 className="text-center">Frontend</h4>
                        <p className="text-center p-3">Knowledge in ReactJS and i have solid foundations of HTML, CSS and Bootstrap.</p>
                        <div className="d-flex justify-content-center iconosSkills">
                            <i class="fab fa-react"></i>
                            <i class="fab fa-html5"></i>
                            <i class="fab fa-css3-alt"></i>
                            <i class="fab fa-bootstrap"></i>
                        </div>
                    </div>
                    <div className="col-12 col-md-3 col-lg-3 d-flex flex-column justify-content-center align-content-center p-5 m-5 skillContainer"> 
                        <div className=" w-100  d-flex justify-content-center">
                            <div className="iconoSkillContainer text-center">
                                <i class="fas fa-database text-white  iconoSkill"></i>
                            </div>
                        </div>
                        <h4 className="text-center">Database</h4>
                        <p className="text-center  p-3">Knowledge in SQL and PostgreSQL. Basic knowledge in Firebase.</p>
                        <div className="d-flex justify-content-center iconosSkills">
                            <i class="fas fa-database"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}

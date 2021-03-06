import React from 'react';
import { useEffect } from 'react';
import '../../Styles/Skills.css';
import AOS from 'aos';
export default function Skills() {
    useEffect(()=>{
        AOS.init({
          easing: 'ease-in-out',
          duration: 600
        });
      },[])

  return (
        <div id="skills" data-aos="fade-right">
            <div className= "container my-5">
                <h1 className= "text-center tituloSkill">Skills</h1>
                <div className= "row">
                    <div className="col-12 col-md-3 col-lg-4 d-flex flex-column justify-content-center align-content-center skillContainer" data-aos="fade-right"> 
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
                    <div className="col-12 col-md-3 col-lg-4 d-flex flex-column justify-content-center align-content-center skillContainer" data-aos="fade-right"> 
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
                    <div className="col-12 col-md-3 col-lg-4 d-flex flex-column justify-content-center align-content-center skillContainer" data-aos="fade-right"> 
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

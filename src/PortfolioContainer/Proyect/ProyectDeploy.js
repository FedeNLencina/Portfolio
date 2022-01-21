import React from 'react';
import '../../Styles/ProyectDeploy.css';


export default function ProyectDeploy(props) {
  return (
            <div className="proyectContainer">
                <div className="circleBar d-flex align-items-center">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <a href={props.link} target="_blank" rel="noreferrer" className="linkProyect">
                    <img src={props.src} alt={props.alt} className="imgProyect "></img>
                </a>
            </div>
  );
}

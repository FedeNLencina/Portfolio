import React from 'react';
import '../../Styles/Proyect.css';


export default function Proyect(directory,link,alt) {
  return (
            <div className="proyectContainer">
                <div className="circleBar d-flex align-items-center">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>
                <a href={link} target="_blank" rel="noreferrer" className="">
                    <img src={directory} alt={alt}></img>
                </a>
            </div>
  );
}

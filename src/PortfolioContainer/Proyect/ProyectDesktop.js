import React from 'react';

export default function ProyectDesktop(props) {
    return (
        <div className="proyectContainer">
            <div className="circleBar d-flex align-items-center">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
            </div>
            <img src={props.src} alt={props.alt} className="imgProyect"></img>
            
        </div>
);
}

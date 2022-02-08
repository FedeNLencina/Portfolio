import React from 'react';
import { useEffect } from 'react';
import '../../Styles/NavbarInf.css';
import AOS from 'aos';


export default function NavbarInf() {
    useEffect(()=>{
        AOS.init({
          easing: 'ease-in-out',
          duration: 600
        });
      },[])
  return (
        <div id="navInf" className="bg-dark">
            <div className="container w-100 d-flex justify-content-around linkCont" data-aos="zoom-in">
                <a className="nav-link text-white" href="#about">About</a>
                <a className="nav-link text-white" href="#skills">Skills</a>
                <a className="nav-link text-white" href="#proyects">Proyects</a>
                <a className="nav-link text-white" href="#contact">Contact</a>
            </div>
            <div className="container w-100 d-flex justify-content-center">
                <p className="text-white">© Federico Lencina Dev</p>
            </div>
        </div>
  );
}


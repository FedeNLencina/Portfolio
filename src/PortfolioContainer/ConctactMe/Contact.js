import React from 'react';
import '../../Styles/Contact.css';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export default function Contact() {
    const formRef=useRef();

    const handlerSubmit= (e)=>{
        e.preventDefault();
        emailjs.sendForm(
            'service_xoxklpd',
            'template_jqz9op4',
            formRef.current,
            'user_uqQfdg8XpW3ZuyDWUlhcj')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
    };
    
  return (
            <div id="contact"> 
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-6 box p-5"> 
                                <div className="text-dark">
                                        <h2>Contact Me</h2>
                                </div>
                                <div className="contactUnderline mb-5"></div>
                                <div className="formContainer p-5 ">
                                    <form ref={formRef}  onSubmit={handlerSubmit} className="d-flex flex-column justify-content-center ">
                                        <input type="text" placeholder="Name" name="user-name" className="form-control bg-transparent "></input>
                                        <input type="text" placeholder="Subject" name="user-subject" className="form-control bg-transparent"></input>
                                        <input type="text" placeholder="Email" name="user-email" className="form-control bg-transparent"></input>
                                        <textarea rows="4" placeholder="Your Message" className="form-control bg-transparent" ></textarea>
                                        <div className="d-flex justify-content-center w-100">
                                            <button className="btn w-50">Send Message</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="col-12 col-sm-6 col-lg-6 pt-5 ">
                                <div className="container">
                                    <div className="container contactsTitle">
                                        <div className="text-dark">
                                                <h2>Get in touch</h2>
                                        </div>
                                        <div className="contactUnderline "></div>
                                        <p className="mb-5 getInTouchP">Always available to get in touch and bring my services. Feel free to contact me.</p>
                                        <div className="container">
                                            <div className="d-flex justify-content-evenly my-3">
                                                <div className="contact w-25 text-center">
                                                    <a href="https://www.linkedin.com/in/federico-lencina/" target="blank">
                                                        <i className="fab fa-linkedin"></i>
                                                    </a>
                                                </div>
                                                <div className="w-75">
                                                    <p className="contactP">Linkedin</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-evenly my-3 ">
                                                <div className="contact w-25 text-center">
                                                    <a href="https://wa.link/520qgd" target="blank">
                                                        <i class="fab fa-whatsapp"></i>
                                                    </a>
                                                </div>
                                                <div className="w-75">
                                                    <p className="contactP">Phone</p>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-evenly my-3">
                                                <div className="contact w-25 text-center">
                                                    <a href="mailto:federiconahuellencina@gmail.com" target="blank">
                                                        <i className="fab fa-google"></i>
                                                    </a>
                                                </div>
                                                <div className="w-75">
                                                    <p className="contactP">Email</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div> 
                            </div>
                    </div>
            </div>
    );
}

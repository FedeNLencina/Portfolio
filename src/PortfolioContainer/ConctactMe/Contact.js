import React from 'react';
import '../../Styles/Contact.css';


export default function Contact() {
  return (
            <div id="contact"> 
                    <div className="container py-5">
                        <div className="text-center text-white">
                            <h2>Contact Me</h2>
                        </div>
                        <div className="contactParagraph text-center text-white">
                            <p>To contact me and ask for my service, just fill the form and I will contact you as soon as possible.</p>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6 col-lg-6"> 
                                <form className="d-flex flex-column justify-content-center">
                                        <input type="text" placeholder="Name" name="user-name"></input>
                                        <div className="espacio"></div>
                                        <input type="text" placeholder="Subject" name="user-subject"></input>
                                        <div className="espacio"></div>
                                        <input type="text" placeholder="Email" name="user-email"></input>
                                        <div className="espacio"></div>
                                </form>
                            </div>
                        </div>
                    </div>
            </div>
    );
}

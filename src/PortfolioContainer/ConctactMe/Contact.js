import React from "react";
import { useState } from "react";
import "../../Styles/Contact.css";
import { useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const initialValues = { username: "", subject: "", email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [sendMessage, setSendMessage] = useState(false);

  const closeMessageSend = () => {
    setSendMessage(false);
  };

  const handlerChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Name is required!";
    }
    if (!values.subject) {
      errors.subject = "Subject is required!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const validateSend = (e,error) => {
    if (
      e.target.name.value !== "" &&
      e.target.subject.value !== "" &&
      e.target.message.value !== "" &&
      e.target.email.value !== "" &&
      error !== "Email is required!"&&  
      error !== "This is not a valid email format!"
    ) {
      return true;
    }
    return false;
  };

  const handlerSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    setSendMessage(true);
    

    if (validateSend(e,formErrors.email)) {
      emailjs
        .sendForm(
          "service_xoxklpd",
          "template_jqz9op4",
          formRef.current,
          "user_uqQfdg8XpW3ZuyDWUlhcj"
        )
        .then(
          (result) => {
            console.log(result.text);
            setFormValues({
              username: "",
              subject: "",
              email: "",
              message: "",
            });
          },
          (error) => {
            console.log("Failed", error.text);
          }
        );

      

    }
  };

  return (
    <div id="contact">
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-6 box">
            <div className="text-dark title">
              <h2>Contact Me</h2>
            </div>
            <div className="contactUnderline"></div>
            <div className="formContainer">
              {validate(formValues) === null}
              <form
                ref={formRef}
                onSubmit={handlerSubmit}
                className="d-flex flex-column justify-content-center "
              >
                <input
                  type="text"
                  placeholder="Name"
                  name="username"
                  className="form-control bg-transparent "
                  value={formValues.username}
                  onChange={handlerChange}
                ></input>
                <p>{formErrors.username}</p>
                <input
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  className="form-control bg-transparent"
                  value={formValues.subject}
                  onChange={handlerChange}
                ></input>
                <p>{formErrors.subject}</p>
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  className="form-control bg-transparent"
                  value={formValues.email}
                  onChange={handlerChange}
                ></input>
                <p>{formErrors.email}</p>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  name="message"
                  className="form-control bg-transparent"
                  value={formValues.message}
                  onChange={handlerChange}
                ></textarea>
                <p className="text-danger">{formErrors.message}</p>
                <div className="d-flex justify-content-center w-100">
                  <button className="btn w-50">Send Message</button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-6 pt-5 ">
            <div className="container">
              <div className="contactsTitle">
                <div className="text-dark">
                  <h2>Get in touch</h2>
                </div>
                <div className="getTouchUnderline "></div>
                <p className="mb-5 getInTouchP">
                  Always available to get in touch and bring my services. Feel
                  free to contact me.
                </p>
                <div className="container">
                  <div className="d-flex justify-content-evenly my-3 mediaContact">
                    <div className="contact w-25 text-center">
                      <a
                        href="https://www.linkedin.com/in/federico-lencina/"
                        target="blank"
                      >
                        <i className="fab fa-linkedin"></i>
                      </a>
                    </div>
                    <div className="w-75">
                      <p className="contactP">Linkedin</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly my-3 mediaContact">
                    <div className="contact w-25 text-center">
                      <a href="https://wa.link/520qgd" target="blank">
                        <i class="fab fa-whatsapp"></i>
                      </a>
                    </div>
                    <div className="w-75">
                      <p className="contactP">Phone</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly my-3 mediaContact">
                    <div className="contact w-25 text-center">
                      <a
                        href="mailto:federiconahuellencina@gmail.com"
                        target="blank"
                      >
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

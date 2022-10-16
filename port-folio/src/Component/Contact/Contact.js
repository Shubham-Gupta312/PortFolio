import React from 'react'
import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";
import {IoIosContact} from 'react-icons/io'
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_hbtd0wf","template_sjtwy0a",form.current,"ULiU7QDM4GdNcvd7X");

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h1><IoIosContact className='contact__icon'/>Contact Me</h1>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>shubhamgupta7082@gmail.com</h5>
            <a href="mailto:shubhamgupta7082@gmail.com" target="_blank">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Linkedin</h4>
            <h5>Shubham Gupta</h5>
            <a
              href="https://www.linkedin.com/in/shubham-gupta-5588a6200/"
              target="_blank"
            >
              Send Message
            </a>
          </article>
          
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+91 7082383894</h5>
            <a
              href= "https://api.whatsapp.com/send?phone=+91 7082383894"
              target="_blank"
            >
              Send Message
            </a>
          </article>
        </div>
        {/* ---- END---- */}
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email Id"
            required
          />
          <textarea
            name="message"
            id="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact

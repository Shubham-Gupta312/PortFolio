import React from "react";
import "./Footer.css";
import { AiFillLinkedin, AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { ImTwitter } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        Shubham Gupta
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#project">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://linkedin.com" target='_blank'>
          <AiFillLinkedin className="footer__social-icon" />
        </a>
        <a href="https://instagram.com" target='_blank'>
          <AiFillInstagram className="footer__social-icon" />
        </a>
        <a href="https://github.com" target='_blank'>
          <AiFillGithub className="footer__social-icon" />
        </a>
        <a href="https://twiter.com" target='_blank'>
          <ImTwitter className="footer__social-icon" />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Shubham Gupta. All rights reserved</small>
      </div>
    </footer>
  );
};

export default Footer;

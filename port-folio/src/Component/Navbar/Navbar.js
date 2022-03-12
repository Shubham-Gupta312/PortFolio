import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { GoProject } from "react-icons/go";
import { BiBook, BiMessageSquareDetail } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav>
      {/* <div className="container nav__container">
        <div className="nav__container-block"> */}
          <a href="#" title="Home">
            <AiOutlineHome />
          </a>
          <a href="#about" title="About">
            <AiOutlineUser />
          </a>

          <a href="#experience" title="Experience">
            <BiBook />
          </a>

          <a href="#skill" title="Skills">
            <FaBookReader />
          </a>

          <a href="#project" title="Project">
            <GoProject />
          </a>
          <a href="#contact" title="Contact">
            <BiMessageSquareDetail />
          </a>
        {/* </div>
      </div> */}
    </nav>
  );
};

export default Navbar;

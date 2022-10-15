import React from "react";
import "./Home.css";
import CTA from "./CTA";
import IMG from '../../assets/IMG7.jpg'

const Home = () => {
  return (
    <header>
      <div className="container header__container">
        <div className="name__container">
        <h5>Hello I'm</h5>
        <h1>Shubham Gupta</h1>
        <h5>FullStack Developer</h5>
        </div>
        <CTA />

        {/* <div className="container me__container">
        <div className="me__me">
          <div className="me">
            <img src={IMG} alt="" />
          </div>
        </div>
        </div> */}
       </div>
    </header>
  );
};

export default Home;
